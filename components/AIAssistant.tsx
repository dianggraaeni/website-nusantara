import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { askCulturalSage } from '../services/geminiService';

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ role: 'user' | 'bot', content: string }[]>([
    { role: 'bot', content: 'Salam, saya Sang Penjaga Budaya. Apa yang ingin kamu ketahui tentang kekayaan Nusantara hari ini?' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setInput('');
    setIsLoading(true);

    const response = await askCulturalSage(userMsg);
    setMessages(prev => [...prev, { role: 'bot', content: response || 'Terjadi gangguan gaib pada koneksi kita.' }]);
    setIsLoading(false);
  };

  // KONTEN AI ASSISTANT
  const assistantJSX = (
    <div className="fixed bottom-8 right-8 z-[9999] flex flex-col items-end">
      {isOpen ? (
        <div className="w-[320px] md:w-[380px] h-[500px] bg-[#1a0f0a] border border-gold/30 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col overflow-hidden animate-fade-in mb-4">
          {/* Header */}
          <div className="bg-[#2a1a12] p-4 border-b border-gold/20 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center text-[#1a0f0a]">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21a9 9 0 1 0-9-9c0 1.488.52 2.854 1.38 3.93L3 21l4.93-1.38A8.96 8.96 0 0 0 12 21Z"/></svg>
              </div>
              <span className="font-serif text-gold tracking-widest text-sm uppercase">Penjaga Budaya</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-gold/50 hover:text-gold transition-colors text-xl">✕</button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-gold/20">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${
                  m.role === 'user' 
                  ? 'bg-gold text-black rounded-tr-none shadow-lg' 
                  : 'bg-[#2a1a12] text-cream/90 border border-gold/10 rounded-tl-none'
                }`}>
                  {m.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-[#2a1a12]/50 p-3 rounded-2xl rounded-tl-none animate-pulse text-gold text-xs">
                  Sedang menelusuri kitab...
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 bg-[#1a0f0a] border-t border-gold/10">
            <div className="flex gap-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Tanya soal budaya..."
                className="flex-1 bg-black/40 border border-gold/20 rounded-full px-4 py-2 text-sm text-gold focus:outline-none focus:border-gold/50 transition-all"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="w-10 h-10 bg-gold text-black rounded-full flex items-center justify-center disabled:opacity-50 hover:scale-105 active:scale-95 transition-all shadow-lg"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
              </button>
            </div>
          </div>
        </div>
      ) : null}

      {/* Tombol Toggle */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-gold text-black rounded-full shadow-[0_10px_30px_rgba(212,175,55,0.3)] flex items-center justify-center hover:scale-110 transition-transform group relative"
      >
        <div className="absolute -top-12 right-0 bg-black/80 text-gold text-[10px] px-3 py-1 rounded-full border border-gold/30 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Tanya Sang Penjaga
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21a9 9 0 1 0-9-9c0 1.488.52 2.854 1.38 3.93L3 21l4.93-1.38A8.96 8.96 0 0 0 12 21Z"/></svg>
      </button>
    </div>
  );

  return createPortal(assistantJSX, document.body);
};

export default AIAssistant;