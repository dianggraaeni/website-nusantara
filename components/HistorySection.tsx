import React, { useEffect, useLayoutEffect, useRef, useState, useMemo } from 'react';
import { createPortal } from 'react-dom'; // PENTING: Untuk menembus bug Perspective
import { 
  sumatraHistory, jawaHistory, kalimantanHistory, 
  sulawesiHistory, baliNusaHistory, malukuPapuaHistory,
  RegionHistory 
} from '../data/historyData';

/**
 * 1. KOMPONEN DETAIL (DIPAKSA KELUAR DARI CAROUSEL)
 */
const HistoryDetailView: React.FC<{ region: RegionHistory; onBack: () => void }> = ({ region, onBack }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    // A. Kunci total scroll body & html
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    
    // B. Reset window scroll ke 0 (menangani bug #history di URL)
    window.scrollTo(0, 0);

    // C. Reset scroll container detail ini ke 0 secara instan
    if (containerRef.current) {
      containerRef.current.scrollTop = 0;
    }

    return () => {
      document.body.style.overflow = originalStyle;
      document.documentElement.style.overflow = originalStyle;
    };
  }, [region]);

  // PORTAL: Memindahkan elemen ini langsung ke <body> browser
  return createPortal(
    <div 
      ref={containerRef}
      className="fixed inset-0 bg-[#050505] overflow-y-auto font-sans text-white"
      style={{ 
        zIndex: 9999999, // Di atas segalanya
        position: 'fixed',
        top: 0, left: 0, right: 0, bottom: 0,
        height: '100vh', width: '100vw'
      }}
    >
      {/* Tombol Kembali (Sticky agar tidak hilang) */}
      <div className="sticky top-0 left-0 w-full z-[100] p-6 md:p-10 pointer-events-none">
        <button 
          onClick={onBack}
          className="pointer-events-auto flex items-center gap-3 bg-black/80 backdrop-blur-xl px-6 py-3 rounded-full border border-white/10 hover:border-gold/50 transition-all text-gold shadow-2xl active:scale-95"
        >
          <span className="text-xl">←</span>
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white">Kembali Ke Galeri</span>
        </button>
      </div>

      {/* HERO SECTION */}
      <div className="relative w-full h-[75vh] flex items-end overflow-hidden mt-[-80px]">
        <img 
          src={region.image} 
          className="absolute inset-0 w-full h-full object-cover saturate-[1.2] brightness-[0.4]" 
          alt={region.name} 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent"></div>
        
        <div className="relative z-10 px-6 md:px-20 w-full max-w-7xl mx-auto pb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[1px] w-12 bg-gold"></div>
            <span className="text-gold text-[10px] uppercase tracking-[0.8em] font-bold">Arsip Dokumentasi</span>
          </div>
          <h1 className="text-white font-serif text-5xl md:text-9xl mb-6 leading-none drop-shadow-2xl">
            {region.name}
          </h1>
          <p className="text-gold/80 text-xl md:text-2xl font-serif italic max-w-3xl leading-relaxed">
            "{region.summary}"
          </p>
        </div>
      </div>

      {/* CONTENT SEJARAH */}
      <div className="max-w-7xl mx-auto px-6 md:px-20 py-24 grid lg:grid-cols-12 gap-16 md:gap-32 bg-[#050505]">
        <div className="lg:col-span-4 h-fit lg:sticky lg:top-32">
          <div className="space-y-6">
            <span className="text-gold/40 font-bold text-[9px] uppercase tracking-[0.6em] block mb-3 font-sans">Data Wilayah</span>
            <h2 className="text-white font-serif text-4xl block mb-2">{region.name}</h2>
            <h3 className="text-gold font-serif text-2xl italic opacity-90">Ibukota: {region.capital}</h3>
          </div>
        </div>

        <div className="lg:col-span-8">
           <div className="flex items-center justify-between mb-16 border-b border-white/5 pb-8">
              <h3 className="text-white font-serif text-3xl italic">Lini Masa Peristiwa</h3>
              <span className="text-gold/20 text-[10px] uppercase tracking-[1em] font-bold">Chronicle</span>
           </div>
           <div className="space-y-32 relative">
              <div className="absolute left-0 top-0 bottom-0 w-px bg-white/10"></div>
              {region.timeline.map((item, i) => (
                <div key={i} className="relative pl-12 group">
                   <div className="absolute left-[-4px] top-4 w-2 h-2 rounded-full bg-gold shadow-[0_0_15px_#d4af37]"></div>
                   <span className="text-gold font-serif text-7xl md:text-9xl font-bold block opacity-15 transition-opacity group-hover:opacity-100 mb-4">
                      {item.year}
                   </span>
                   <h4 className="text-white font-bold text-xl md:text-3xl uppercase tracking-widest mb-4">
                      {item.title}
                   </h4>
                   <p className="text-white/50 text-base md:text-xl leading-relaxed italic font-serif">
                      {item.description}
                   </p>
                </div>
              ))}
           </div>
        </div>
      </div>

      <div className="py-40 text-center border-t border-white/5 bg-[#050505]">
         <button onClick={onBack} className="px-12 py-5 border border-gold/40 text-gold text-[10px] font-bold uppercase tracking-[0.5em] hover:bg-gold hover:text-black transition-all duration-700 rounded-full">
           Tutup Dokumentasi
         </button>
      </div>
    </div>,
    document.body // MEMAKSA PINDAH KE BODY
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

  const angleStep = 360 / allProvinces.length; 
  const radius = typeof window !== 'undefined' && window.innerWidth < 768 ? 600 : 1300;

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
      return { 
        transform: `translate3d(${x}px, 0, ${z}px) rotateY(${rotateY}deg) scale(${isActive ? 1.15 : 0.75})`, 
        opacity: isVisible ? (isActive ? 1 : 0.3) : 0, 
        zIndex: Math.round(z + radius), 
        isVisible, isActive 
      };
    });
    if (nearestIndex !== activeIndex) setActiveIndex(nearestIndex);
    return styles;
  }, [rotation, radius, allProvinces, angleStep, activeIndex]);

  return (
    <div id="history" className="relative bg-[#050505] min-h-screen py-20 flex flex-col items-center justify-center font-sans overflow-hidden">
      
      {/* 1. PORTAL DETAIL (Dipindah secara ajaib ke luar Carousel) */}
      {selectedRegion && (
        <HistoryDetailView region={selectedRegion} onBack={() => setSelectedRegion(null)} />
      )}

      {/* 2. BACKGROUND TEXT */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <h1 className="text-[20vw] font-serif text-white/[0.015] uppercase leading-none font-bold">
          {allProvinces[activeIndex].name}
        </h1>
      </div>

      {/* 3. HEADER */}
      <div className="absolute top-10 text-center z-[50] w-full px-4">
        <p className="text-gold tracking-[0.8em] text-[10px] uppercase font-bold mb-2">PROVINSI</p>
        <h2 className="text-white font-serif text-5xl md:text-7xl mb-2 drop-shadow-2xl">
          {allProvinces[activeIndex].name}
        </h2>
        <p className="text-gold/60 tracking-[0.5em] text-[11px] uppercase font-medium">
          Ibukota: {allProvinces[activeIndex].capital}
        </p>
      </div>

      {/* 4. 3D CAROUSEL */}
      <div 
        className="relative w-full h-[60vh] flex items-center justify-center cursor-grab active:cursor-grabbing mt-20"
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
                className="absolute"
                style={{
                  transform: style.transform,
                  opacity: style.opacity,
                  zIndex: style.zIndex,
                  width: '520px', maxWidth: '85vw',
                  transformStyle: 'preserve-3d',
                  transition: isDragging.current ? 'none' : 'transform 1s cubic-bezier(0.2, 0.8, 0.2, 1), opacity 0.5s'
                }}
                onClick={() => style.isActive && setSelectedRegion(region)}
              >
                <div className={`group relative aspect-[16/10] bg-black rounded-xl border transition-all duration-700 overflow-hidden ${style.isActive ? 'border-gold shadow-[0_0_80px_rgba(212,175,55,0.2)] cursor-pointer' : 'border-white/5 grayscale brightness-[0.2]'}`}>
                  <img src={region.image} className="w-full h-full object-cover" alt={region.name} />
                  {style.isActive && (
                    <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity backdrop-blur-[2px]">
                        <span className="text-gold font-bold text-[10px] uppercase tracking-[0.5em]">Lihat Sejarah</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HistorySection;