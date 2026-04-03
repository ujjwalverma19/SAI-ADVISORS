import React from 'react';
import { HeartPulse, Shield, Car } from 'lucide-react';
import { useTiltEffect } from '../hooks/useTiltEffect';

const ServiceCard = ({ svc }) => {
  const tiltRef = useTiltEffect({ max: 12, perspective: 1200, scale: 1.04 });
  return (
    <div ref={tiltRef} className="glass-card stagger-item" style={{
      padding: '45px 35px', textAlign: 'left',
      transformStyle: 'preserve-3d', transition: 'transform 0.15s ease-out'
    }}>
      <div style={{
        marginBottom: '25px',
        background: 'rgba(255, 255, 255, 0.04)',
        display: 'inline-flex', padding: '16px', borderRadius: '14px',
        border: '1px solid rgba(255,255,255,0.06)',
        transform: 'translateZ(30px)',
        color: 'rgba(255,255,255,0.7)'
      }}>
        {svc.icon}
      </div>
      <h3 style={{ fontSize: '1.3rem', marginBottom: '14px', fontWeight: 600, transform: 'translateZ(20px)', letterSpacing: '-0.3px' }}>{svc.title}</h3>
      <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', transform: 'translateZ(10px)', fontSize: '0.95rem' }}>{svc.desc}</p>
    </div>
  );
};

const Services = () => {
  const services = [
    { title: 'Health Insurance', icon: <HeartPulse size={36} />, desc: 'Comprehensive medical coverage tailored to protect you against unforeseen healthcare costs.' },
    { title: 'Life Insurance', icon: <Shield size={36} />, desc: 'Secure your family\'s financial future with term and whole life plans.' },
    { title: 'Motor Insurance', icon: <Car size={36} />, desc: 'Reliable vehicle coverage ensuring you are protected against accidents and third-party liabilities.' }
  ];

  return (
    <section id="services" className="section-padding">
      <div className="container reveal-on-scroll">
        <h2 className="section-title">Our <span style={{ fontWeight: 300 }}>Services</span></h2>
        <p className="section-subtitle">We offer a wide array of insurance products designed to offer maximum coverage and peace of mind.</p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '25px', marginTop: '50px' }}>
          {services.map((svc, idx) => (
            <ServiceCard key={idx} svc={svc} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
