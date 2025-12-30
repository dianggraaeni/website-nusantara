
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* 1. Video Background Layer (Local File) */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover scale-105"
        >
          {/* Pastikan file 'hero-video.mp4' ada di folder proyek Anda */}
          <source src="./hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* 2. Color Palette Overlays */}
      {/* Lapisan 1: Heritage Dark Tint */}
      <div className="absolute inset-0 -z-10 bg-[#0f0a08]/70 mix-blend-multiply"></div>
      
      {/* Lapisan 2: Maroon & Gold Subtle Gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-maroon/30 via-transparent to-gold/10"></div>
      
      {/* Lapisan 3: Vignette & Bottom Edge Blend */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-transparent to-[#0f0a08]"></div>

      {/* 3. Content Section (Teks Asli Sesuai Screenshot) */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <p className="text-gold uppercase tracking-[0.5em] mb-6 animate-fade-in opacity-0 font-bold text-xs md:text-sm" style={{ animationDelay: '0.2s' }}>
          Jelajahi Kekayaan Ibu Pertiwi
        </p>
        
        <h1 className="text-6xl md:text-9xl font-serif mb-8 leading-tight animate-fade-in opacity-0 drop-shadow-2xl text-white" style={{ animationDelay: '0.5s' }}>
          Eksplore Budaya <br />
          <span className="italic text-gold italic-shadow">Nusantara</span>
        </h1>
        
        <p className="text-lg md:text-xl text-cream/80 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in opacity-0 font-light" style={{ animationDelay: '0.8s' }}>
          Menelusuri jejak sejarah, kemegahan bahasa, kearifan tradisi, dan keindahan aksara yang membentuk jati diri bangsa Indonesia.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in opacity-0" style={{ animationDelay: '1.1s' }}>
          <a href="#history" className="bg-gold text-heritage px-12 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-white transition-all transform hover:-translate-y-1 shadow-xl">
            Mulai Eksplorasi
          </a>
          <a href="#about" className="backdrop-blur-sm border border-gold/30 text-white px-12 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-gold hover:text-heritage transition-all transform hover:-translate-y-1">
            Tentang Kami
          </a>
        </div>
      </div>

      {/* 4. Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-60">
        <span className="text-gold text-[10px] uppercase tracking-[0.5em] mb-3 font-bold">Gulir</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-gold via-gold/50 to-transparent animate-pulse"></div>
      </div>

      <style>{`
        .italic-shadow {
          text-shadow: 0 0 40px rgba(212, 175, 55, 0.4);
        }
      `}</style>
    </div>
  );
};

export default Hero;
