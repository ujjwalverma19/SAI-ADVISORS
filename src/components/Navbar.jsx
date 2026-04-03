import React, { useState, useEffect } from 'react';
import { Menu, X, ShieldCheck } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 1000,
      padding: scrolled ? '12px 0' : '20px 0',
      transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      background: scrolled ? 'rgba(8, 13, 24, 0.8)' : 'transparent',
      backdropFilter: scrolled ? 'blur(30px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.06)' : '1px solid transparent',
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src="/logo.png" alt="Sai Advisors Logo" style={{ height: '45px', width: 'auto', objectFit: 'contain' }} />
        </div>

        <div style={{ display: 'none' }} className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
           {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </div>

        <ul style={{ display: 'flex', gap: '35px', alignItems: 'center', margin: 0, padding: 0 }} className={mobileMenuOpen ? "nav-links mobile-open" : "nav-links"}>
          <li><a href="#about" style={{ fontWeight: 400, fontSize: '0.9rem', transition: 'color 0.3s, opacity 0.3s', color: 'rgba(255,255,255,0.7)', letterSpacing: '0.2px' }} onMouseEnter={e => e.target.style.color = '#fff'} onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.7)'}>About</a></li>
          <li><a href="#services" style={{ fontWeight: 400, fontSize: '0.9rem', transition: 'color 0.3s', color: 'rgba(255,255,255,0.7)', letterSpacing: '0.2px' }} onMouseEnter={e => e.target.style.color = '#fff'} onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.7)'}>Services</a></li>
          <li><a href="#why-us" style={{ fontWeight: 400, fontSize: '0.9rem', transition: 'color 0.3s', color: 'rgba(255,255,255,0.7)', letterSpacing: '0.2px' }} onMouseEnter={e => e.target.style.color = '#fff'} onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.7)'}>Why Us</a></li>
          <li><a href="#testimonials" style={{ fontWeight: 400, fontSize: '0.9rem', transition: 'color 0.3s', color: 'rgba(255,255,255,0.7)', letterSpacing: '0.2px' }} onMouseEnter={e => e.target.style.color = '#fff'} onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.7)'}>Testimonials</a></li>
          <li>
            <a href="#contact" className="btn btn-primary" style={{ padding: '10px 24px', fontSize: '0.85rem' }}>
              Get Quote
            </a>
          </li>
        </ul>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .mobile-menu-btn { display: block !important; cursor: pointer; }
          .nav-links {
             position: absolute;
             top: 100%;
             left: 0;
             width: 100%;
             background: rgba(0,0,0,0.95);
             backdrop-filter: blur(20px);
             flex-direction: column;
             padding: 20px 0;
             border-bottom: 1px solid rgba(255,255,255,0.06);
             clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
             transition: clip-path 0.4s ease-in-out;
          }
          .nav-links.mobile-open {
             clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
