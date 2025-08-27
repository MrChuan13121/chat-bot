import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { ConversationService } from '../../services/conversation.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  sidebarVisible = true;
  search = '';
  conversations = [] as Array<{ id: string; title: string; lastMessage: string; updatedAt: number }>;
  activeConversationId = '1';
  messages: Array<{ role: 'user'|'bot'; text: string }>= [
    { role: 'bot', text: 'Xin chào! Tôi là Exex Chatbot.' }
  ];
  inputText = '';
  isTyping = false;
  attachments: File[] = [];

  constructor(private chat: ChatService, private conv: ConversationService) { }

  ngOnInit() {
    this.refreshList();
  }

  refreshList(){
    this.conversations = this.conv.list(this.search) as any;
  }

  async send(){
    const content = (this.inputText || '').trim();
    if (!content && this.attachments.length===0) return;
    if (content){
      this.messages.push({ role:'user', text: content });
    }
    this.inputText = '';
    const files = this.attachments; this.attachments = [];
    this.isTyping = true;
    const res = await this.chat.sendMessage({ text: content, files });
    this.isTyping = false;
    this.messages.push({ role:'bot', text: res.reply });
    this.conv.upsert({ id: this.activeConversationId, title: 'Cuộc trò chuyện', lastMessage: res.reply });
    this.refreshList();
  }
}
