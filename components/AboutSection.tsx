import React, { useState } from 'react';

const AboutSection: React.FC = () => {
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Pesan terkirim!");
    setShowForm(false);
  };

  // DATA CONTENT
  const features = [
    { 
      title: 'Edukasi', 
      desc: 'Menyediakan akses informasi budaya yang akurat bagi generasi masa depan.', 
      // Icon: Book
      svg: <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zM22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /> 
    },
    { 
      title: 'Inspirasi', 
      desc: 'Membangkitkan rasa bangga terhadap identitas nasional melalui visualisasi modern.', 
      // Icon: Sparkles
      svg: <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" /> 
    },
    { 
      title: 'Koneksi', 
      desc: 'Menjembatani keragaman budaya Nusantara dalam satu platform kolaborasi.', 
      // Icon: Connection nodes
      svg: <g><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></g> 
    }
  ];

  if (showForm) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] text-cream py-16 px-4 animate-fadeIn relative overflow-hidden font-sans">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 blur-[120px] rounded-full -z-10" />
        
        <div className="max-w-6xl mx-auto">
          <button 
            onClick={() => setShowForm(false)}
            className="mb-12 flex items-center gap-2 text-gold hover:text-white transition-all group"
          >
            <span className="group-hover:-translate-x-2 transition-transform duration-300 text-xl">←</span> 
            <span className="tracking-[0.2em] uppercase text-[10px] font-bold">Kembali</span>
          </button>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-snug md:leading-tight tracking-tight">
                  Hubungi <span className="text-gold font-bold">Kami</span>.
                </h2>
                <div className="w-20 h-1 bg-gold"></div>
                <p className="text-cream/70 text-lg leading-relaxed max-w-md">
                  Punya pertanyaan tentang sejarah, bahasa, tradisi, aksara, atau ingin berkolaborasi? Kami siap mendengarkan pesan Anda.
                </p>
              </div>

              <div className="space-y-8">
                <div>
                  <h4 className="text-gold font-bold uppercase text-[10px] tracking-[0.3em] mb-4 opacity-50">Lokasi Kami</h4>
                  <div className="w-full h-56 rounded-3xl overflow-hidden border border-gold/10 grayscale contrast-125 hover:grayscale-0 transition-all duration-700 shadow-2xl">
                     <iframe 
                        title="map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.6919702283833!2d112.791561!3d-7.275973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMTYnMzMuNSJTIDExMsKwNDcnMjkuNiJF!5e0!3m2!1sen!2sid!4v1700000000000"
                        className="w-full h-full border-0"
                        allowFullScreen
                        loading="lazy"
                     ></iframe>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-gold font-bold uppercase text-[10px] tracking-[0.3em] mb-1 opacity-50">Email Resmi</h4>
                  <p className="text-white font-serif tracking-wide text-2xl">halo@budaya-nusantara.id</p>
                </div>
              </div>
            </div>

            <div className="bg-white/[0.02] backdrop-blur-xl border border-white/5 p-8 md:p-12 rounded-[3rem] shadow-2xl relative">
              <div className="absolute top-0 right-10 w-20 h-20 bg-gold/10 blur-3xl rounded-full"></div>
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-gold/60 ml-1">Nama Lengkap</label>
                  <input required type="text" placeholder="Masukkan nama" className="w-full bg-black/40 border border-white/5 rounded-2xl px-5 py-4 text-white focus:border-gold/40 outline-none transition-all placeholder:opacity-20" />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-gold/60 ml-1">Alamat Email</label>
                  <input required type="email" placeholder="nama@email.com" className="w-full bg-black/40 border border-white/5 rounded-2xl px-5 py-4 text-white focus:border-gold/40 outline-none transition-all placeholder:opacity-20" />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-gold/60 ml-1">Subjek</label>
                  <input type="text" placeholder="Topik pembicaraan" className="w-full bg-black/40 border border-white/5 rounded-2xl px-5 py-4 text-white focus:border-gold/40 outline-none transition-all placeholder:opacity-20" />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-gold/60 ml-1">Pesan</label>
                  <textarea required rows={4} placeholder="Tulis pesan..." className="w-full bg-black/40 border border-white/5 rounded-2xl px-5 py-4 text-white focus:border-gold/40 outline-none transition-all placeholder:opacity-20 resize-none"></textarea>
                </div>

                <button type="submit" className="w-full bg-gold hover:bg-white text-black font-black py-5 rounded-2xl uppercase tracking-[0.4em] text-[10px] transition-all duration-500 shadow-xl shadow-gold/5 mt-4">
                  Kirim Pesan
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full py-24 overflow-hidden bg-[#0a0a0a]">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0">
        <img src="/about-bg.jpg" alt="" className="w-full h-full object-cover opacity-20 brightness-50" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        <div className="mb-20 space-y-6">
          <h2 className="text-6xl md:text-8xl font-serif text-white">
            Eksplorasi <span className="text-gold">Budaya</span>
          </h2>
          <p className="text-lg md:text-xl text-cream/60 italic font-serif max-w-2xl mx-auto leading-relaxed">
            "Bangsa yang besar adalah bangsa yang menghargai budayanya."
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {features.map((item, idx) => (
            <div key={idx} className="p-10 bg-white/[0.02] backdrop-blur-sm border border-white/5 rounded-[2.5rem] hover:border-gold/30 transition-all duration-700 group">
              <div className="w-20 h-20 bg-gold/5 rounded-[2rem] flex items-center justify-center mx-auto mb-8 text-gold group-hover:bg-gold group-hover:text-black transition-all duration-500 shadow-inner">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  {item.svg}
                </svg>
              </div>
              <h3 className="text-2xl font-serif mb-4 text-white tracking-wide">{item.title}</h3>
              <p className="text-sm text-cream/40 leading-relaxed font-light">{item.desc}</p>
            </div>
          ))}
        </div>

        <button 
          onClick={() => setShowForm(true)}
          className="group relative inline-flex items-center justify-center px-20 py-7 font-black uppercase tracking-[0.5em] text-[10px] text-black bg-gold rounded-full hover:bg-white transition-all duration-500 shadow-2xl shadow-gold/20"
        >
          <span className="relative z-10">Hubungi Kami</span>
        </button>
      </div>
    </div>
  );
};

export default AboutSection;