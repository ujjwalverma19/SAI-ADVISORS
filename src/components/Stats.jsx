import React from 'react';

const Stats = () => {
  const stats = [
    { num: '10,000+', label: 'Happy Clients' },
    { num: '15+', label: 'Years Experience' },
    { num: '30+', label: 'Insurance Partners' },
    { num: '99%', label: 'Claim Settlement' }
  ];

  return (
    <section className="section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Horizontal line accent */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '80%', height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)',
        zIndex: 0
      }}></div>

      <div className="container reveal-on-scroll" style={{ position: 'relative', zIndex: 1 }}>
        <div className="glass-card" style={{
          padding: '60px 40px',
          background: 'rgba(255,255,255,0.02)',
          border: '1px solid rgba(255,255,255,0.06)'
        }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', textAlign: 'center' }}>
            {stats.map((stat, idx) => (
              <div key={idx} className="stagger-item">
                <h3 style={{
                  fontSize: '3rem', fontWeight: 200, marginBottom: '8px',
                  color: '#ffffff', letterSpacing: '-1px'
                }}>{stat.num}</h3>
                <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.9rem', fontWeight: 500, letterSpacing: '1px', textTransform: 'uppercase' }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
