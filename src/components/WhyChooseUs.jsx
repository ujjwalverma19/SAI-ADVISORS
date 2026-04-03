import React from 'react';
import { UserCheck, LifeBuoy, ThumbsUp, Zap } from 'lucide-react';
import { useTiltEffect } from '../hooks/useTiltEffect';

const ReasonCard = ({ reason }) => {
  const tiltRef = useTiltEffect({ max: 8, perspective: 1200, scale: 1.02 });
  return (
    <div ref={tiltRef} className="glass-card stagger-item" style={{
      padding: '25px', display: 'flex', gap: '20px', alignItems: 'flex-start',
      transformStyle: 'preserve-3d', transition: 'transform 0.15s ease-out'
    }}>
      <div style={{
        background: 'rgba(255, 255, 255, 0.04)',
        color: 'rgba(255,255,255,0.5)',
        padding: '14px', borderRadius: '14px',
        border: '1px solid rgba(255,255,255,0.06)',
        transform: 'translateZ(20px)',
        flexShrink: 0
      }}>
        {reason.icon}
      </div>
      <div>
        <h4 style={{ fontSize: '1.1rem', marginBottom: '8px', fontWeight: 600, transform: 'translateZ(15px)', letterSpacing: '-0.2px' }}>{reason.title}</h4>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', fontSize: '0.9rem', transform: 'translateZ(10px)' }}>{reason.desc}</p>
      </div>
    </div>
  );
};

const WhyChooseUs = () => {
  const reasons = [
    { icon: <UserCheck size={26} />, title: 'Personalized Advice', desc: 'We analyze your specific needs to recommend the best policies, not just the most popular ones.' },
    { icon: <LifeBuoy size={26} />, title: 'Dedicated Claim Support', desc: 'We stand by your side during claims, ensuring a hassle-free and fast settlement process.' },
    { icon: <ThumbsUp size={26} />, title: 'Trusted Advisors', desc: 'Our certified experts provide absolute transparency and unbiased comparisons.' },
    { icon: <Zap size={26} />, title: 'Fast & Digital Service', desc: 'Experience seamless onboarding and policy management through our optimized digital workflows.' }
  ];

  return (
    <section id="why-us" className="section-padding">
      <div className="container reveal-on-scroll">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'center' }}>
          
          <div>
            <h2 className="section-title" style={{ textAlign: 'left' }}>Why Choose<br/><span style={{ fontWeight: 300 }}>Sai Advisors?</span></h2>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '35px', fontSize: '1rem' }}>
              Navigating the world of insurance can be complex. We simplify the process, acting as your dedicated representative, not just a middleman. Your security is our utmost priority.
            </p>
            <a href="#contact" className="btn btn-primary">Speak to an Expert</a>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '16px' }}>
            {reasons.map((reason, idx) => (
              <ReasonCard key={idx} reason={reason} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
