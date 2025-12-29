
import React, { useState, useRef, useEffect } from 'react';
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

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      {isOpen ? (
        <div className="w-80 md:w-96 h-[500px] bg-heritage border border-gold/30 rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-fade-in">
          {/* Header */}
          <div className="bg-maroon p-4 border-b border-gold/20 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center text-heritage">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21a9 9 0 1 0-9-9c0 1.488.52 2.854 1.38 3.93L3 21l4.93-1.38A8.96 8.96 0 0 0 12 21Z"/></svg>
              </div>
              <span className="font-serif text-gold tracking-widest text-sm">Penjaga Budaya</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-gold/50 hover:text-gold">✕</button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 no-scrollbar">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${
                  m.role === 'user' 
                  ? 'bg-gold text-heritage rounded-tr-none' 
                  : 'bg-maroon/40 text-cream/90 border border-gold/10 rounded-tl-none'
                }`}>
                  {m.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-maroon/20 p-3 rounded-2xl rounded-tl-none animate-pulse text-gold text-xs">
                  Sedang menelusuri kitab...
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 bg-heritage border-t border-gold/10">
            <div className="flex gap-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Tanya soal budaya..."
                className="flex-1 bg-[#1a0f0a] border border-gold/20 rounded-full px-4 py-2 text-sm text-gold focus:outline-none focus:border-gold"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="w-10 h-10 bg-gold text-heritage rounded-full flex items-center justify-center disabled:opacity-50"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 bg-gold text-heritage rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform group"
        >
          <div className="absolute -top-12 right-0 bg-maroon text-gold text-[10px] px-3 py-1 rounded-full border border-gold/30 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Tanya Sang Penjaga
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21a9 9 0 1 0-9-9c0 1.488.52 2.854 1.38 3.93L3 21l4.93-1.38A8.96 8.96 0 0 0 12 21Z"/></svg>
        </button>
      )}
    </div>
  );
};

export default AIAssistant;
