import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import HistorySection from './components/HistorySection';
import LanguageSection from './components/LanguageSection';
import TraditionSection from './components/TraditionSection';
import ScriptSection from './components/ScriptSection';
import AboutSection from './components/AboutSection';
import AIAssistant from './components/AIAssistant';
import Footer from './components/Footer';

// Komponen Detail & Gallery
import TraditionDetailView from './components/TraditionDetailView';
import TraditionGalleryView from './components/TraditionGalleryView';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedTradition, setSelectedTradition] = useState<string | null>(null);
  const [showFullGallery, setShowFullGallery] = useState(false);

  // MENGELOLA SCROLL LOCK SECARA TERPUSAT
  // Jika modal terbuka, matikan scroll di halaman utama agar tidak stuck
  useEffect(() => {
    if (selectedTradition || showFullGallery) {
      document.body.style.overflow = 'hidden';
      // Tambahkan padding-right untuk mencegah layout shifting jika ada scrollbar
      document.body.style.paddingRight = 'var(--scrollbar-width, 0px)';
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = '0px';
    }
  }, [selectedTradition, showFullGallery]);

  // FUNGSI UNTUK MENUTUP OVERLAY
  const handleClose = () => {
    setSelectedTradition(null);
    setShowFullGallery(false);

    // Gunakan setTimeout kecil untuk memastikan DOM sudah ter-update
    setTimeout(() => {
      const element = document.getElementById('tradition');
      if (element) {
        // Scroll kembali ke section tradition agar tidak pindah ke Home
        element.scrollIntoView({ behavior: 'auto', block: 'start' });
      }
    }, 50);
  };

  // LOGIKA SCROLL SPY (Navigasi Aktif)
  useEffect(() => {
    const handleScroll = () => {
      // Jangan jalankan scroll spy jika modal sedang terbuka
      if (selectedTradition || showFullGallery) return;

      const sections = ['home', 'history', 'language', 'tradition', 'script', 'about'];
      const scrollPos = window.scrollY + 150;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [selectedTradition, showFullGallery]);

  return (
    <div className="relative min-h-screen bg-[#0a0a0a] selection:bg-gold selection:text-heritage overflow-x-hidden">
      {/* Navigation - Z-Index harus di bawah Detail View */}
      <Navigation activeSection={activeSection} />
      
      <main className={`transition-all duration-500 ${selectedTradition || showFullGallery ? 'blur-sm scale-95 opacity-50' : 'blur-0 scale-100 opacity-100'}`}>
        <section id="home">
          <Hero />
        </section>
        
        <section id="history" className="pt-20">
          <HistorySection />
        </section>
        
        <section id="language" className="pt-20">
          <LanguageSection />
        </section>
        
        <section id="tradition" className="pt-20 relative z-10">
          <TraditionSection 
            onSelect={(id) => setSelectedTradition(id)} 
            onViewAll={() => setShowFullGallery(true)}
          />
        </section>
        
        <section id="script" className="pt-20">
          <ScriptSection />
        </section>
        
        <section id="about" className="pt-20">
          <AboutSection />
        </section>
        
        <Footer />
      </main>

      {/* RENDER OVERLAY DI LUAR MAIN UNTUK MENGHINDARI KONFLIK CLICK */}
      {selectedTradition && (
        <div className="fixed inset-0 z-[999]">
          <TraditionDetailView 
            id={selectedTradition} 
            onClose={handleClose} 
          />
        </div>
      )}

      {showFullGallery && (
        <div className="fixed inset-0 z-[999]">
          <TraditionGalleryView 
            onClose={handleClose} 
            onSelect={(id) => {
              setSelectedTradition(id);
              setShowFullGallery(false);
            }}
          />
        </div>
      )}

      {/* AI Assistant tetap di depan */}
      <div className="relative z-[1000]">
        <AIAssistant />
      </div>
    </div>
  );
};

export default App;