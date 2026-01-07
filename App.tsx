
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

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'history', 'language', 'tradition', 'script', 'about'];
      const scrollPos = window.scrollY + 100;

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
  }, []);

  return (
    <div className="min-h-screen selection:bg-gold selection:text-heritage">
      <Navigation activeSection={activeSection} />
      
      <main>
        <section id="home">
          <Hero />
        </section>
        
        <section id="history" className="pt-20">
          <HistorySection />
        </section>
        
        <section id="language" className="pt-20">
          <LanguageSection />
        </section>
        
        <section id="tradition" className="pt-20">
          <TraditionSection />
        </section>
        
        <section id="script" className="pt-20">
          <ScriptSection />
        </section>
        
        <section id="about" className="pt-20">
          <AboutSection />
        </section>
      </main>

      <AIAssistant />
      <Footer />
    </div>
  );
};

export default App;