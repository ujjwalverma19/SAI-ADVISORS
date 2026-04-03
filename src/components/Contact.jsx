import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <footer id="contact" style={{
      background: 'rgba(6,10,18,0.95)',
      paddingTop: '100px',
      borderTop: '1px solid rgba(255,255,255,0.06)'
    }}>
      <div className="container reveal-on-scroll">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '50px', marginBottom: '60px' }}>
          
          <div>
            <h3 style={{ fontSize: '1.6rem', fontWeight: 700, marginBottom: '20px', letterSpacing: '-0.5px' }}>
              Sai Advisors
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.35)', lineHeight: '1.7', marginBottom: '25px', fontSize: '0.9rem' }}>
              Your trusted partner in navigating the complexities of insurance and wealth management.
            </p>
            <div style={{ display: 'flex', gap: '20px' }}>
               {['Facebook', 'Twitter', 'Instagram', 'LinkedIn'].map(s => (
                 <a key={s} href="#" style={{
                   color: 'rgba(255,255,255,0.25)',
                   fontSize: '0.85rem',
                   transition: 'color 0.3s'
                 }}
                 onMouseEnter={e => e.target.style.color = '#fff'}
                 onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.25)'}
                 >{s}</a>
               ))}
            </div>
          </div>

          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '25px', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.8rem' }}>Contact</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '14px', color: 'rgba(255,255,255,0.4)', fontSize: '0.9rem' }}>
                <Phone size={18} color="rgba(255,255,255,0.25)" /> +91 9650346675
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '14px', color: 'rgba(255,255,255,0.4)', fontSize: '0.9rem' }}>
                <Mail size={18} color="rgba(255,255,255,0.25)" /> amit.saiadvisors@gmail.com
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', color: 'rgba(255,255,255,0.4)', fontSize: '0.9rem' }}>
                <MapPin size={18} color="rgba(255,255,255,0.25)" style={{ flexShrink: 0, marginTop: '3px' }} /> 
                A-114 Sahni Tower, Sector-5 Sahibabad, <br/> Ghaziabad
              </li>
            </ul>
          </div>
        </div>
        
        {/* Divider */}
        <div style={{
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)',
        }}></div>

        <div style={{ padding: '25px 0', textAlign: 'center', color: 'rgba(255,255,255,0.2)', fontSize: '0.8rem', letterSpacing: '0.5px' }}>
          &copy; {new Date().getFullYear()} Sai Advisors. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Contact;
