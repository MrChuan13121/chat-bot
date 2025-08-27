import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConversationService {
  private conversations: Array<{ id: string; title: string; lastMessage: string; updatedAt: number }>
    = [];

  constructor() {
    // seed with demo conversations
    this.conversations = [
      { id: '1', title: 'Giới thiệu sản phẩm', lastMessage: 'Chúng tôi hỗ trợ AI chatbot...', updatedAt: Date.now() - 10000 },
      { id: '2', title: 'Pricing', lastMessage: 'Gói Starter từ $9/tháng', updatedAt: Date.now() - 20000 },
      { id: '3', title: 'Tư vấn tích hợp', lastMessage: 'Kết nối API CRM', updatedAt: Date.now() - 30000 },
    ];
  }

  list(query: string = '') {
    const q = (query || '').toLowerCase();
    return this.conversations
      .filter(c => !q || c.title.toLowerCase().includes(q) || c.lastMessage.toLowerCase().includes(q))
      .sort((a, b) => b.updatedAt - a.updatedAt);
  }

  upsert(conv: { id: string; title: string; lastMessage: string }) {
    const idx = this.conversations.findIndex(c => c.id === conv.id);
    const updated = { ...conv, updatedAt: Date.now() };
    if (idx >= 0) this.conversations[idx] = updated; else this.conversations.unshift(updated);
  }
}
