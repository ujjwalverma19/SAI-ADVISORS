import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="container reveal-on-scroll" style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        
        {/* Main heading */}
        <h1 style={{
          fontSize: 'clamp(3rem, 7vw, 5.5rem)',
          fontWeight: '300',
          lineHeight: '1.1',
          marginBottom: '25px',
          maxWidth: '850px',
          letterSpacing: '-2px',
          color: '#ffffff'
        }}>
          Secure Your Future{' '}
          <br/>
          With <span style={{ fontWeight: 700 }}>Expert Guidance</span>
        </h1>
        
        {/* Subtitle */}
        <p style={{
          fontSize: '1rem', color: 'rgba(255,255,255,0.45)',
          marginBottom: '45px', maxWidth: '550px', lineHeight: '1.7',
          fontWeight: 400
        }}>
          We provide personalized, comprehensive insurance solutions designed to protect you, your family, and your business at every stage of life.
        </p>
        
        {/* CTA Buttons */}
        <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <a href="#contact" className="btn btn-primary" style={{ padding: '14px 32px', fontSize: '0.95rem' }}>
            Book Consultation <ArrowRight size={18} />
          </a>
          <a href="#services" className="btn btn-outline" style={{ padding: '14px 32px', fontSize: '0.95rem' }}>
            Get Free Quote
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
