
import React, { useState } from 'react';

const events = [
  { id: 1, year: '1293', title: 'Berdirinya Kerajaan Majapahit', island: 'Jawa', desc: 'Puncak kejayaan maritim dan persatuan Nusantara di bawah sumpah Palapa.' },
  { id: 2, year: '1511', title: 'Kedatangan Portugis di Malaka', island: 'Sumatra', desc: 'Awal era kolonialisme Eropa di wilayah kepulauan rempah-rempah.' },
  { id: 3, year: '1908', title: 'Kebangkitan Nasional (Budi Utomo)', island: 'Jawa', desc: 'Lahirnya kesadaran berbangsa melalui organisasi modern pertama.' },
  { id: 4, year: '1945', title: 'Proklamasi Kemerdekaan', island: 'Jawa', desc: 'Momen bersejarah berdirinya Negara Kesatuan Republik Indonesia.' },
];

const HistorySection: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState(events[0]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-serif mb-4">Jejak Sejarah Bangsa</h2>
        <div className="w-24 h-1 bg-gold mx-auto"></div>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Interactive Timeline Visual */}
        <div className="space-y-8 relative">
          <div className="absolute left-[39px] top-4 bottom-4 w-0.5 bg-gold/20"></div>
          {events.map((event) => (
            <div 
              key={event.id}
              onClick={() => setSelectedEvent(event)}
              className={`flex gap-8 group cursor-pointer transition-all ${selectedEvent.id === event.id ? 'opacity-100 scale-105' : 'opacity-40 hover:opacity-70'}`}
            >
              <div className={`w-20 h-20 shrink-0 rounded-full flex flex-col items-center justify-center border-2 z-10 bg-heritage transition-colors ${selectedEvent.id === event.id ? 'border-gold text-gold' : 'border-gold/20 text-cream/50'}`}>
                <span className="text-xs font-bold">{event.year}</span>
              </div>
              <div className="py-2">
                <h3 className="text-xl font-serif mb-1 group-hover:text-gold transition-colors">{event.title}</h3>
                <p className="text-sm text-gold/80">{event.island}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Info Card */}
        <div className="bg-heritage/30 p-8 md:p-12 border border-gold/10 rounded-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-bl-full -mr-16 -mt-16 transition-all group-hover:scale-110"></div>
          <p className="text-gold text-sm font-bold tracking-widest mb-4">{selectedEvent.year} • {selectedEvent.island}</p>
          <h3 className="text-3xl font-serif mb-6">{selectedEvent.title}</h3>
          <p className="text-cream/70 leading-relaxed text-lg mb-8 italic">
            "{selectedEvent.desc}"
          </p>
          <button className="flex items-center gap-2 text-gold font-bold hover:gap-4 transition-all">
            Baca Selengkapnya <span>&rarr;</span>
          </button>
        </div>
      </div>

      {/* Simplified Peta Indonesia Placeholder */}
      <div className="mt-24 p-8 border border-gold/10 rounded-3xl bg-[#150f0d] text-center">
        <h3 className="text-2xl font-serif mb-8">Peta Interaktif Nusantara</h3>
        <div className="aspect-[21/9] bg-heritage/50 rounded-xl flex items-center justify-center relative group overflow-hidden">
          <img 
            src="https://picsum.photos/seed/indo-map/1200/500" 
            alt="Simplified Map" 
            className="opacity-30 grayscale group-hover:grayscale-0 transition-all duration-700"
          />
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="text-center">
               <div className="w-4 h-4 bg-gold rounded-full animate-ping mx-auto mb-2"></div>
               <p className="text-gold uppercase tracking-tighter text-sm">Hover untuk detail wilayah</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistorySection;
