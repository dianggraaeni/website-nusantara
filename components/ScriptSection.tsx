import React, { useState } from 'react';
import { scripts, ScriptData } from '../data/scriptData';

const ScriptSection: React.FC = () => {
  const [selectedScript, setSelectedScript] = useState<ScriptData | null>(null);

  // Jika ada aksara yang dipilih, tampilkan halaman detail
  if (selectedScript) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] text-cream py-20 px-4 animate-fadeIn">
        <div className="max-w-4xl mx-auto">
          {/* Tombol Kembali */}
          <button 
            onClick={() => setSelectedScript(null)}
            className="mb-8 flex items-center gap-2 text-gold hover:underline transition-all group"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span> Kembali ke Aksara Nusantara
          </button>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Visual Aksara */}
            <div className="space-y-6">
              <div className="aspect-square bg-heritage/40 border border-gold/20 rounded-[2rem] flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-gold/5 blur-3xl opacity-30 group-hover:opacity-60 transition-opacity"></div>
                <span className="text-[10rem] md:text-[15rem] text-gold font-serif relative z-10 drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]">
                  {selectedScript.char}
                </span>
              </div>
              <img 
                src={selectedScript.image} 
                alt={selectedScript.name}
                className="w-full h-48 object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700 border border-gold/10"
              />
            </div>

            {/* Informasi Detail */}
            <div className="space-y-8">
              <div>
                <p className="text-gold font-bold tracking-[0.2em] mb-2">{selectedScript.origin}</p>
                <h2 className="text-5xl md:text-6xl font-serif text-white">{selectedScript.name}</h2>
              </div>
              
              <div className="space-y-6 text-cream/80 leading-relaxed">
                <section>
                  <h4 className="text-gold font-bold uppercase text-xs tracking-widest mb-2 italic">Deskripsi</h4>
                  <p>{selectedScript.description}</p>
                </section>
                
                <section>
                  <h4 className="text-gold font-bold uppercase text-xs tracking-widest mb-2 italic">Sejarah</h4>
                  <p>{selectedScript.history}</p>
                </section>

                <section>
                  <h4 className="text-gold font-bold uppercase text-xs tracking-widest mb-2 italic">Fungsi & Penggunaan</h4>
                  <p>{selectedScript.function}</p>
                </section>

                <div className="p-6 bg-gold/5 border-l-4 border-gold rounded-r-xl">
                  <h4 className="text-gold font-bold uppercase text-xs tracking-widest mb-2 italic">Nilai Budaya & Filosofi</h4>
                  <p className="italic">"{selectedScript.philosophy}"</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Tampilan Utama (Grid)
  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <div className="text-center mb-16 space-y-4">
        <p className="text-gold font-bold uppercase tracking-[0.4em] text-sm">Goresan Peradaban dari Berbagai Penjuru Indonesia</p>
        <h2 className="text-5xl md:text-7xl font-serif text-white mb-6">Aksara Nusantara</h2>
        <div className="max-w-2xl mx-auto h-[1px] bg-gradient-to-r from-transparent via-gold/50 to-transparent mb-6"></div>
        <p className="text-cream/70 text-lg max-w-3xl mx-auto leading-relaxed italic">
          "Indonesia memiliki setidaknya 12 aksara nusantara yang telah teridentifikasi, antara lain: 
          Kawi, Sunda, Buda, Bali, Bugis (Lontara), Jawa, Batak, Pegon, Rejang, Lampung, Makassar, dan Kerinci (Incung)."
        </p>
      </div>

      {/* Grid Utama */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {scripts.map((s) => (
          <button
            key={s.id}
            onClick={() => setSelectedScript(s)}
            className="group relative bg-heritage/30 border border-gold/10 p-8 rounded-3xl hover:border-gold/50 hover:-translate-y-2 transition-all duration-500 text-center overflow-hidden"
          >
            {/* Hover Background Effect */}
            <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/5 transition-colors duration-500"></div>
            
            <div className="relative z-10">
              <div className="mb-6 h-24 flex items-center justify-center">
                <span className="text-6xl text-gold group-hover:scale-125 transition-transform duration-500 ease-out drop-shadow-lg">
                  {s.char}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-1 group-hover:text-gold transition-colors">{s.name}</h3>
              <p className="text-xs text-gold/50 uppercase tracking-widest">{s.origin}</p>
            </div>
            
            {/* Glow effect on hover */}
            <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-gold/10 blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </button>
        ))}
      </div>

      {/* Footer Info */}
      <div className="mt-20 text-center opacity-40">
        <p className="text-sm tracking-widest uppercase">Eksplorasi Warisan Budaya Indonesia</p>
      </div>
    </div>
  );
};

export default ScriptSection;