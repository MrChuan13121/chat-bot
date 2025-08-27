import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  constructor() { }

  async sendMessage(input: { text?: string; files?: File[]; images?: File[] }): Promise<{ reply: string }>{
    // Simulate network + typing delay
    await new Promise(r => setTimeout(r, 600));
    const text = (input.text || '').trim();
    if (text) {
      // basic canned responses
      if (/price|pricing|giá/i.test(text)) {
        return { reply: 'Gói Starter từ $9/tháng. Pro từ $49/tháng. Enterprise liên hệ.' };
      }
      if (/hello|hi|xin chào|こんにちは|こんばんは|hey/i.test(text)) {
        return { reply: 'Xin chào! Tôi là Exex Chatbot. Tôi có thể giúp gì cho bạn?' };
      }
    }
    const fileNote = (input.files && input.files.length) ? ` Đã nhận ${input.files.length} file.` : '';
    const imgNote = (input.images && input.images.length) ? ` Đã nhận ${input.images.length} ảnh.` : '';
    return { reply: `Đã nhận yêu cầu của bạn.${fileNote}${imgNote}` };
  }
}
