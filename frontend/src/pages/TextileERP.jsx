import React from 'react';
import Section from '../components/Section';
import { Cpu, Globe, Rocket, Shield } from 'lucide-react';

const TextileERP = () => {
    return (
        <div className="textile-erp-page" style={{ paddingTop: '100px' }}>
            <Section>
                <div className="hero-section text-center" style={{ marginBottom: '80px' }}>
                    <span className="badge">Industry 4.0 Software Company</span>
                    <h1 className="gradient-text" style={{ fontSize: '3.5rem', marginBottom: '24px' }}>
                        Advanced Textile ERP Software Company
                    </h1>
                    <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.2rem', color: 'var(--text-muted)' }}>
                        Redefining textile manufacturing with smart software automation. As a specialized software company, our Textile ERP software covers everything from spinning to finished products.
                    </p>
                </div>

                <div className="grid grid-2" style={{ gap: '60px', marginBottom: '100px' }}>
                    <div className="glass-card">
                        <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Advanced Textile Software" style={{ width: '100%', borderRadius: '12px' }} />
                    </div>
                    <div className="glass-card">
                        <h2 className="gradient-text" style={{ marginBottom: '20px' }}>Smart Software Processing</h2>
                        <p style={{ marginBottom: '20px' }}>Our textile software company provides modular control for the entire textile value chain. Eliminate data silos with unified ERP software built for scalability.</p>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                            <div className="glass-card" style={{ padding: '20px', background: 'rgba(255,255,255,0.02)' }}>
                                <Cpu className="accent-text" size={24} style={{ marginBottom: '10px' }} />
                                <h5>ERP Software</h5>
                            </div>
                            <div className="glass-card" style={{ padding: '20px', background: 'rgba(255,255,255,0.02)' }}>
                                <Globe className="accent-text" size={24} style={{ marginBottom: '10px' }} />
                                <h5>Global Software Solutions</h5>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="features-grid grid grid-3" style={{ gap: '30px' }}>
                    <div className="glass-card text-center" style={{ padding: '40px' }}>
                        <Rocket className="accent-text" size={48} style={{ marginBottom: '20px' }} />
                        <h3>Scalable ERP Software</h3>
                        <p>Our software company builds architectures that scale alongside your industrial growth.</p>
                    </div>
                    <div className="glass-card text-center" style={{ padding: '40px' }}>
                        <Shield className="accent-text" size={48} style={{ marginBottom: '20px' }} />
                        <h3>Reliable Software Company</h3>
                        <p>Trusted by thousands of users for industry-specific ERP software reliability.</p>
                    </div>
                    <div className="glass-card text-center" style={{ padding: '40px' }}>
                        <Cpu className="accent-text" size={48} style={{ marginBottom: '20px' }} />
                        <h3>Custom Software Automation</h3>
                        <p>Specialized software company expertise in IoT and automated textile management.</p>
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default TextileERP;
