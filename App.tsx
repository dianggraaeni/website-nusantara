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
  const [isFromGallery, setIsFromGallery] = useState(false);

  // 1. LOCK SCROLL: Mencegah interaksi di background saat modal aktif
  useEffect(() => {
    if (selectedTradition || showFullGallery) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedTradition, showFullGallery]);

  // 2. INTERSECTION OBSERVER: Sensor otomatis untuk warna kuning di Navbar
  useEffect(() => {
    const sections = ['home', 'history', 'language', 'tradition', 'script', 'about'];
    
    const observerOptions = {
      rootMargin: '-40% 0px -40% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
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

  // 3. FUNGSI SCROLL BALIK: Menjamin kembali ke section Budaya
  const scrollToTradition = () => {
    setTimeout(() => {
      const section = document.getElementById('tradition');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        setActiveSection('tradition');
      }
    }, 100);
  };

  // 4. HANDLERS
  const handleSelectFromSection = (id: string) => {
    setIsFromGallery(false);
    setSelectedTradition(id);
  };

  const handleSelectFromGallery = (id: string) => {
    setIsFromGallery(true);
    setSelectedTradition(id);
    setShowFullGallery(false);
  };

  const handleCloseDetail = () => {
    setSelectedTradition(null);
    if (isFromGallery) {
      setShowFullGallery(true);
    } else {
      scrollToTradition();
    }
  };

  const handleCloseGallery = () => {
    setShowFullGallery(false);
    setIsFromGallery(false);
    scrollToTradition();
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

      {/* HERO SECTION */}
      <section id="home" className="relative z-0">
        <Hero />
      </section>

      {/* KONTEN UTAMA */}
      <main
        className={`relative z-10 transition-all duration-700 ${
          selectedTradition || showFullGallery
            ? 'blur-2xl scale-95 opacity-50 pointer-events-none'
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

          <section id="tradition" className="pt-24 relative z-20 scroll-mt-20">
            <TraditionSection
              onSelect={handleSelectFromSection}
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

      {/* SYSTEM MODAL (Ditaruh paling luar agar portal bekerja sempurna) */}
      
      {/* 1. Galeri Lengkap */}
      {showFullGallery && !selectedTradition && (
        <TraditionGalleryView
          onClose={handleCloseGallery}
          onSelect={handleSelectFromGallery}
        />
      )}

      {/* 2. Detail Tradisi */}
      {selectedTradition && (
        <TraditionDetailView 
          id={selectedTradition} 
          onClose={handleCloseDetail} 
        />
      )}

      {/* 3. AI Assistant
          Meskipun dipanggil di sini, Portal akan memindahkannya otomatis 
          ke document.body agar tidak kena efek blur/scale dari <main> 
      */}
      <AIAssistant />

    </div>
  );
};

export default App;