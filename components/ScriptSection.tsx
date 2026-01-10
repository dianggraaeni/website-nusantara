import React, { useState } from 'react';
import { scripts, ScriptData } from '../data/scriptData';

const ScriptSection: React.FC = () => {
  const [selectedScript, setSelectedScript] = useState<ScriptData | null>(null);

  if (selectedScript) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] text-cream py-10 md:py-20 px-4 animate-fadeIn">
        <div className="max-w-7xl mx-auto">
          {/* Tombol Kembali */}
          <button 
            onClick={() => setSelectedScript(null)}
            className="mb-10 flex items-center gap-2 text-gold hover:text-white transition-all group"
          >
            <span className="group-hover:-translate-x-2 transition-transform duration-300">←</span> 
            <span className="tracking-[0.2em] uppercase text-xs font-bold">Kembali</span>
          </button>

          {/* Grid Layout: Gambar di atas (Hero) atau di samping (Desktop) */}
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* BAGIAN VISUAL (KIRI/ATAS) */}
            <div className="w-full lg:w-3/5 space-y-8">
              {/* Gambar Utama - Solusi Agar Tidak Terpotong */}
              <div className="relative rounded-3xl overflow-hidden bg-white/[0.02] border border-gold/10 group">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                <img 
                  src={selectedScript.image} 
                  alt={selectedScript.name}
                  className="w-full h-auto object-contain block transform transition-transform duration-1000 group-hover:scale-[1.02]"
                />
                
                {/* Overlay Label */}
                <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-gold/20">
                  <p className="text-gold text-[10px] uppercase tracking-[0.2em]">Gambar Aksara</p>
                </div>
              </div>

              <div className="flex items-center gap-6 p-6 bg-heritage/20 border border-gold/10 rounded-3xl">
                <div className="bg-gold/10 w-24 h-24 md:w-32 md:h-32 rounded-2xl flex items-center justify-center border border-gold/20">
                    <span className="text-5xl md:text-7xl text-gold drop-shadow-glow">
                        {selectedScript.char}
                    </span>
                </div>
                <div>
                    <h3 className="text-2xl font-serif text-white">Bentuk Karakter</h3>
                    <p className="text-cream/50 text-sm">Visualisasi simbol dasar dalam aksara {selectedScript.name}</p>
                </div>
              </div>
            </div>

            {/* BAGIAN INFORMASI (KANAN) */}
            <div className="w-full lg:w-2/5 space-y-8">
              <div className="border-b border-gold/20 pb-6">
                <p className="text-gold font-bold tracking-[0.4em] text-xs uppercase mb-3">{selectedScript.origin}</p>
                <h2 className="text-6xl md:text-7xl font-serif text-white mb-4 leading-none">{selectedScript.name}</h2>
              </div>
              
              <div className="space-y-8 text-cream/80 text-lg leading-relaxed">
                <section>
                  <h4 className="text-gold font-bold uppercase text-[10px] tracking-[0.3em] mb-3 opacity-60">Deskripsi Singkat</h4>
                  <p>{selectedScript.description}</p>
                </section>
                
                <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <h4 className="text-gold font-bold uppercase text-[10px] tracking-[0.3em] mb-2 opacity-60">Sejarah</h4>
                        <p className="text-sm leading-relaxed">{selectedScript.history}</p>
                    </div>
                    <div>
                        <h4 className="text-gold font-bold uppercase text-[10px] tracking-[0.3em] mb-2 opacity-60">Fungsi</h4>
                        <p className="text-sm leading-relaxed">{selectedScript.function}</p>
                    </div>
                </section>

                <div className="relative p-8 bg-gradient-to-br from-gold/10 to-transparent border-l-2 border-gold rounded-r-3xl">
                  <span className="absolute top-2 right-4 text-6xl text-gold/10 font-serif">"</span>
                  <h4 className="text-gold font-bold uppercase text-[10px] tracking-[0.3em] mb-4 italic">Filosofi & Nilai</h4>
                  <p className="italic text-white text-xl font-serif leading-snug">
                    {selectedScript.philosophy}
                  </p>
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
        <h2 className="text-5xl md:text-7xl font-serif mb-6">
          <span className="text-gold">Aksara</span> <span className="text-white">Nusantara</span>
        </h2>
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
            
            <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-gold/10 blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </button>
        ))}
      </div>
    </div>
  );
}

export default ScriptSection;