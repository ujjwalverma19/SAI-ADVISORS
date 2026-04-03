import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { useTiltEffect } from '../hooks/useTiltEffect';
import founderImg from '../assets/founder.jpeg';

const About = () => {
  const tiltRef = useTiltEffect({ max: 12, perspective: 1200, scale: 1.03 });

  return (
    <section id="about" className="section-padding" style={{ position: 'relative', zIndex: 1 }}>
      <div className="container reveal-on-scroll">
        <h2 className="section-title">Meet Your <span style={{ fontWeight: 300 }}>Advisor</span></h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'center', marginTop: '60px' }}>

          <div ref={tiltRef} style={{ position: 'relative', transformStyle: 'preserve-3d', transition: 'transform 0.15s ease-out' }}>
            <div style={{ position: 'absolute', top: '-12px', left: '-12px', width: '100%', height: '100%', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '20px', zIndex: 0, transform: 'translateZ(-30px)' }}></div>
            <img
              src={founderImg}
              alt="Amit Kumar Verma - Founder"
              style={{
                width: '100%',
                borderRadius: '20px',
                position: 'relative',
                zIndex: 1,
                objectFit: 'cover'
              }}
            />
            <div style={{
              position: 'absolute', bottom: '12%', right: '-25px', zIndex: 2,
              transform: 'translateZ(40px)',
              display: 'inline-flex', alignItems: 'center', gap: '18px',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: '40px',
              background: 'rgba(0,0,0,0.7)',
              backdropFilter: 'blur(20px)',
              paddingLeft: '22px'
            }}>
              <span style={{ fontWeight: 500, color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem', letterSpacing: '0.3px' }}>Amit Kumar Verma — Founder</span>
              <div style={{ padding: '12px 22px', borderRadius: '40px', borderLeft: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.05)' }}>
                <p style={{ margin: 0, fontWeight: 700, fontSize: '1.1rem', color: '#fff' }}>15+ Years</p>
                <p style={{ margin: 0, fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)' }}>Experience</p>
              </div>
            </div>
          </div>

          <div>
            <h3 style={{ fontSize: '2rem', marginBottom: '10px', fontWeight: 600, letterSpacing: '-0.5px' }}>Amit Kumar Verma</h3>
            <p style={{ color: 'rgba(255,255,255,0.4)', fontWeight: 500, marginBottom: '25px', fontSize: '1rem', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Founder & Lead Advisor</p>

            <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '18px', fontSize: '1rem' }}>
              With over a decade of dedicated service in the insurance sector, I founded Sai Advisors with a singular mission: to demystify insurance and provide tailored, transparent, and trustworthy advice to every individual and business.
            </p>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '35px', fontSize: '1rem' }}>
              We don't just sell policies; we build lifelong partnerships. Our approach is rooted in understanding your unique needs and crafting a safety net that lets you live and work with absolute peace of mind.
            </p>

            <ul style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {['IRDAI Certified Professional', 'Award-winning Wealth Manager', 'Dedicated Claims Support', 'Unbiased Carrier Selection'].map((item, id) => (
                <li key={id} style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'rgba(255,255,255,0.75)', fontWeight: 400, fontSize: '0.95rem' }}>
                  <CheckCircle2 color="rgba(255,255,255,0.3)" size={18} /> {item}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
