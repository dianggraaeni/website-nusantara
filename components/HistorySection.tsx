
import React, { useEffect, useRef, useState, useMemo } from 'react';
import { 
  sumatraHistory, 
  jawaHistory, 
  baliNusaHistory, 
  kalimantanHistory, 
  sulawesiHistory, 
  malukuPapuaHistory,
  RegionHistory 
} from '../data/historyData';

type RegionCategory = 'sumatra' | 'jawa' | 'kalimantan' | 'sulawesi' | 'bali-nusa' | 'maluku-papua';

const categoryMap: Record<RegionCategory, { label: string; data: RegionHistory[] }> = {
  sumatra: { label: 'Sumatra', data: sumatraHistory },
  jawa: { label: 'Jawa', data: jawaHistory },
  kalimantan: { label: 'Kalimantan', data: kalimantanHistory },
  sulawesi: { label: 'Sulawesi', data: sulawesiHistory },
  'bali-nusa': { label: 'Bali & Nusa Tenggara', data: baliNusaHistory },
  'maluku-papua': { label: 'Maluku & Papua', data: malukuPapuaHistory },
};

const HistorySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<RegionCategory>('sumatra');
  const [rotation, setRotation] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedRegion, setSelectedRegion] = useState<RegionHistory | null>(null);
  
  const isDragging = useRef(false);
  const startX = useRef(0);
  const lastRotation = useRef(0);

  const currentList = useMemo(() => categoryMap[activeCategory].data, [activeCategory]);
  
  // Carousel Configuration
  const totalItems = currentList.length;
  const anglePerItem = 360 / totalItems;
  const radius = window.innerWidth < 768 ? 400 : 700;

  // Manual Drag Logic
  const handleStart = (e: React.MouseEvent | React.TouchEvent) => {
    isDragging.current = true;
    startX.current = 'touches' in e ? e.touches[0].clientX : e.clientX;
    lastRotation.current = rotation;
  };

  const handleMove = (e: MouseEvent | TouchEvent) => {
    if (!isDragging.current) return;
    const clientX = 'touches' in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
    const deltaX = clientX - startX.current;
    
    const newRotation = lastRotation.current + (deltaX * 0.2);
    setRotation(newRotation);
  };

  const handleEnd = () => {
    isDragging.current = false;
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mouseup', handleEnd);
    window.addEventListener('touchmove', handleMove);
    window.addEventListener('touchend', handleEnd);
    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseup', handleEnd);
      window.removeEventListener('touchmove', handleMove);
      window.removeEventListener('touchend', handleEnd);
    };
  }, [rotation]);

  // Reset rotation when category changes
  useEffect(() => {
    setRotation(0);
    setActiveIndex(0);
  }, [activeCategory]);

  const cardTransforms = useMemo(() => {
    let maxZ = -Infinity;
    let newActiveIndex = 0;

    const transforms = currentList.map((_, index) => {
      const baseAngle = index * anglePerItem;
      const finalAngle = baseAngle - rotation;
      
      const angleRad = (finalAngle * Math.PI) / 180;
      const x = Math.sin(angleRad) * radius;
      const z = Math.cos(angleRad) * radius;
      
      const scale = 0.5 + (z + radius) / (radius * 2) * 0.5;
      const opacity = 0.2 + (z + radius) / (radius * 2) * 0.8;
      const isFront = z > radius * 0.75;

      if (z > maxZ) {
        maxZ = z;
        newActiveIndex = index;
      }

      return {
        transform: `translate3d(${x}px, 0, ${z}px) rotateY(${finalAngle}deg) scale(${scale})`,
        opacity,
        zIndex: Math.round(z + radius),
        isFront
      };
    });

    setActiveIndex(newActiveIndex);
    return transforms;
  }, [rotation, radius, currentList, anglePerItem]);

  return (
    <div className="relative bg-[#0f0a08] min-h-screen py-32 overflow-hidden">
      {/* 1. SECTION HEADER */}
      <div className="max-w-4xl mx-auto px-4 text-center mb-16 relative z-10 animate-fade-in">
        <h2 className="text-5xl md:text-7xl font-serif text-white mb-6 relative inline-block">
          Jejak Sejarah Bangsa
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-32 h-[3px] bg-gold"></div>
        </h2>
        <p className="text-lg md:text-xl text-cream/60 mt-12 max-w-2xl mx-auto leading-relaxed">
          Menelusuri perjalanan sejarah daerah-daerah di Indonesia sebagai bagian dari peradaban Nusantara.
        </p>
      </div>

      {/* 2. REGION TABS */}
      <div className="max-w-6xl mx-auto px-4 mb-20 relative z-20 overflow-x-auto no-scrollbar">
        <div className="flex justify-center min-w-max gap-4 p-2">
          {(Object.keys(categoryMap) as RegionCategory[]).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all border ${
                activeCategory === cat 
                ? 'bg-gold text-heritage border-gold shadow-lg shadow-gold/20' 
                : 'bg-transparent text-cream/50 border-white/10 hover:border-gold/50 hover:text-gold'
              }`}
            >
              {categoryMap[cat].label}
            </button>
          ))}
        </div>
      </div>

      {/* 3. 3D CAROUSEL */}
      <div 
        className="relative h-[60vh] md:h-[70vh] flex flex-col items-center justify-center cursor-grab active:cursor-grabbing mb-40"
        onMouseDown={handleStart}
        onTouchStart={handleStart}
      >
        <div className="relative w-full h-full flex items-center justify-center" style={{ perspective: '2000px' }}>
          <div className="relative w-full h-full flex items-center justify-center" style={{ transformStyle: 'preserve-3d' }}>
            {currentList.map((region, index) => {
              const style = cardTransforms[index];
              return (
                <div
                  key={region.id}
                  className="absolute will-change-transform"
                  style={{
                    transform: style?.transform || '',
                    opacity: style?.opacity || 0,
                    zIndex: style?.zIndex || 0,
                    width: '600px',
                    maxWidth: '85vw',
                    transformStyle: 'preserve-3d'
                  }}
                  onClick={() => style?.isFront && setSelectedRegion(region)}
                >
                  <div className={`group relative bg-[#1a0f0d] border ${style?.isFront ? 'border-gold/60' : 'border-white/5'} overflow-hidden rounded-3xl shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)] transition-colors`}>
                    <div className="aspect-[16/9] relative">
                      <img src={region.image} className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700" alt={region.name} />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                      <div className="absolute bottom-0 left-0 p-8 w-full">
                        <div className="flex items-center gap-3 mb-2">
                           <div className="w-10 h-[1px] bg-gold"></div>
                           <span className="text-gold text-[10px] uppercase font-bold tracking-[0.3em]">{region.capital}</span>
                        </div>
                        <h3 className="text-3xl md:text-4xl font-serif text-white">{region.name}</h3>
                        {style?.isFront && (
                          <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2 text-gold font-bold text-xs uppercase tracking-widest">
                            Detail Perjalanan Sejarah <span>&rarr;</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Interaction Tip */}
        <div className="absolute bottom-0 text-center pointer-events-none opacity-40">
           <p className="text-[10px] tracking-[0.5em] text-gold uppercase">Geser Horizontal untuk Memutar • Ketuk untuk Detail</p>
        </div>
      </div>

      {/* 4. INTERACTIVE MAP VISUAL */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-[#0f0a08] border border-white/5 p-6 md:p-12 rounded-[2.5rem] shadow-inner">
           <div className="text-center mb-10">
              <h3 className="text-2xl md:text-3xl font-serif text-white mb-2">Mozaik Visual Nusantara</h3>
              <div className="w-16 h-[1px] bg-gold mx-auto"></div>
           </div>

           <div className="relative aspect-[21/9] bg-[#1a0f0d] rounded-[2rem] overflow-hidden group shadow-2xl border border-white/5">
              <img 
                src="https://images.unsplash.com/photo-1518544862322-b44c804689bd?auto=format&fit=crop&q=80&w=1600" 
                alt="Map Background" 
                className="w-full h-full object-cover opacity-20 grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                 <div className="flex gap-4">
                    <div className="w-2 h-2 bg-gold rounded-full animate-ping"></div>
                    <div className="w-2 h-2 bg-gold rounded-full animate-ping [animation-delay:0.2s]"></div>
                    <div className="w-2 h-2 bg-gold rounded-full animate-ping [animation-delay:0.4s]"></div>
                 </div>
                 <p className="text-gold text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] select-none mt-6">
                   Menghubungkan Sejarah Sabang sampai Merauke
                 </p>
              </div>
           </div>
        </div>
      </div>

      {/* 5. MODAL DETAIL TIMELINE */}
      {selectedRegion && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl animate-fade-in">
          <div className="bg-[#140c0a] border border-white/10 w-full max-w-5xl rounded-[3rem] overflow-hidden max-h-[85vh] flex flex-col shadow-2xl">
            <div className="p-8 md:p-10 border-b border-white/5 flex justify-between items-center bg-maroon/20">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center text-heritage font-serif text-xl">
                  {selectedRegion.name[0]}
                </div>
                <div>
                  <span className="text-gold font-bold tracking-[0.3em] text-[10px] uppercase block mb-1">Ibukota: {selectedRegion.capital}</span>
                  <h3 className="text-2xl md:text-4xl font-serif text-white">{selectedRegion.name}</h3>
                </div>
              </div>
              <button 
                onClick={() => setSelectedRegion(null)} 
                className="w-12 h-12 rounded-full border border-gold/20 flex items-center justify-center text-gold hover:bg-gold hover:text-heritage transition-all"
              >✕</button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-8 md:p-16 space-y-16 no-scrollbar scroll-smooth">
               <div className="relative">
                 <p className="text-xl md:text-2xl text-cream/70 italic leading-relaxed font-serif text-center max-w-3xl mx-auto relative z-10">
                   "{selectedRegion.summary}"
                 </p>
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gold/5 text-9xl font-serif select-none -z-0">
                    Saksi
                 </div>
               </div>
               
               <div className="space-y-16 relative">
                 <div className="absolute left-0 md:left-[96px] top-0 bottom-0 w-px bg-white/5"></div>
                 {selectedRegion.timeline.map((item, i) => (
                   <div key={i} className="flex flex-col md:flex-row gap-10 items-start relative z-10">
                     <div className="w-full md:w-48 shrink-0 flex items-center gap-4">
                       <span className="text-4xl font-serif text-gold block">{item.year}</span>
                       <div className="h-[1px] flex-1 bg-gold/20"></div>
                     </div>
                     <div className="flex-1">
                       <h4 className="text-xl font-bold text-white mb-4 uppercase tracking-widest">{item.title}</h4>
                       <p className="text-cream/50 leading-relaxed text-sm md:text-base">{item.description}</p>
                     </div>
                   </div>
                 ))}
               </div>
            </div>
            
            <div className="p-8 border-t border-white/5 bg-heritage/50 text-center">
               <p className="text-[10px] uppercase tracking-[0.4em] text-gold/40">Bagian dari Sejarah Luhur Nusantara</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HistorySection;
