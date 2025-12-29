
import React from 'react';

const languages = [
  { region: 'Jawa', phrase: 'Matur Nuwun', translation: 'Terima Kasih', fact: 'Bahasa dengan penutur terbanyak di Indonesia.' },
  { region: 'Sumatra (Batak)', phrase: 'Mauliate', translation: 'Terima Kasih', fact: 'Memiliki aksara khusus yang unik dan sakral.' },
  { region: 'Bali', phrase: 'Suksma', translation: 'Terima Kasih', fact: 'Mengenal tingkatan bahasa (Anggah-Ungguhing).' },
  { region: 'Papua', phrase: 'Amanai', translation: 'Terima Kasih', fact: 'Bagian dari kekayaan ribuan dialek di tanah Papua.' },
];

const LanguageSection: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20 bg-maroon/5 rounded-[4rem]">
      <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
        <div className="flex-1">
          <p className="text-gold font-bold tracking-widest mb-4">Leksikon Ibu</p>
          <h2 className="text-4xl md:text-6xl font-serif mb-6">Harmoni dalam Ribuan Kata</h2>
          <p className="text-cream/60 text-lg leading-relaxed">
            Indonesia memiliki lebih dari 718 bahasa daerah. Setiap kata menyimpan sejarah, 
            setiap logat menyimpan identitas. Mari menjaga keberagaman ini sebelum ia hilang ditelan waktu.
          </p>
        </div>
        <div className="flex-1 grid grid-cols-2 gap-4">
          <div className="bg-heritage p-8 rounded-2xl border border-gold/20 text-center">
            <span className="block text-4xl font-serif text-gold mb-2">718+</span>
            <span className="text-xs uppercase tracking-widest opacity-60">Bahasa Daerah</span>
          </div>
          <div className="bg-maroon p-8 rounded-2xl border border-gold/20 text-center">
            <span className="block text-4xl font-serif text-gold mb-2">1.340+</span>
            <span className="text-xs uppercase tracking-widest opacity-60">Suku Bangsa</span>
          </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {languages.map((lang, idx) => (
          <div key={idx} className="group relative bg-heritage/40 p-8 rounded-3xl border border-gold/10 hover:border-gold transition-all overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 bg-gold/10 -mr-10 -mt-10 rounded-full transition-transform group-hover:scale-150"></div>
            <p className="text-gold text-xs font-bold uppercase mb-6">{lang.region}</p>
            <h3 className="text-2xl font-serif mb-2 text-cream group-hover:text-gold transition-colors">"{lang.phrase}"</h3>
            <p className="text-sm text-cream/50 mb-6 italic">{lang.translation}</p>
            <div className="h-[1px] w-full bg-gold/10 mb-4"></div>
            <p className="text-xs leading-relaxed text-cream/70 opacity-0 group-hover:opacity-100 transition-opacity">
              {lang.fact}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LanguageSection;
