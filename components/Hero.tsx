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

      {/* 2. OVERLAYS (Tiga lapis agar video estetik tapi tulisan tetap tajam) */}
      {/* Lapis 1: Gelap dasar */}
      <div className="absolute inset-0 -z-10 bg-black/40"></div>
      {/* Lapis 2: Gradasi ke bawah agar menyatu dengan section selanjutnya */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/20 via-transparent to-[#0f0a08]"></div>
      {/* Lapis 3: Sedikit rona cokelat/emas agar mewah */}
      <div className="absolute inset-0 -z-10 bg-[#0f0a08]/30 mix-blend-multiply"></div>

      {/* 3. CONTENT SECTION */}
      {/* 
          DIBUAT PRESISI: 
          Tambahkan '-mt-16' (mobile) dan 'md:-mt-24' (desktop) 
          untuk mengangkat tulisan ke atas. Ini akan membuatnya terlihat 
          benar-benar di tengah mata (mengompensasi adanya Navbar).
      */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto -mt-16 md:-mt-24">
        
        <p className="safe-animate-1 uppercase tracking-[0.5em] mb-6 font-bold text-xs md:text-sm" 
           style={{ color: '#D4AF37' }}>
          Jelajahi Kekayaan Ibu Pertiwi
        </p>
        
        <h1 className="safe-animate-2 text-6xl md:text-9xl font-serif mb-8 leading-tight text-white drop-shadow-2xl">
          Eksplore Budaya <br />
          <span className="italic italic-shadow" style={{ color: '#D4AF37' }}>Nusantara</span>
        </h1>
        
        <p className="safe-animate-3 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed font-light text-white/90">
          Menelusuri jejak sejarah, kemegahan bahasa, kearifan tradisi, dan keindahan aksara yang membentuk jati diri bangsa Indonesia.
        </p>
        
        <div className="safe-animate-4 flex flex-col sm:flex-row gap-6 justify-center">
          <a href="#history" 
             className="px-12 py-5 rounded-full font-bold uppercase tracking-widest hover:brightness-110 transition-all transform hover:-translate-y-1 shadow-xl text-sm"
             style={{ backgroundColor: '#D4AF37', color: '#000' }}>
            Mulai Eksplorasi
          </a>
          <a href="#about" 
             className="backdrop-blur-md border px-12 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-[#D4AF37] hover:text-black transition-all transform hover:-translate-y-1 text-sm text-white"
             style={{ borderColor: 'rgba(212, 175, 55, 0.5)' }}>
            Tentang Kami
          </a>
        </div>
      </div>

      {/* CSS KHUSUS (Copy semua ini) */}
      <style>{`
        /* Animasi yang lebih aman: teks tetap muncul meski animasi gagal load */
        @keyframes fadeInRise {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        .safe-animate-1 { animation: fadeInRise 1s ease-out forwards; animation-delay: 0.2s; opacity: 0; }
        .safe-animate-2 { animation: fadeInRise 1s ease-out forwards; animation-delay: 0.4s; opacity: 0; }
        .safe-animate-3 { animation: fadeInRise 1s ease-out forwards; animation-delay: 0.6s; opacity: 0; }
        .safe-animate-4 { animation: fadeInRise 1s ease-out forwards; animation-delay: 0.8s; opacity: 0; }

        .italic-shadow {
          text-shadow: 0 0 30px rgba(212, 175, 55, 0.6);
          font-style: italic;
        }

        h1 {
          font-family: 'Playfair Display', serif, system-ui;
        }
      `}</style>
    </div>
  );
};

export default Hero;