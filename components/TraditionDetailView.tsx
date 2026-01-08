import React, { useEffect, useRef } from 'react';
import { traditions } from '../data/traditionData';

const TraditionDetailView: React.FC<{ id: string; onClose: () => void }> = ({ id, onClose }) => {
  const data = traditions.find(t => t.id === id);
  // Ref untuk menargetkan kontainer scroll secara spesifik
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // 1. Paksa kontainer internal ke posisi paling atas (0)
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
    }
    
    // 2. Kunci scroll body utama
    document.body.style.overflow = 'hidden';
    
    return () => { 
      document.body.style.overflow = 'unset'; 
    };
  }, [id]); // Trigger ulang jika ID berubah

  if (!data) return null;

  return (
    <div 
      ref={scrollContainerRef} // Pasang ref di sini
      className="fixed inset-0 z-[150] bg-[#0a0a0a] overflow-y-auto h-screen w-screen scroll-smooth"
    >
      <div className="relative min-h-screen">
        {/* Hero Section dengan Gambar */}
        <div className="relative h-[50vh] md:h-[70vh] w-full bg-[#1a1a1a]">
          {data.image ? (
            <img 
              src={data.image} 
              alt={data.name} 
              className="w-full h-full object-cover opacity-60" 
              onError={(e) => (e.currentTarget.style.display = 'none')} // Sembunyikan jika broken
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-b from-gold/10 to-[#0a0a0a]" />
          )}
          
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/20 to-transparent" />
          
          {/* Tombol Kembali yang tetap di atas (sticky/fixed) */}
          <div className="absolute top-8 left-4 md:left-8 z-[160]">
            <button 
              onClick={onClose} 
              className="flex items-center gap-2 text-gold bg-black/60 backdrop-blur-md border border-gold/30 px-6 py-2 rounded-full hover:bg-gold hover:text-black transition-all font-bold text-sm tracking-widest uppercase"
            >
              ← Kembali
            </button>
          </div>
        </div>

        {/* Content Card - Dibuat lebih rapi dengan padding yang pas */}
        <div className="max-w-5xl mx-auto px-4 md:px-6 -mt-32 md:-mt-48 relative z-10 pb-24">
          <div className="bg-[#0f0f0f]/95 backdrop-blur-2xl border border-white/10 p-6 md:p-14 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              <span className="inline-block text-gold font-bold uppercase tracking-[0.4em] text-[10px] md:text-xs mb-4 border-b border-gold/30 pb-1">
                {data.region}
              </span>
              
              <h1 className="text-4xl md:text-7xl font-serif text-cream mb-10 leading-[1.1]">
                {data.name}
              </h1>
              
              <div className="grid lg:grid-cols-3 gap-12 md:gap-16">
                <div className="lg:col-span-2 space-y-12">
                  <div className="space-y-4">
                    <h4 className="text-gold/50 text-[10px] font-bold uppercase tracking-[0.2em]">Tentang Tradisi</h4>
                    <p className="text-lg md:text-xl text-cream/80 leading-relaxed font-light">
                      {data.desc}
                    </p>
                  </div>
                  
                  <div className="pt-10 border-t border-white/10">
                    <h4 className="text-gold/50 text-[10px] font-bold uppercase tracking-[0.2em] mb-6">Filosofi</h4>
                    <blockquote className="text-2xl md:text-4xl font-serif italic text-gold/90 leading-snug">
                      "{data.philosophy}"
                    </blockquote>
                  </div>
                </div>
                
                {/* Galeri Samping */}
                <div className="space-y-8">
                  <h4 className="text-gold/50 text-[10px] font-bold uppercase tracking-[0.2em] border-b border-white/10 pb-2">Galeri Foto</h4>
                  <div className="grid grid-cols-1 gap-5">
                    {data.gallery.map((img, i) => (
                      <div key={i} className="group overflow-hidden rounded-2xl border border-white/5 aspect-video bg-[#1a1a1a]">
                        <img 
                          src={img} 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100" 
                          alt={`Gallery ${i}`} 
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TraditionDetailView;