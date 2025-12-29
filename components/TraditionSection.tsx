
import React, { useState } from 'react';

const traditions = [
  { 
    name: 'Tari Saman', 
    region: 'Aceh', 
    image: 'https://images.unsplash.com/photo-1590483734724-38fa19dd24b1?auto=format&fit=crop&q=80&w=800',
    desc: 'Tarian ribuan tangan yang melambangkan kekompakan dan harmoni.',
    philosophy: 'Mencerminkan nilai pendidikan, keagamaan, sopan santun, kepahlawanan, kekompakan, dan kebersamaan.'
  },
  { 
    name: 'Lompat Batu', 
    region: 'Nias', 
    image: 'https://images.unsplash.com/photo-1544321703-e84705f956c8?auto=format&fit=crop&q=80&w=800',
    desc: 'Tradisi Fahombo sebagai uji nyali dan kedewasaan pemuda Nias.',
    philosophy: 'Keberanian, kekuatan fisik, dan kesiapan mental seorang pria untuk membela desanya.'
  },
  { 
    name: 'Batik Tulis', 
    region: 'Jawa Tengah', 
    image: 'https://images.unsplash.com/photo-1574676451996-857a224a13e6?auto=format&fit=crop&q=80&w=800',
    desc: 'Seni menghias kain menggunakan malam dengan canting tangan.',
    philosophy: 'Setiap motif mengandung doa, status sosial, dan filosofi hidup pemakainya.'
  },
  { 
    name: 'Upacara Ngaben', 
    region: 'Bali', 
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=800',
    desc: 'Ritual kremasi jenazah umat Hindu Bali untuk membebaskan atma.',
    philosophy: 'Pelepasan roh dari belenggu keduniawian menuju tempat peristirahatan yang lebih tinggi.'
  },
];

const TraditionSection: React.FC = () => {
  const [selected, setSelected] = useState<typeof traditions[0] | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <div className="flex justify-between items-end mb-16">
        <div>
          <h2 className="text-4xl md:text-5xl font-serif mb-4">Adat & Tradisi</h2>
          <p className="text-cream/60">Warisan leluhur yang terus hidup di nadi zaman.</p>
        </div>
        <button className="hidden md:block text-gold underline underline-offset-8 tracking-widest hover:text-white transition-colors">Lihat Galeri Lengkap</button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {traditions.map((item, idx) => (
          <div 
            key={idx} 
            className="group cursor-pointer"
            onClick={() => setSelected(item)}
          >
            <div className="relative overflow-hidden aspect-[3/4] rounded-2xl mb-4">
              <img 
                src={item.image} 
                alt={item.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-maroon/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <p className="text-white text-sm font-medium leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
            <h3 className="text-xl font-serif text-cream group-hover:text-gold transition-colors">{item.name}</h3>
            <p className="text-xs text-gold font-bold uppercase tracking-widest">{item.region}</p>
          </div>
        ))}
      </div>

      {/* Detail Modal Overlay */}
      {selected && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#0f0a08]/95 backdrop-blur-sm animate-fade-in">
          <div className="bg-heritage border border-gold/20 max-w-4xl w-full rounded-3xl overflow-hidden shadow-2xl relative">
            <button 
              onClick={() => setSelected(null)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center text-gold hover:bg-gold hover:text-heritage transition-all z-10"
            >
              ✕
            </button>
            <div className="grid md:grid-cols-2">
              <div className="h-64 md:h-auto overflow-hidden">
                <img src={selected.image} alt={selected.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-8 md:p-12">
                <span className="text-gold font-bold uppercase tracking-widest text-xs">{selected.region}</span>
                <h3 className="text-3xl md:text-4xl font-serif mt-2 mb-6">{selected.name}</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-gold text-sm font-bold uppercase mb-2">Deskripsi</h4>
                    <p className="text-cream/70 leading-relaxed">{selected.desc}</p>
                  </div>
                  <div>
                    <h4 className="text-gold text-sm font-bold uppercase mb-2">Filosofi</h4>
                    <p className="text-cream/70 leading-relaxed italic">"{selected.philosophy}"</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TraditionSection;
