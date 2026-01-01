import React, { useEffect, useRef, useState, useMemo } from 'react';
import { 
  sumatraHistory, jawaHistory, kalimantanHistory, 
  sulawesiHistory, baliNusaHistory, malukuPapuaHistory,
  RegionHistory 
} from '../data/historyData';

/**
 * KOMPONEN HALAMAN DETAIL (FULL PAGE VIEW)
 * Muncul saat salah satu provinsi diklik
 */
const HistoryDetailView: React.FC<{ region: RegionHistory; onBack: () => void }> = ({ region, onBack }) => {
  return (
    <div className="fixed inset-0 z-[500] bg-[#050505] overflow-y-auto no-scrollbar animate-page-in font-sans">
      {/* HERO SECTION */}
      <div className="relative h-[65vh] w-full flex items-end">
        <img 
          src={region.image} 
          className="absolute inset-0 w-full h-full object-cover opacity-50 saturate-[0.8]" 
          alt={region.name} 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-black/60"></div>
        
        {/* Tombol Kembali */}
        <button 
          onClick={onBack}
          className="absolute top-10 left-6 md:left-12 z-50 flex items-center gap-4 group"
        >
          <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center group-hover:bg-gold group-hover:text-black transition-all duration-500 text-gold">
            <span className="text-xl">←</span>
          </div>
          <span className="text-gold font-bold text-[10px] uppercase tracking-[0.5em] group-hover:text-white transition-colors">Kembali</span>
        </button>

        <div className="relative z-10 p-10 md:p-20 max-w-5xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-gold"></div>
            <span className="text-gold text-xs uppercase tracking-[0.6em] font-bold">Arsip Dokumentasi</span>
          </div>
          <h1 className="text-white font-serif text-6xl md:text-9xl mb-6 leading-none drop-shadow-2xl">{region.name}</h1>
          <p className="text-gold/80 text-xl md:text-2xl font-serif italic leading-relaxed max-w-3xl">"{region.summary}"</p>
        </div>
      </div>

      {/* CONTENT SECTION */}
      <div className="max-w-7xl mx-auto px-10 md:px-20 py-24 grid lg:grid-cols-12 gap-20">
        {/* Info Ringkas */}
        <div className="lg:col-span-4 space-y-10">
          <div className="p-10 border border-white/5 bg-white/[0.02] rounded-3xl">
            <h4 className="text-gold text-[10px] uppercase tracking-[0.4em] font-bold mb-8 border-b border-gold/20 pb-4">Data Wilayah</h4>
            <div className="space-y-6">
              <div>
                <span className="text-white/30 text-[9px] uppercase tracking-widest block mb-1">Nama Provinsi</span>
                <span className="text-white font-serif text-2xl">{region.name}</span>
              </div>
              <div>
                <span className="text-white/30 text-[9px] uppercase tracking-widest block mb-1">Ibukota</span>
                <span className="text-gold font-serif text-2xl">{region.capital}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Sejarah */}
        <div className="lg:col-span-8 relative">
           <h3 className="text-white font-serif text-4xl mb-20 flex items-center justify-between">
              Garis Waktu Sejarah
              <span className="text-gold/20 text-[10px] font-sans uppercase tracking-[0.6em] font-bold">Chronology</span>
           </h3>
           
           <div className="space-y-24 relative border-l border-white/5">
              {region.timeline.map((item, i) => (
                <div key={i} className="relative pl-12 group">
                   <div className="absolute left-[-5px] top-2 w-[10px] h-[10px] rounded-full bg-gold shadow-[0_0_15px_#d4af37] group-hover:scale-150 transition-transform duration-500"></div>
                   <div className="flex flex-col md:flex-row gap-8 items-baseline">
                      <span className="text-gold font-serif text-5xl font-bold opacity-60 group-hover:opacity-100 transition-opacity">
                         {item.year}
                      </span>
                      <div className="flex-1">
                         <h4 className="text-white font-bold text-lg uppercase tracking-widest mb-4 group-hover:text-gold transition-colors duration-500">
                           {item.title}
                         </h4>
                         <p className="text-white/50 text-base leading-relaxed italic font-serif">
                           {item.description}
                         </p>
                      </div>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </div>

      <div className="py-24 border-t border-white/5 text-center">
         <button onClick={onBack} className="text-gold text-[10px] font-bold uppercase tracking-[0.6em] hover:text-white transition-colors">Tutup Dokumentasi Sejarah</button>
      </div>
    </div>
  );
};

/**
 * KOMPONEN UTAMA
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

  const handleStart = (e: React.MouseEvent | React.TouchEvent) => {
    isDragging.current = true;
    startX.current = 'touches' in e ? e.touches[0].clientX : e.clientX;
    lastRotation.current = rotation;
  };

  const handleMove = (e: MouseEvent | TouchEvent) => {
    if (!isDragging.current) return;
    const clientX = 'touches' in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
    const deltaX = clientX - startX.current;
    setRotation(lastRotation.current + (deltaX * 0.08));
  };

  const handleEnd = () => (isDragging.current = false);

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
      
      if (absAngle < minDiff) {
        minDiff = absAngle;
        nearestIndex = index;
      }

      const x = Math.sin(angleRad) * radius;
      const z = Math.cos(angleRad) * radius - radius + (absAngle < 20 ? 150 : 0); 
      const rotateY = -normalizedAngle; 

      const isVisible = absAngle < 85; 
      const isActive = absAngle < (angleStep / 2);

      const scale = isActive ? 1.15 : 0.75 + (Math.cos(angleRad) * 0.1);
      const opacity = isVisible ? (isActive ? 1 : 0.2 + (Math.cos(angleRad) * 0.4)) : 0;

      return {
        transform: `translate3d(${x}px, 0, ${z}px) rotateY(${rotateY}deg) scale(${scale})`,
        opacity,
        zIndex: Math.round(z + radius),
        isVisible,
        isActive
      };
    });

    if (nearestIndex !== activeIndex) setActiveIndex(nearestIndex);
    return styles;
  }, [rotation, radius, allProvinces, angleStep, activeIndex]);

  return (
    <div className="relative bg-[#050505] min-h-screen py-10 overflow-hidden flex flex-col items-center justify-center font-sans">
      
      {selectedRegion ? (
        <HistoryDetailView region={selectedRegion} onBack={() => setSelectedRegion(null)} />
      ) : (
        <>
          {/* Background Text Gede */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
            <h1 className="text-[20vw] font-serif text-white/[0.015] uppercase leading-none font-bold">
              {allProvinces[activeIndex].name}
            </h1>
          </div>

          {/* Header Informasi */}
          <div className="absolute top-10 text-center z-[100] w-full px-4">
            <div className="flex items-center justify-center gap-4 mb-3">
                <div className="h-[1px] w-10 bg-gold/30"></div>
                <p className="text-gold tracking-[0.8em] text-[10px] uppercase font-bold">PROVINSI</p>
                <div className="h-[1px] w-10 bg-gold/30"></div>
            </div>
            <h2 className="text-white font-serif text-5xl md:text-7xl tracking-tight transition-all duration-700 mb-2 drop-shadow-2xl">
              {allProvinces[activeIndex].name}
            </h2>
            <p className="text-gold/60 tracking-[0.5em] text-[11px] uppercase font-medium animate-fade-in">
              Ibukota: {allProvinces[activeIndex].capital}
            </p>
          </div>

          {/* 3D Stage */}
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
                        : 'border-white/5 grayscale brightness-[0.2] pointer-events-none'}
                    `}>
                      
                      {style.isActive && (
                        <div className="absolute inset-0 border-[1px] border-gold/20 m-3 pointer-events-none rounded-lg z-20"></div>
                      )}

                      <img 
                        src={region.image} 
                        className={`w-full h-full object-cover transition-all duration-1000 ${style.isActive ? 'grayscale-0 saturate-[1.3] scale-105' : 'grayscale'}`} 
                        alt={region.name} 
                      />
                      
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

          {/* Navigation */}
          <div className="absolute bottom-10 w-full flex flex-col items-center gap-6 px-4 z-[100]">
            <div className="w-64 h-[1px] bg-white/5 relative overflow-hidden">
              <div 
                className="absolute top-0 left-0 h-full bg-gold/60 transition-all duration-500 shadow-[0_0_10px_#d4af37]"
                style={{ width: `${((activeIndex + 1) / totalItems) * 100}%` }}
              />
            </div>
            <div className="w-full flex justify-center">
                <span className="text-white/20 text-[9px] uppercase tracking-[0.8em] whitespace-nowrap text-center select-none block">
                  Geser Horisontal untuk Navigasi
                </span>
            </div>
          </div>
        </>
      )}

      <style>{`
        .animate-page-in { animation: pageIn 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }
        @keyframes pageIn { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in { animation: fadeIn 1.5s ease-out; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        .custom-scroll::-webkit-scrollbar { width: 2px; }
        .custom-scroll::-webkit-scrollbar-thumb { background: #d4af37; border-radius: 10px; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );
};

export default HistorySection;