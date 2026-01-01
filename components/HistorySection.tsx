import React, { useEffect, useRef, useState, useMemo } from 'react';
import { 
  sumatraHistory, jawaHistory, kalimantanHistory, 
  sulawesiHistory, baliNusaHistory, malukuPapuaHistory,
  RegionHistory 
} from '../data/historyData';

/**
 * 1. KOMPONEN HALAMAN DETAIL (FULL PAGE OVERLAY)
 */
const HistoryDetailView: React.FC<{ region: RegionHistory; onBack: () => void }> = ({ region, onBack }) => {
  // Hanya kunci scroll body saat detail ini terbuka
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[10000] bg-[#050505] w-full h-full overflow-y-auto font-sans animate-fade-in text-white">
      {/* Tombol Kembali (Sticky) */}
      <div className="sticky top-0 left-0 w-full z-[100] p-6 md:p-10 pointer-events-none">
        <button 
          onClick={onBack}
          className="pointer-events-auto flex items-center gap-3 bg-black/60 backdrop-blur-xl px-6 py-3 rounded-full border border-white/10 hover:border-gold/50 transition-all text-gold shadow-2xl active:scale-95"
        >
          <span className="text-xl">←</span>
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white">Kembali Ke Galeri</span>
        </button>
      </div>

      {/* HERO SECTION */}
      <div className="relative w-full h-[70vh] md:h-[80vh] flex items-end overflow-hidden mt-[-100px]">
        <img 
          src={region.image} 
          className="absolute inset-0 w-full h-full object-cover saturate-[1.1] brightness-[0.3]" 
          alt={region.name} 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent"></div>
        
        <div className="relative z-10 px-6 md:px-20 w-full max-w-7xl mx-auto pb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[1px] w-12 bg-gold"></div>
            <span className="text-gold text-[10px] uppercase tracking-[0.8em] font-bold">Arsip Dokumentasi</span>
          </div>
          <h1 className="text-white font-serif text-5xl md:text-8xl mb-6 leading-tight drop-shadow-2xl">
            {region.name}
          </h1>
          <p className="text-gold/80 text-xl md:text-2xl font-serif italic max-w-3xl leading-relaxed">
            "{region.summary}"
          </p>
        </div>
      </div>

      {/* CONTENT SECTION */}
      <div className="max-w-7xl mx-auto px-6 md:px-20 py-24 grid lg:grid-cols-12 gap-16 md:gap-32">
        <div className="lg:col-span-4 h-fit lg:sticky lg:top-32 space-y-10">
          <div className="space-y-6">
            <div>
              <span className="text-gold/40 font-bold text-[9px] uppercase tracking-[0.6em] block mb-3 font-sans">Data Wilayah</span>
              <span className="text-white font-serif text-4xl block mb-2">{region.name}</span>
              <span className="text-gold font-serif text-2xl italic opacity-90">Ibukota: {region.capital}</span>
            </div>
            <div className="w-20 h-px bg-gold/20"></div>
            <p className="text-white/40 text-sm leading-relaxed font-light italic font-serif">
              Jejak sejarah yang membentuk identitas luhur daerah ini sebagai bagian dari Nusantara.
            </p>
          </div>
        </div>

        <div className="lg:col-span-8">
           <div className="flex items-center justify-between mb-16 border-b border-white/5 pb-8">
              <h3 className="text-white font-serif text-3xl italic">Lini Masa Peristiwa</h3>
              <span className="text-gold/20 text-[10px] uppercase tracking-[1em] font-bold">Chronicle</span>
           </div>
           <div className="space-y-32 relative">
              <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-gold/40 via-white/5 to-transparent"></div>
              {region.timeline.map((item, i) => (
                <div key={i} className="relative pl-12 group">
                   <div className="absolute left-[-4px] top-4 w-2 h-2 rounded-full bg-gold shadow-[0_0_15px_#d4af37] transition-transform duration-500 group-hover:scale-150"></div>
                   <div className="space-y-4">
                      <span className="text-gold font-serif text-6xl md:text-8xl font-bold block opacity-15 group-hover:opacity-100 group-hover:translate-x-4 transition-all duration-1000">
                         {item.year}
                      </span>
                      <h4 className="text-white font-bold text-xl md:text-3xl uppercase tracking-widest leading-tight">
                         {item.title}
                      </h4>
                      <p className="text-white/50 text-base md:text-xl leading-relaxed italic font-serif max-w-2xl">
                         {item.description}
                      </p>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </div>

      {/* FOOTER DETAIL */}
      <div className="py-40 text-center border-t border-white/5 mt-20">
         <button onClick={onBack} className="px-12 py-5 border border-gold/40 text-gold text-[10px] font-bold uppercase tracking-[0.5em] hover:bg-gold hover:text-black transition-all duration-700 rounded-full shadow-lg">
           Kembali Ke Penjelajahan
         </button>
      </div>
    </div>
  );
};

/**
 * 2. KOMPONEN UTAMA
 */
const HistorySection: React.FC = () => {
  const allProvinces = useMemo(() => [
    ...sumatraHistory, ...jawaHistory, ...kalimantanHistory, 
    ...sulawesiHistory, ...baliNusaHistory, ...malukuPapuaHistory
  ], []);

  const [rotation, setRotation] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedRegion, setSelectedRegion] = useState<RegionHistory | null>(null);
  
  const isDragging = useRef(false);
  const startX = useRef(0);
  const lastRotation = useRef(0);

  const totalItems = allProvinces.length;
  const angleStep = 360 / totalItems; 
  const radius = typeof window !== 'undefined' && window.innerWidth < 768 ? 600 : 1300;

  // Carousel Drag Listener
  useEffect(() => {
    const handleMove = (e: MouseEvent | TouchEvent) => {
      if (!isDragging.current || selectedRegion) return;
      const clientX = 'touches' in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
      const deltaX = clientX - startX.current;
      setRotation(lastRotation.current + (deltaX * 0.08));
    };
    const handleEnd = () => (isDragging.current = false);

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
  }, [rotation, selectedRegion]);

  const handleStart = (e: React.MouseEvent | React.TouchEvent) => {
    if (selectedRegion) return;
    isDragging.current = true;
    startX.current = 'touches' in e ? e.touches[0].clientX : e.clientX;
    lastRotation.current = rotation;
  };

  const cardStyles = useMemo(() => {
    let nearestIndex = 0;
    let minDiff = Infinity;
    const styles = allProvinces.map((_, index) => {
      const itemAngle = (index * angleStep) - rotation;
      let normalizedAngle = itemAngle % 360;
      if (normalizedAngle > 180) normalizedAngle -= 360;
      if (normalizedAngle < -180) normalizedAngle += 360;
      const absAngle = Math.abs(normalizedAngle);
      const angleRad = (normalizedAngle * Math.PI) / 180;
      if (absAngle < minDiff) { minDiff = absAngle; nearestIndex = index; }
      const x = Math.sin(angleRad) * radius;
      const z = Math.cos(angleRad) * radius - radius + (absAngle < 20 ? 150 : 0); 
      const rotateY = -normalizedAngle; 
      const isVisible = absAngle < 85; 
      const isActive = absAngle < (angleStep / 2);
      const scale = isActive ? 1.15 : 0.75 + (Math.cos(angleRad) * 0.1);
      const opacity = isVisible ? (isActive ? 1 : 0.2 + (Math.cos(angleRad) * 0.4)) : 0;
      return { transform: `translate3d(${x}px, 0, ${z}px) rotateY(${rotateY}deg) scale(${scale})`, opacity, zIndex: Math.round(z + radius), isVisible, isActive };
    });
    if (nearestIndex !== activeIndex) setActiveIndex(nearestIndex);
    return styles;
  }, [rotation, radius, allProvinces, angleStep, activeIndex]);

  return (
    <div className="relative bg-[#050505] min-h-screen py-20 flex flex-col items-center justify-center font-sans overflow-hidden">
      
      {/* Background Text Gede */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <h1 className="text-[20vw] font-serif text-white/[0.015] uppercase leading-none font-bold">
          {allProvinces[activeIndex].name}
        </h1>
      </div>

      {/* Header Informasi */}
      <div className="absolute top-10 text-center z-[50] w-full px-4">
        <div className="flex items-center justify-center gap-4 mb-3">
            <div className="h-[1px] w-10 bg-gold/30"></div>
            <p className="text-gold tracking-[0.8em] text-[10px] uppercase font-bold">PROVINSI</p>
            <div className="h-[1px] w-10 bg-gold/30"></div>
        </div>
        <h2 className="text-white font-serif text-5xl md:text-7xl tracking-tight transition-all duration-700 mb-2 drop-shadow-2xl">
          {allProvinces[activeIndex].name}
        </h2>
        <p className="text-gold/60 tracking-[0.5em] text-[11px] uppercase font-medium">
          Ibukota: {allProvinces[activeIndex].capital}
        </p>
      </div>

      {/* Ring Stage */}
      <div 
        className={`relative w-full h-[60vh] flex items-center justify-center cursor-grab active:cursor-grabbing mt-20 transition-all duration-700 ${selectedRegion ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'}`}
        onMouseDown={handleStart}
        onTouchStart={handleStart}
        style={{ perspective: '2000px' }}
      >
        <div className="relative w-full h-full flex items-center justify-center" style={{ transformStyle: 'preserve-3d' }}>
          {allProvinces.map((region, index) => {
            const style = cardStyles[index];
            if (!style.isVisible) return null;
            return (
              <div
                key={region.id}
                className="absolute will-change-transform"
                style={{
                  transform: style.transform,
                  opacity: style.opacity,
                  zIndex: style.zIndex,
                  width: '520px', 
                  maxWidth: '85vw',
                  transformStyle: 'preserve-3d',
                  transition: isDragging.current ? 'none' : 'transform 1.2s cubic-bezier(0.2, 0.8, 0.2, 1), opacity 0.8s ease'
                }}
                onClick={() => style.isActive && setSelectedRegion(region)}
              >
                <div className={`
                  group relative aspect-[16/10] bg-[#0a0a0a] overflow-hidden rounded-xl border transition-all duration-700
                  ${style.isActive 
                    ? 'border-gold shadow-[0_0_80px_rgba(212,175,55,0.3)] cursor-pointer' 
                    : 'border-white/5 grayscale brightness-[0.2] pointer-events-none shadow-none'}
                `}>
                  <img src={region.image} className={`w-full h-full object-cover transition-all duration-1000 ${style.isActive ? 'grayscale-0 saturate-[1.3] scale-105' : 'grayscale'}`} alt={region.name} />
                  
                  {style.isActive && (
                    <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-[2px] z-30">
                        <div className="w-16 h-16 rounded-full border border-gold/50 flex items-center justify-center mb-4 bg-gold/10 transform scale-75 group-hover:scale-100 transition-transform duration-500">
                             <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-gold border-b-[8px] border-b-transparent ml-1"></div>
                        </div>
                        <span className="text-gold font-bold text-[10px] uppercase tracking-[0.5em]">Lihat Sejarah</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Progress Indicator */}
      <div className={`absolute bottom-10 w-full flex flex-col items-center gap-6 px-4 z-[50] transition-opacity duration-700 ${selectedRegion ? 'opacity-0' : 'opacity-100'}`}>
        <div className="w-64 h-[1px] bg-white/5 relative overflow-hidden">
          <div className="absolute top-0 left-0 h-full bg-gold/60 transition-all duration-500 shadow-[0_0_10px_#d4af37]" style={{ width: `${((activeIndex + 1) / totalItems) * 100}%` }} />
        </div>
        <span className="text-white/20 text-[9px] uppercase tracking-[0.8em] whitespace-nowrap text-center select-none block">
          Geser Horisontal untuk Navigasi
        </span>
      </div>

      {/* HALAMAN DETAIL - TETAP FIXED TAPI PUNYA OVERFLOW SENDIRI */}
      {selectedRegion && (
        <HistoryDetailView region={selectedRegion} onBack={() => setSelectedRegion(null)} />
      )}

      <style>{`
        .animate-fade-in { animation: fadeIn 0.6s ease-out forwards; }
        @keyframes fadeIn { from { opacity: 0; transform: scale(1.02); } to { opacity: 1; transform: scale(1); } }
        .custom-scroll::-webkit-scrollbar { width: 3px; }
        .custom-scroll::-webkit-scrollbar-thumb { background: #d4af37; border-radius: 10px; }
      `}</style>
    </div>
  );
};

export default HistorySection;