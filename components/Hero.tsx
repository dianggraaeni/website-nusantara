
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden pattern-batik">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f0a08]/40 via-transparent to-[#0f0a08]"></div>
      
      {/* Background Media Placeholder */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1518544862322-b44c804689bd?auto=format&fit=crop&q=80&w=2000" 
          alt="Indonesian Culture" 
          className="w-full h-full object-cover opacity-40 scale-105 transition-transform duration-[10s] hover:scale-100"
        />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <p className="text-gold uppercase tracking-[0.3em] mb-4 animate-fade-in opacity-0" style={{ animationDelay: '0.2s' }}>
          Jelajahi Kekayaan Ibu Pertiwi
        </p>
        <h1 className="text-5xl md:text-8xl font-serif mb-6 leading-tight animate-fade-in opacity-0" style={{ animationDelay: '0.5s' }}>
          Eksplore Budaya <br />
          <span className="italic text-gold">Nusantara</span>
        </h1>
        <p className="text-lg md:text-xl text-cream/80 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in opacity-0" style={{ animationDelay: '0.8s' }}>
          Menelusuri jejak sejarah, kemegahan bahasa, kearifan tradisi, dan keindahan aksara yang membentuk jati diri bangsa Indonesia.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in opacity-0" style={{ animationDelay: '1.1s' }}>
          <a href="#history" className="bg-gold text-heritage px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-white transition-all transform hover:-translate-y-1">
            Mulai Eksplorasi
          </a>
          <a href="#about" className="border border-gold text-gold px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-gold hover:text-heritage transition-all transform hover:-translate-y-1">
            Tentang Kami
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-gold/50 text-xs uppercase tracking-widest mb-2">Gulir</span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-gold to-transparent"></div>
      </div>
    </div>
  );
};

export default Hero;
