
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Reveal animations on scroll
      const reveals = document.querySelectorAll('.reveal');
      reveals.forEach(reveal => {
        const windowHeight = window.innerHeight;
        const revealTop = reveal.getBoundingClientRect().top;
        const revealPoint = 150;
        if (revealTop < windowHeight - revealPoint) {
          reveal.classList.add('active');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen selection:bg-teal-100 selection:text-teal-900 overflow-x-hidden">
      <Navbar scrolled={scrolled} />
      <main>
        <section id="hero">
          <Hero />
        </section>
        <section id="about" className="py-24 reveal">
          <About />
        </section>
        <section id="skills" className="py-24 bg-slate-100 reveal">
          <Skills />
        </section>
        <section id="experience" className="py-24 reveal">
          <Experience />
        </section>
        <section id="contact" className="py-24 bg-navy-teal text-white reveal">
          <Contact />
        </section>
      </main>
      <footer className="py-12 bg-slate-900 text-slate-400 text-center text-sm">
        <p>© {new Date().getFullYear()} Yoo Kyung-hoon. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default App;
