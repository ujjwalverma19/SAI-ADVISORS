import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        { q: "Why do I need an insurance advisor instead of buying directly online?", a: "While online portals offer convenience, they often lack personalized guidance. An advisor analyzes your distinct financial standing to guarantee you're neither under-insured nor overpaying for redundant coverage. We also act as your advocate during claims." },
        { q: "What should I consider when determining my Life Insurance coverage?", a: "A general rule is 10 to 15 times your annual income. However, we consider your outstanding debts, future education costs for children, and lifestyle goals before making a custom recommendation." },
        { q: "Can my insurance policies be structured to provide a retirement income?", a: "Yes. Many life insurance products, especially annuities and structured ULIPs, are designed to amass wealth over time, offering a tax-efficient steady income stream during your post-retirement years." },
        { q: "How does Sai Advisors assist in the claims process?", a: "We manage the entire process for you—from initial reporting to the insurance firm up to final settlement negotiation. We ensure all paperwork is properly filed to eliminate delays and maximize your rightful claim." }
    ];

    return (
        <section id="faq" className="section-padding">
            <div className="container reveal-on-scroll">
                <h2 className="section-title">Frequently Asked <span style={{ fontWeight: 300 }}>Questions</span></h2>
                <div style={{ maxWidth: '800px', margin: '50px auto 0' }}>
                    {faqs.map((faq, idx) => (
                        <div key={idx} className="glass-card stagger-item" style={{
                          marginBottom: '12px', padding: '0 28px', cursor: 'pointer',
                          transition: 'all 0.4s ease',
                          borderColor: openIndex === idx ? 'rgba(255,255,255,0.15)' : undefined
                        }} onClick={() => setOpenIndex(openIndex === idx ? null : idx)}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '24px 0' }}>
                                <h4 style={{ fontSize: '1.05rem', fontWeight: 500, paddingRight: '20px', color: openIndex === idx ? '#fff' : 'rgba(255,255,255,0.7)' }}>{faq.q}</h4>
                                {openIndex === idx ? <ChevronUp size={20} color="rgba(255,255,255,0.5)" /> : <ChevronDown size={20} color="rgba(255,255,255,0.25)" />}
                            </div>
                            <div style={{
                              maxHeight: openIndex === idx ? '500px' : '0',
                              overflow: 'hidden',
                              opacity: openIndex === idx ? 1 : 0,
                              transition: 'all 0.4s ease'
                            }}>
                                <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', paddingBottom: '24px', fontSize: '0.95rem' }}>
                                    {faq.a}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
