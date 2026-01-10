import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { traditions } from '../data/traditionData';

interface GalleryProps {
  onClose: () => void;
  onSelect: (id: string) => void;
}

const TraditionGalleryView: React.FC<GalleryProps> = ({ onClose, onSelect }) => {
  
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';
    window.scrollTo(0, 0);
    
    return () => { 
      document.body.style.overflow = originalStyle; 
    };
  }, []);

  return createPortal(
    <div className="fixed inset-0 z-[888888] bg-[#0a0a0a] overflow-y-auto h-screen w-screen overscroll-contain">
      
      {/* Background Decor */}
      <div className="fixed inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-yellow-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-yellow-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-12 md:py-24 min-h-full flex flex-col">
        
        {/* ================= HEADER SECTION ================= */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-yellow-500" />
              <p className="text-yellow-500 tracking-[0.4em] uppercase text-[10px] font-bold">Arsip Budaya</p>
            </div>
            {/* Galeri Tradisi sejajar di tengah */}
            <h1 className="text-5xl md:text-8xl font-serif text-white leading-tight flex justify-center md:justify-start">
              Galeri&nbsp;
              <span className="italic text-yellow-500/90">Tradisi</span>
            </h1>

            {/* Deskripsi singkat */}
            <p className="text-white/70 max-w-2xl text-sm md:text-base mt-4">
              Jelajahi kekayaan tradisi dan budaya dari berbagai daerah di Nusantara. Temukan cerita, filosofi, dan keunikan setiap tradisi yang membentuk identitas bangsa.
            </p>

            {/* Call to action singkat */}
            <span className="text-yellow-500 uppercase text-xs md:text-sm font-bold tracking-widest mt-2">
              Jelajahi setiap tradisi di setiap daerahnya.
            </span>
          </div>

          <button 
            onClick={onClose} 
            className="group flex items-center gap-3 bg-white/5 border border-white/10 px-8 py-4 rounded-full hover:bg-yellow-500 hover:text-black transition-all duration-500 sticky top-0 z-50 backdrop-blur-md"
          >
            <span className="uppercase text-[10px] tracking-[0.3em] font-bold">Tutup Galeri</span>
            <span className="text-xl group-hover:rotate-90 transition-transform duration-500">✕</span>
          </button>
        </div>
        
        {/* ================= GRID SECTION ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16 pb-24">
          {traditions.map((item) => (
            <div 
              key={item.id} 
              onClick={() => onSelect(item.id)} 
              className="group cursor-pointer flex flex-col"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] mb-8 border border-white/5 bg-[#151515]">
                <img 
                  src={item.image} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s] ease-out opacity-70 group-hover:opacity-100" 
                  alt={item.name} 
                  loading="lazy"
                />
                
                {/* Overlay saat Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-10">
                   <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <span className="text-white text-[9px] uppercase font-bold tracking-widest">Lihat Detail</span>
                      <span className="text-yellow-500">→</span>
                   </div>
                </div>
              </div>

              {/* Text Info */}
              <div className="px-2">
                <p className="text-yellow-500/60 text-[10px] font-bold uppercase tracking-[0.3em] mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
                  {item.region}
                </p>
                <h3 className="text-3xl font-serif text-white group-hover:text-yellow-500 transition-colors duration-300 mb-4">
                  {item.name}
                </h3>
                <div className="h-px w-full bg-white/5 relative overflow-hidden">
                  <div className="absolute inset-0 bg-yellow-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ================= FOOTER GALLERY ================= */}
        <div className="mt-auto border-t border-white/5 pt-12 text-center">
          <p className="text-white/20 text-[10px] tracking-[0.5em] uppercase font-medium">
            Menampilkan {traditions.length} Warisan Budaya Nusantara
          </p>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default TraditionGalleryView;