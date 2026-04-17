import React from 'react';
import Section from '../components/Section';
import { Layers, Settings, Database, TrendingUp } from 'lucide-react';

const GarmentManagement = () => {
    return (
        <div className="management-page" style={{ paddingTop: '100px' }}>
            <Section>
                <div className="hero-section text-center" style={{ marginBottom: '80px' }}>
                    <span className="badge">Advanced Software Solutions</span>
                    <h1 className="gradient-text" style={{ fontSize: '3.5rem', marginBottom: '24px' }}>
                        Complete Garment Management ERP Software
                    </h1>
                    <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.2rem', color: 'var(--text-muted)' }}>
                        Streamline your entire production lifecycle with the best software company for garment management. Our ERP software integrates every department into a unified digital workspace.
                    </p>
                </div>

                <div className="grid grid-2" style={{ gap: '60px', marginBottom: '100px' }}>
                    <div className="glass-card">
                        <h2 className="gradient-text" style={{ marginBottom: '20px' }}>End-to-End Software Control</h2>
                        <p style={{ marginBottom: '20px' }}>As a leading software company, we provide ERP software that covers order planning, samplings, and distribution. Control your garment business with modern software engineering.</p>
                        <div className="grid grid-2" style={{ gap: '20px' }}>
                            <div className="glass-card" style={{ padding: '20px', background: 'rgba(255,255,255,0.02)' }}>
                                <Database className="accent-text" size={20} style={{ marginBottom: '10px' }} />
                                <h5>ERP Inventory Software</h5>
                            </div>
                            <div className="glass-card" style={{ padding: '20px', background: 'rgba(255,255,255,0.02)' }}>
                                <Settings className="accent-text" size={20} style={{ marginBottom: '10px' }} />
                                <h5>Software Production Tracking</h5>
                            </div>
                        </div>
                    </div>
                    <div className="glass-card">
                        <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Garment Management Dashboard" style={{ width: '100%', borderRadius: '12px' }} />
                    </div>
                </div>

                <div className="features-grid grid grid-3" style={{ gap: '30px' }}>
                    <div className="glass-card text-center" style={{ padding: '40px' }}>
                        <Layers className="accent-text" size={48} style={{ marginBottom: '20px' }} />
                        <h3>Full Software Lifecycle</h3>
                        <p>Complete software tracking from initial order entry to final dispatch and billing.</p>
                    </div>
                    <div className="glass-card text-center" style={{ padding: '40px' }}>
                        <TrendingUp className="accent-text" size={48} style={{ marginBottom: '20px' }} />
                        <h3>Management Software Insights</h3>
                        <p>Our software company provides deep analytics and real-time profitability reporting.</p>
                    </div>
                    <div className="glass-card text-center" style={{ padding: '40px' }}>
                        <Database className="accent-text" size={48} style={{ marginBottom: '20px' }} />
                        <h3>Secure ERP Software</h3>
                        <p>Encrypted data protection handled by the best software company security protocols.</p>
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default GarmentManagement;
