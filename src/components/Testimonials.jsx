import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    { name: 'Ashish Baisoya', role: 'Business Owner', text: 'Sai Advisors an awesome Company. Sai Adviosrs has many year taken care of all my business and personal insurance needs for years and will continue to do so for many more years to come. Thanks, Sai Adviosrs' },
    { name: 'Mayank Raj', role: 'Two Wheeler Owner', text: 'Best Insurance advisor for Two wheelers. They suggest the very good policy' },
    { name: 'Harmeet Singh', role: 'Client', text: 'Positive: Responsiveness, Professionalism' },
    { name: 'S S', role: 'Client', text: 'Positive: Responsiveness' }
  ];

  return (
    <section id="testimonials" className="section-padding">
      <div className="container reveal-on-scroll">
        <h2 className="section-title">What Our <span style={{ fontWeight: 300 }}>Clients Say</span></h2>
        <p className="section-subtitle">Don't just take our word for it. Hear from those who have secured their future with us.</p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginTop: '50px' }}>
          {reviews.map((rev, idx) => (
            <div key={idx} className="glass-card stagger-item" style={{ padding: '40px 30px', position: 'relative' }}>
              <Quote size={36} color="rgba(255,255,255,0.06)" style={{ position: 'absolute', top: '20px', right: '20px' }} />
              <div style={{ display: 'flex', gap: '4px', marginBottom: '20px' }}>
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="rgba(255,255,255,0.25)" color="rgba(255,255,255,0.25)" />)}
              </div>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '30px', fontStyle: 'italic' }}>
                "{rev.text}"
              </p>
              <div>
                <h4 style={{ fontWeight: 600, fontSize: '1rem', color: '#fff' }}>{rev.name}</h4>
                <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.85rem', marginTop: '4px' }}>{rev.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
