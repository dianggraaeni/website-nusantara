import React from 'react';

interface NavigationProps {
  activeSection: string;
  onNavigate: (id: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection, onNavigate }) => {
  const links = [
    { id: 'home', label: 'Beranda' },
    { id: 'history', label: 'Sejarah' },
    { id: 'language', label: 'Bahasa' },
    { id: 'tradition', label: 'Budaya' },
    { id: 'script', label: 'Aksara' },
    { id: 'about', label: 'Tentang' },
  ];

  return (
    <nav className="sticky top-0 w-full z-[9999] bg-[#0f0a08]/95 backdrop-blur-md border-b border-gold/20 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">

        {/* LOGO */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-maroon rounded-full flex items-center justify-center border border-gold">
            <span className="text-gold font-serif text-xl">BN</span>
          </div>
          <span className="font-serif text-xl hidden sm:block tracking-widest text-gold uppercase">
            Budaya Nusantara
          </span>
        </div>

        {/* LINKS */}
        <ul className="flex gap-4 md:gap-8 overflow-x-auto no-scrollbar">
          {links.map((link) => {
            const isActive = activeSection === link.id;

            return (
              <li key={link.id} className="whitespace-nowrap">
                <button
                  type="button"
                  onClick={() => onNavigate(link.id)}
                  className={`
                    relative
                    px-2 py-2
                    text-sm uppercase tracking-widest
                    leading-[1.6]
                    transition-all duration-300
                    ${
                      isActive
                        ? 'text-gold font-bold tracking-[0.25em] drop-shadow-[0_0_8px_rgba(212,175,55,0.6)]'
                        : 'text-cream/60 hover:text-gold'
                    }
                  `}
                >
                  {link.label}

                  {/* Garis bawah elegan */}
                  {isActive && (
                    <span className="absolute left-0 -bottom-1 w-full h-[1px] bg-gold/70" />
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
