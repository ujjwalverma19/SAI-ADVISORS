import React, { useEffect } from 'react';
import InteractiveBackground from './components/InteractiveBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Stats from './components/Stats';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';


function App() {
  useEffect(() => {
    // Reveal animation logic
    const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          // Start children animation delayed
          const children = entry.target.querySelectorAll('.stagger-item');
          children.forEach((child, index) => {
            child.style.animationDelay = `${index * 0.1}s`;
            child.classList.add('animate-fade-in');
          });
          observer.unobserve(entry.target);
        }
      });
    };

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach(el => observer.observe(el));
    
    return () => observer.disconnect();
  }, []);

  return (
    <>

      <InteractiveBackground />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Stats />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  );
}

export default App;
