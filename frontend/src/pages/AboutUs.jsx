import React from 'react';
import Section from '../components/Section';
import { Target, Users, Eye, Award } from 'lucide-react';

const AboutUs = () => {
    return (
        <div className="about-page" style={{ paddingTop: '120px' }}>
            <Section>
                <div className="grid grid-2" style={{ alignItems: 'center' }}>
                    <div>
                        <span className="badge" style={{ marginBottom: '24px' }}>Our Story</span>
                        <h1 className="gradient-text" style={{ fontSize: '3.5rem', marginBottom: '24px' }}>Innovation is our <br />DNA.</h1>
                        <p style={{ marginBottom: '24px', fontSize: '1.1rem' }}>
                            Superlabs was founded with a clear vision: to bridge the gap between complex industrial requirements and elegant digital solutions. Starting with a focus on the Garment Industry, we have expanded our expertise to include high-performance ERPs, mobile applications, and world-class design.
                        </p>
                        <p style={{ color: 'var(--text-muted)' }}>
                            We pride ourselves on being a partner rather than just a vendor. We dive deep into your business processes to craft solutions that don't just work—they excel.
                        </p>
                    </div>
                    <div style={{ position: 'relative' }}>
                        <div className="glass-card" style={{ padding: '0', overflow: 'hidden' }}>
                            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Team" style={{ width: '100%' }} />
                        </div>
                        <div className="glass-card" style={{ position: 'absolute', bottom: '-40px', left: '-40px', padding: '30px', maxWidth: '250px' }}>
                            <h2 className="accent-text" style={{ fontSize: '2.5rem' }}>15+</h2>
                            <p style={{ margin: '0', fontSize: '0.9rem' }}>Successful Projects Delivered Worldwide.</p>
                        </div>
                    </div>
                </div>
            </Section>

            <Section className="bg-glass">
                <div className="grid grid-3">
                    <div className="glass-card" style={{ textAlign: 'center' }}>
                        <div style={{ color: 'var(--primary)', marginBottom: '20px', display: 'flex', justifyContent: 'center' }}><Target size={40} /></div>
                        <h3>Our Mission</h3>
                        <p style={{ marginTop: '16px', fontSize: '0.95rem' }}>To empower industries through smart, customizable, and efficient software solutions that drive growth.</p>
                    </div>
                    <div className="glass-card" style={{ textAlign: 'center' }}>
                        <div style={{ color: 'var(--secondary)', marginBottom: '20px', display: 'flex', justifyContent: 'center' }}><Eye size={40} /></div>
                        <h3>Our Vision</h3>
                        <p style={{ marginTop: '16px', fontSize: '0.95rem' }}>To be the global leader in industrial digital transformation and high-end design solutions.</p>
                    </div>
                    <div className="glass-card" style={{ textAlign: 'center' }}>
                        <div style={{ color: 'var(--accent)', marginBottom: '20px', display: 'flex', justifyContent: 'center' }}><Users size={40} /></div>
                        <h3>Our Values</h3>
                        <p style={{ marginTop: '16px', fontSize: '0.95rem' }}>Integrity, Innovation, and Interconnectivity are the pillars that support everything we build.</p>
                    </div>
                </div>
            </Section>

            <Section>
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <h2 className="gradient-text" style={{ fontSize: '2.5rem' }}>Why Choose Superlabs?</h2>
                </div>
                <div className="grid grid-2">
                    <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
                        <div style={{ flexShrink: 0 }}><Award className="accent-text" size={32} /></div>
                        <div>
                            <h4>Industry Expertise</h4>
                            <p style={{ fontSize: '0.9rem' }}>Deep understanding of garments, billing, and retail workflows.</p>
                        </div>
                    </div>
                    <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
                        <div style={{ flexShrink: 0 }}><Users className="accent-text" size={32} /></div>
                        <div>
                            <h4>Customer Centric</h4>
                            <p style={{ fontSize: '0.9rem' }}>We listen, we adapt, and we deliver exactly what you need.</p>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default AboutUs;
