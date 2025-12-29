
import React from 'react';

interface NavigationProps {
  activeSection: string;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection }) => {
  const links = [
    { id: 'home', label: 'Beranda' },
    { id: 'history', label: 'Sejarah' },
    { id: 'language', label: 'Bahasa' },
    { id: 'tradition', label: 'Budaya' },
    { id: 'script', label: 'Aksara' },
    { id: 'about', label: 'Tentang' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0f0a08]/80 backdrop-blur-md border-b border-gold/20">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-maroon rounded-full flex items-center justify-center border border-gold">
            <span className="text-gold font-serif text-xl">BN</span>
          </div>
          <span className="font-serif text-xl hidden sm:block tracking-widest text-gold uppercase">Budaya Nusantara</span>
        </div>

        <ul className="flex gap-4 md:gap-8 overflow-x-auto no-scrollbar">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`text-sm uppercase tracking-widest transition-colors ${
                  activeSection === link.id ? 'text-gold' : 'text-cream/60 hover:text-gold'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
