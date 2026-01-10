import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer: React.FC = () => {
  const navigationLinks = [
    { label: 'Beranda', id: 'home' },
    { label: 'Sejarah', id: 'history' },
    { label: 'Bahasa', id: 'language' },
    { label: 'Budaya', id: 'tradition' },
    { label: 'Aksara', id: 'script' },
  ];

  const socialMedia = [
    { icon: <FaFacebookF />, label: 'Facebook', url: '#' },
    { icon: <FaTwitter />, label: 'Twitter', url: '#' },
    { icon: <FaInstagram />, label: 'Instagram', url: '#' },
    { icon: <FaYoutube />, label: 'Youtube', url: '#' },
  ];

  return (
    <footer className="relative bg-[#0f0a08] pt-20 pb-10 border-t border-gold/10 overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none opacity-10">
        <img 
          src="/footer-bg.jpg"
          alt="" 
          className="w-full h-full object-cover sepia"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0a08] to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          
          {/* Brand Section */}
          <div className="col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 overflow-hidden rounded-full border border-gold/50 shadow-[0_0_15px_rgba(212,175,55,0.3)] bg-[#1a130d]">
                <img 
                  src="/garuda gold.jpg" 
                  alt="Budaya Nusantara Logo"
                  className="w-full h-full object-cover scale-110" 
                />
              </div>

              <span className="font-serif text-xl text-gold uppercase tracking-[0.2em] drop-shadow-md">
                Budaya Nusantara
              </span>
            </div>
            
            <p className="text-cream/60 max-w-sm leading-relaxed mb-8 text-sm">
              Platform digital yang didedikasikan untuk mendokumentasikan, merayakan, dan melestarikan kekayaan tak ternilai dari Sabang sampai Merauke demi generasi mendatang.
            </p>
            
            <div className="flex gap-4">
              {socialMedia.map((social) => (
                <a 
                  key={social.label} 
                  href={social.url} 
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center text-gold hover:bg-gold hover:text-black transition-all duration-500 hover:shadow-[0_0_15px_rgba(212,175,55,0.4)]"
                >
                   {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          {/* Navigasi */}
          <div>
            <h4 className="text-gold font-serif text-lg mb-6 tracking-wider">Navigasi</h4>
            <ul className="space-y-4">
              {navigationLinks.map((item) => (
                <li key={item.id}>
                  <a 
                    href={`#${item.id}`} 
                    className="text-cream/50 hover:text-gold transition-colors text-sm flex items-center group"
                  >
                    <span className="w-0 group-hover:w-4 h-[1px] bg-gold transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h4 className="text-gold font-serif text-lg mb-6 tracking-wider">Kontak</h4>
            <p className="text-xs text-cream/40 mb-3 italic">Butuh informasi lebih lanjut?</p>
            <a 
              href="mailto:halo@budayanusantara.id" 
              className="text-gold hover:text-white transition-colors text-sm font-light tracking-wide"
            >
              halo@budayanusantara.id
            </a>
            <div className="mt-6 p-4 border border-gold/10 rounded-sm bg-gold/5 backdrop-blur-sm">
              <p className="text-[10px] text-gold/60 leading-relaxed uppercase tracking-widest">
                Mari bersama menjaga warisan leluhur kita.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-gold/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] uppercase tracking-[0.2em] text-cream/30 text-center md:text-left">
            &copy; {new Date().getFullYear()} Budaya Nusantara. Karya untuk Bangsa.
          </p>
          <div className="flex gap-8 text-[10px] uppercase tracking-[0.2em] text-cream/30">
            <a href="#" className="hover:text-gold transition-colors">Kebijakan Privasi</a>
            <a href="#" className="hover:text-gold transition-colors">Syarat & Ketentuan</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;