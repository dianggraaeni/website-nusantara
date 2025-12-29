
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-heritage pt-20 pb-10 border-t border-gold/10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center">
                <span className="text-heritage font-serif text-sm">BN</span>
              </div>
              <span className="font-serif text-xl text-gold uppercase tracking-widest">Eksplore Budaya Nusantara</span>
            </div>
            <p className="text-cream/50 max-w-sm leading-relaxed mb-8">
              Platform digital yang didedikasikan untuk mendokumentasikan, merayakan, dan melestarikan kekayaan tak ternilai dari Sabang sampai Merauke.
            </p>
            <div className="flex gap-4">
              {['facebook', 'twitter', 'instagram', 'youtube'].map((social) => (
                <a key={social} href="#" className="w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center text-gold hover:bg-gold hover:text-heritage transition-all">
                   <span className="text-[10px] font-bold uppercase">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-gold font-serif text-lg mb-6">Navigasi</h4>
            <ul className="space-y-4">
              {['Beranda', 'Sejarah', 'Bahasa', 'Budaya', 'Aksara'].map((item) => (
                <li key={item}><a href="#" className="text-cream/40 hover:text-gold transition-colors text-sm">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-gold font-serif text-lg mb-6">Kontak</h4>
            <p className="text-sm text-cream/40 mb-2 italic">Hubungi kami untuk kolaborasi:</p>
            <a href="mailto:halo@budayanusantara.id" className="text-gold hover:underline text-sm">halo@budayanusantara.id</a>
          </div>
        </div>

        <div className="pt-10 border-t border-gold/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] uppercase tracking-widest text-cream/30">
            &copy; {new Date().getFullYear()} Eksplore Budaya Nusantara. Karya untuk Bangsa.
          </p>
          <div className="flex gap-8 text-[10px] uppercase tracking-widest text-cream/30">
            <a href="#" className="hover:text-gold">Kebijakan Privasi</a>
            <a href="#" className="hover:text-gold">Syarat & Ketentuan</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
