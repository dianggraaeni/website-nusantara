
import React from 'react';

const scripts = [
  { char: 'ꦲ', latin: 'Ha', meaning: 'Hana caraka (Ada utusan)', origin: 'Jawa' },
  { char: 'ᬳ', latin: 'Ha', meaning: 'Aksara Bali (Suci)', origin: 'Bali' },
  { char: 'ᮃ', latin: 'A', meaning: 'Aksara Sunda (Luhur)', origin: 'Sunda' },
  { char: '𑻠', latin: 'Ka', meaning: 'Lontara (Bugis)', origin: 'Sulawesi' },
];

const ScriptSection: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20 pattern-batik">
      <div className="bg-heritage/80 border border-gold/10 p-12 rounded-[3rem] backdrop-blur-xl">
        <div className="text-center mb-16">
          <p className="text-gold font-bold uppercase tracking-[0.3em] mb-4">Goresan Peradaban</p>
          <h2 className="text-4xl md:text-6xl font-serif">Aksara Nusantara</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {scripts.map((s, i) => (
            <div key={i} className="flex flex-col items-center group">
              <div className="w-32 h-32 bg-[#1a0f0a] rounded-2xl flex items-center justify-center border border-gold/20 group-hover:border-gold group-hover:bg-maroon transition-all duration-500 mb-6 shadow-xl relative overflow-hidden">
                <span className="text-5xl text-gold font-serif">{s.char}</span>
                <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <h3 className="text-xl font-bold text-gold mb-1 uppercase tracking-widest">{s.latin}</h3>
              <p className="text-xs text-cream/50 mb-2">{s.origin}</p>
              <p className="text-center text-sm text-cream/70 italic opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                "{s.meaning}"
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-maroon/20 p-8 rounded-3xl border border-gold/10">
            <h3 className="text-2xl font-serif mb-4 text-gold italic">Mengapa Aksara Penting?</h3>
            <p className="text-cream/70 leading-relaxed mb-6">
              Aksara bukan sekadar simbol bunyi, melainkan wadah pikiran leluhur. Di dalamnya tersimpan mantra, ramalan, dan catatan hukum yang membangun peradaban kita.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-gold">✦</span>
                <span className="text-sm text-cream/80">Identitas unik yang membedakan satu wilayah dengan yang lain.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold">✦</span>
                <span className="text-sm text-cream/80">Media transmisi pengetahuan tradisional (obat-obatan, pertanian).</span>
              </li>
            </ul>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-gold/10 blur-xl rounded-full opacity-50 group-hover:opacity-100 transition-opacity"></div>
            <img 
              src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=600" 
              alt="Ancient Script" 
              className="relative rounded-2xl border border-gold/20 grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScriptSection;
