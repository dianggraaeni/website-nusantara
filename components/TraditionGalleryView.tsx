import React, { useEffect } from 'react';
import { traditions } from '../data/traditionData';

const TraditionGalleryView: React.FC<{ onClose: () => void; onSelect: (id: string) => void }> = ({ onClose, onSelect }) => {
  
  useEffect(() => {
    // Paksa ke atas saat terbuka
    window.scrollTo(0, 0);
    // Kunci scroll background (body utama)
    document.body.style.overflow = 'hidden';
    
    return () => { 
      document.body.style.overflow = 'unset'; 
    };
  }, []);

  return (
    // Tambahkan h-screen dan overscroll-behavior
    <div className="fixed inset-0 z-[100] bg-[#0a0a0a] overflow-y-auto h-screen w-screen overscroll-contain">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-20 min-h-full flex flex-col">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6">
          <div>
            <h1 className="text-5xl md:text-7xl font-serif text-cream mb-2">Galeri Tradisi</h1>
            <p className="text-gold/60 tracking-widest uppercase text-xs">Menjelajahi Kekayaan Budaya Nusantara</p>
          </div>
          <button 
            onClick={onClose} 
            className="text-gold border border-gold/30 px-8 py-3 rounded-full hover:bg-gold hover:text-black transition-all uppercase text-xs tracking-widest font-bold sticky top-0 bg-[#0a0a0a]/80 backdrop-blur-sm z-10"
          >
            Tutup Galeri ✕
          </button>
        </div>
        
        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 pb-20"> {/* Tambahkan pb-20 agar item bawah tidak mentok */}
          {traditions.map((item) => (
            <div 
              key={item.id} 
              onClick={() => onSelect(item.id)} 
              className="group cursor-pointer"
            >
              <div className="aspect-[4/5] overflow-hidden rounded-2xl mb-6 border border-white/5 relative bg-[#1a1a1a]">
                <img 
                  src={item.image} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
                  alt={item.name} 
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
              </div>
              <p className="text-gold text-[10px] font-bold uppercase tracking-[0.3em] mb-2">{item.region}</p>
              <h3 className="text-3xl font-serif text-cream group-hover:text-gold transition-colors duration-300">{item.name}</h3>
              <div className="w-0 group-hover:w-full h-px bg-gold/50 mt-4 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TraditionGalleryView;