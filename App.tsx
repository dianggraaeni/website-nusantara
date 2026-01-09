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
import TraditionDetailView from './components/TraditionDetailView';
import TraditionGalleryView from './components/TraditionGalleryView';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedTradition, setSelectedTradition] = useState<string | null>(null);
  const [showFullGallery, setShowFullGallery] = useState(false);

  /* Lock scroll saat modal */
  useEffect(() => {
    document.body.style.overflow =
      selectedTradition || showFullGallery ? 'hidden' : 'unset';
  }, [selectedTradition, showFullGallery]);

  /* Observer section */
  /* Observer section */
  useEffect(() => {
    const sections = ['home', 'history', 'language', 'tradition', 'script', 'about'];

    const observerOptions = {
      // rootMargin: '-20% 0px -70% 0px' artinya kita mendeteksi section 
      // yang masuk ke area 20% dari atas layar. 
      // Ini sangat efektif untuk navbar.
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // Jika section tersebut masuk ke area "deteksi" kita
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleClose = () => {
    setSelectedTradition(null);
    setShowFullGallery(false);
  };

  return (
    <div className="relative min-h-screen bg-[#0a0a0a] text-cream">

      {/* NAVBAR */}
      <Navigation
        activeSection={activeSection}
        onNavigate={(id) => {
          setActiveSection(id);
          document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* 🔥 HERO — DI LUAR MAIN */}
      <section id="home" className="relative z-0">
        <Hero />
      </section>

      {/* 🔥 KONTEN SAJA YANG DIBLUR */}
      <main
        className={`relative z-10 transition-all duration-700 ${
          selectedTradition || showFullGallery
            ? 'blur-md scale-[0.98] opacity-40'
            : 'blur-0 scale-100 opacity-100'
        }`}
      >
        <div className="bg-[#0a0a0a]">

          <section id="history" className="pt-24 scroll-mt-20">
            <HistorySection />
          </section>

          <section id="language" className="pt-24 scroll-mt-20">
            <LanguageSection />
          </section>

          <section id="tradition" className="pt-24 scroll-mt-20 relative z-20">
            <TraditionSection
              onSelect={(id) => setSelectedTradition(id)}
              onViewAll={() => setShowFullGallery(true)}
            />
          </section>

          <section id="script" className="pt-24 scroll-mt-20">
            <ScriptSection />
          </section>

          <section id="about" className="pt-24 scroll-mt-20">
            <AboutSection />
          </section>

          <Footer />
        </div>
      </main>

      {/* MODAL */}
      {(selectedTradition || showFullGallery) && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md">
          {selectedTradition && (
            <TraditionDetailView id={selectedTradition} onClose={handleClose} />
          )}
          {showFullGallery && (
            <TraditionGalleryView
              onClose={handleClose}
              onSelect={(id) => {
                setSelectedTradition(id);
                setShowFullGallery(false);
              }}
            />
          )}
        </div>
      )}

      {/* AI Assistant */}
      <div className="fixed bottom-6 right-6 z-[110]">
        <AIAssistant />
      </div>
    </div>
  );
};

export default App;
