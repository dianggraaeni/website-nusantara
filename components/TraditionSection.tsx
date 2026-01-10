import React, { useRef } from 'react';
import { traditions } from '../data/traditionData';

interface Props {
  onSelect: (id: string) => void; 
  onViewAll: () => void;
}

const TraditionSection: React.FC<Props> = ({ onViewAll }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Duplikasi data traditions agar looping terlihat tidak terputus
  const duplicatedTraditions = [...traditions, ...traditions];

  return (
    <section id="tradition" className="relative z-10 w-full py-24 overflow-hidden">
      
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img 
          src="/history.jpg" 
          alt="background-texture"
          className="w-full h-full object-cover opacity-300"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#1a130d]/90 to-[#0a0a0a]" />
      </div>

      <div className="relative z-10">
        <div className="max-w-5xl mx-auto px-6 mb-24 text-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-8 text-white tracking-tight">
            Warisan <span className="text-yellow-500 drop-shadow-[0_0_20px_rgba(234,179,8,0.4)]">Tradisi</span> Nusantara
          </h2>
          <p className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-medium">
            Dari laku hingga perayaan, tradisi menjadi ruang hidup kearifan lokal yang meneguhkan identitas Nusantara.
          </p>

          <button
            onClick={(e) => { e.preventDefault(); onViewAll(); }}
            className="mt-10 relative inline-block w-full max-w-xs px-6 py-4 text-center text-yellow-500 font-bold uppercase text-[10px] tracking-widest
                       border-2 border-yellow-500/70 bg-black/40 backdrop-blur-sm
                       hover:bg-yellow-500 hover:text-black transition-all duration-500
                       rounded-lg overflow-hidden group"
          >
            <span className="relative z-10">Lihat Detail Galeri</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            <span className="absolute inset-0 border-t border-b border-yellow-500/30 pointer-events-none"></span>
          </button>
        </div>

        {/* ================= KONTEN GAMBAR (BERHENTI SAAT HOVER) ================= */}
        <div className="relative w-full overflow-hidden">
          {/* Container ini bergerak ke kiri, dan PAUSE saat kursor masuk */}
          <div className="flex w-max animate-slow-marquee hover:pause-animation">
            {duplicatedTraditions.map((item, index) => (
              <div 
                key={`${item.id}-${index}`} 
                className="flex-none w-[280px] md:w-[380px] px-4 group cursor-default"
              >
                <div className="relative aspect-[2/3] rounded-[200px] overflow-hidden border border-white/10 bg-[#151515] transition-all duration-700 group-hover:border-yellow-500/40 group-hover:shadow-[0_0_30px_rgba(234,179,8,0.1)]">
                  
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="absolute inset-0 w-full h-full object-cover opacity-60 transition-all duration-[1.5s] group-hover:scale-110 group-hover:opacity-80"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80" />
                  
                  <div className="absolute inset-0 flex flex-col justify-end items-center pb-16 px-8 text-center">
                    <h3 className="text-2xl md:text-3xl font-serif text-white mb-2 leading-tight">
                      {item.name}
                    </h3>
                    <p className="text-[10px] md:text-xs text-yellow-500 font-bold uppercase tracking-[0.3em]">
                      {item.region}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CSS UNTUK ANIMASI DAN EFEK BERHENTI (PAUSE) */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .animate-slow-marquee {
          display: flex;
          /* 70s supaya gerakannya pelan banget */
          animation: marquee 70s linear infinite;
        }

        /* INI YANG MEMBUATNYA BERHENTI SAAT KURSOR LEWAT */
        .hover\\:pause-animation:hover {
          animation-play-state: paused;
        }

        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </section>
  );
};

export default TraditionSection;