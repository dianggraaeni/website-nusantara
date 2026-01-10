import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { traditions } from '../data/traditionData';

const TraditionDetailView: React.FC<{ id: string; onClose: () => void }> = ({ id, onClose }) => {
  const data = traditions.find(t => t.id === id);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
    }
  }, [id]);

  if (!data) {
    return createPortal(
      <div className="fixed inset-0 z-[999999] bg-black flex items-center justify-center text-white">
        <div className="text-center">
          <p className="mb-4">Data tradisi tidak ditemukan (ID: {id})</p>
          <button onClick={onClose} className="bg-yellow-500 text-black px-6 py-2 rounded-full">Tutup</button>
        </div>
      </div>,
      document.body
    );
  }

  return createPortal(
    <div 
      ref={scrollContainerRef}
      className="fixed inset-0 z-[999999] bg-[#0a0a0a] overflow-y-auto h-screen w-screen font-sans text-white"
    >
      <div className="relative min-h-screen">
        {/* Tombol Kembali - Dipaksa muncul di paling depan */}
        <div className="fixed top-8 left-6 md:left-12 z-[1000000]">
          <button 
            onClick={(e) => {
              e.preventDefault();
              onClose();
            }} 
            className="flex items-center gap-3 bg-black/60 backdrop-blur-xl border border-white/10 px-6 py-3 rounded-full hover:bg-yellow-500 hover:text-black transition-all font-bold text-[10px] tracking-[0.4em] uppercase shadow-2xl"
          >
            ← Kembali
          </button>
        </div>

        {/* Hero Section */}
        <div className="relative h-[65vh] md:h-[80vh] w-full">
          <img src={data.image} alt={data.name} className="w-full h-full object-cover brightness-[0.4]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
        </div>

        {/* Content Card */}
        <div className="max-w-6xl mx-auto px-6 -mt-40 relative z-10 pb-32">
          <div className="bg-[#111] backdrop-blur-2xl border border-white/10 p-8 md:p-20 rounded-[3rem] shadow-2xl">
              <span className="text-yellow-500 font-black uppercase tracking-[0.5em] text-[10px] block mb-6 border-l-2 border-yellow-500 pl-4">
                {data.region}
              </span>
              
              <h1 className="text-5xl md:text-8xl font-serif text-white mb-12 leading-tight">
                {data.name}
              </h1>
              
              <div className="grid lg:grid-cols-3 gap-16">
                <div className="lg:col-span-2 space-y-16">
                  <div className="space-y-6">
                    <h4 className="text-white/30 text-[9px] font-bold uppercase tracking-[0.3em]">Tentang Tradisi</h4>
                    <p className="text-xl md:text-2xl text-white/80 leading-relaxed font-light italic font-serif">
                      {data.desc}
                    </p>
                  </div>
                  
                  <div className="pt-12 border-t border-white/5">
                    <h4 className="text-white/30 text-[9px] font-bold uppercase tracking-[0.3em] mb-8">Filosofi Luhur</h4>
                    <blockquote className="text-3xl md:text-5xl font-serif italic text-yellow-500/90 leading-tight">
                      "{data.philosophy}"
                    </blockquote>
                  </div>
                </div>
                
                <div className="space-y-8">
                  <h4 className="text-white/30 text-[9px] font-bold uppercase tracking-[0.3em] border-b border-white/5 pb-4">Dokumentasi Visual</h4>
                  <div className="grid grid-cols-1 gap-6">
                    {data.gallery.map((img, i) => (
                      <div key={i} className="group overflow-hidden rounded-[2rem] border border-white/5 aspect-video bg-[#1a1a1a]">
                        <img src={img} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-700" alt="Gallery" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default TraditionDetailView;