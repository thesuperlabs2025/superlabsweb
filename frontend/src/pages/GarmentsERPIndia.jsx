import React from 'react';
import Section from '../components/Section';
import { Shield, BarChart2, Globe, CheckCircle } from 'lucide-react';

const GarmentsERPIndia = () => {
    return (
        <div className="erp-india-page" style={{ paddingTop: '100px' }}>
            <Section>
                <div className="hero-section text-center" style={{ marginBottom: '80px' }}>
                    <span className="badge">Leading Software Company</span>
                    <h1 className="gradient-text" style={{ fontSize: '3.5rem', marginBottom: '24px' }}>
                        Best Garments ERP Software Company in India
                    </h1>
                    <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.2rem', color: 'var(--text-muted)' }}>
                        The Super Labs is a premier software company providing enterprise-grade Garments ERP solutions across India. We empower manufacturers with cutting-edge technology and scalable digital systems.
                    </p>
                </div>

                <div className="grid grid-2" style={{ gap: '60px', marginBottom: '100px' }}>
                    <div className="glass-card">
                        <h2 className="gradient-text" style={{ marginBottom: '20px' }}>National Software Expertise</h2>
                        <p style={{ marginBottom: '20px' }}>Our cloud-based ERP software is developed by our expert software company team to handle complex production units across all Indian states. Real-time data sync for modern enterprises.</p>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li style={{ display: 'flex', gap: '10px', marginBottom: '12px' }}><CheckCircle className="accent-text" size={20} /> GST Compliant Billing Software</li>
                            <li style={{ display: 'flex', gap: '10px', marginBottom: '12px' }}><CheckCircle className="accent-text" size={20} /> Multi-currency for Global Exports</li>
                            <li style={{ display: 'flex', gap: '10px', marginBottom: '12px' }}><CheckCircle className="accent-text" size={20} /> National Support by Best Software Company</li>
                        </ul>
                    </div>
                    <div className="glass-card">
                        <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Software Development Team" style={{ width: '100%', borderRadius: '12px' }} />
                    </div>
                </div>

                <div className="features-grid grid grid-3" style={{ gap: '30px' }}>
                    <div className="glass-card text-center" style={{ padding: '40px' }}>
                        <Globe className="accent-text" size={48} style={{ marginBottom: '20px' }} />
                        <h3>Pan-India Software Support</h3>
                        <p>Our software company provides seamless on-site and remote support across India's textile hubs.</p>
                    </div>
                    <div className="glass-card text-center" style={{ padding: '40px' }}>
                        <Shield className="accent-text" size={48} style={{ marginBottom: '20px' }} />
                        <h3>Ready-to-Deploy ERP</h3>
                        <p>Fully compliant software solutions updated with current industrial taxation and laws.</p>
                    </div>
                    <div className="glass-card text-center" style={{ padding: '40px' }}>
                        <BarChart2 className="accent-text" size={48} style={{ marginBottom: '20px' }} />
                        <h3>Data-Driven Management</h3>
                        <p>Advanced analytics and reporting built by the best ERP software company experts.</p>
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default GarmentsERPIndia;
