import React from 'react';
import { traditions } from '../data/traditionData';

interface Props {
  onSelect: (id: string) => void;
  onViewAll: () => void;
}

const TraditionSection: React.FC<Props> = ({ onSelect, onViewAll }) => {
  return (
    <section className="relative z-10 w-full py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 mb-12 flex justify-between items-end">
        <div className="pointer-events-auto">
          <h2 className="text-4xl md:text-5xl font-serif mb-4 text-cream">Adat & Tradisi</h2>
          <p className="text-cream/60">Warisan leluhur yang terus hidup di nadi zaman.</p>
        </div>
        <button 
          onClick={(e) => {
            e.preventDefault();
            onViewAll();
          }}
          className="pointer-events-auto text-gold border-b border-gold/30 pb-1 hover:text-white hover:border-white transition-all tracking-widest text-sm uppercase cursor-pointer"
        >
          Lihat Galeri Lengkap
        </button>
      </div>

      {/* Kontainer Scroll Horizontal */}
      <div className="relative w-full">
        <div className="flex overflow-x-auto gap-8 px-6 pb-12 no-scrollbar touch-pan-x active:cursor-grabbing">
          {traditions.map((item) => (
            <div 
              key={item.id} 
              onClick={() => onSelect(item.id)}
              className="flex-none w-[280px] md:w-[380px] group cursor-pointer pointer-events-auto"
            >
              {/* Kartu Oval */}
              <div className="relative aspect-[2/3] rounded-[200px] overflow-hidden border border-gold/20 bg-[#151515] transition-all duration-500 group-hover:scale-[1.02] group-hover:border-gold/60 group-hover:shadow-[0_0_50px_rgba(212,175,55,0.2)]">
                
                {/* Gambar */}
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110"
                />

                {/* Overlay Gelap */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80" />
                
                {/* Teks Konten */}
                <div className="absolute inset-0 flex flex-col justify-end items-center pb-16 px-8 text-center">
                  <h3 className="text-2xl md:text-3xl font-serif text-white mb-2 leading-tight group-hover:text-gold transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-[10px] md:text-xs text-gold font-bold uppercase tracking-[0.3em]">
                    {item.region}
                  </p>
                  <div className="w-10 h-0.5 bg-gold/40 mt-5 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
                </div>
              </div>
            </div>
          ))}
          {/* Spacer agar scroll tidak terpotong di akhir */}
          <div className="flex-none w-20" />
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </section>
  );
};

export default TraditionSection;