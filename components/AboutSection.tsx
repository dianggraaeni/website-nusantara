
import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20 text-center">
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-serif mb-8">Pelestarian untuk Masa Depan</h2>
        <p className="text-xl text-cream/70 leading-relaxed italic">
          "Bangsa yang besar adalah bangsa yang menghargai budayanya."
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-20">
        <div className="p-6">
          <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 text-gold">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
          </div>
          <h3 className="text-lg font-serif mb-3">Edukasi</h3>
          <p className="text-sm text-cream/50">Menyediakan akses informasi budaya yang akurat dan menarik bagi pelajar.</p>
        </div>
        <div className="p-6">
          <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 text-gold">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
          </div>
          <h3 className="text-lg font-serif mb-3">Inspirasi</h3>
          <p className="text-sm text-cream/50">Membangkitkan rasa bangga generasi muda terhadap identitas nasional.</p>
        </div>
        <div className="p-6">
          <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 text-gold">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
          </div>
          <h3 className="text-lg font-serif mb-3">Koneksi</h3>
          <p className="text-sm text-cream/50">Menjembatani perbedaan wilayah melalui satu narasi Budaya Nusantara.</p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-maroon to-heritage p-1 px-1 rounded-full inline-block">
        <button className="bg-[#0f0a08] px-12 py-4 rounded-full text-gold font-bold uppercase tracking-widest hover:bg-transparent hover:text-white transition-all">
          Gabung Komunitas
        </button>
      </div>
    </div>
  );
};

export default AboutSection;
