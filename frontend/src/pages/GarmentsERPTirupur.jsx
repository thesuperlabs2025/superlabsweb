import React from 'react';
import Section from '../components/Section';
import { MapPin, Zap, Users, Award } from 'lucide-react';

const GarmentsERPTirupur = () => {
    return (
        <div className="erp-tirupur-page" style={{ paddingTop: '100px' }}>
            <Section>
                <div className="hero-section text-center" style={{ marginBottom: '80px' }}>
                    <span className="badge">Tirupur's #1 Software Company</span>
                    <h1 className="gradient-text" style={{ fontSize: '3.5rem', marginBottom: '24px' }}>
                        Trusted Garments ERP Software Company in Tirupur
                    </h1>
                    <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.2rem', color: 'var(--text-muted)' }}>
                        The Super Labs is the go-to software company for bespoke ERP solutions in the garment capital. We specialize in automating Tirupur's unique textile manufacturing workflows.
                    </p>
                </div>

                <div className="grid grid-2" style={{ gap: '60px', marginBottom: '100px' }}>
                    <div className="glass-card">
                        <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Software Company Team Tirupur" style={{ width: '100%', borderRadius: '12px' }} />
                    </div>
                    <div className="glass-card">
                        <h2 className="gradient-text" style={{ marginBottom: '20px' }}>Local Software Support</h2>
                        <p style={{ marginBottom: '20px' }}>Being a local software company in Tirupur, we provide unparalleled on-site support and training. Our ERP software is built on decade-long industry feedback.</p>
                        <div style={{ display: 'grid', gap: '20px' }}>
                            <div style={{ display: 'flex', gap: '15px' }}>
                                <MapPin className="accent-text" size={24} />
                                <div>
                                    <h4 style={{ margin: 0 }}>On-Premise Software Setup</h4>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Our expert software team handles implementation at your unit.</p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '15px' }}>
                                <Award className="accent-text" size={24} />
                                <div>
                                    <h4 style={{ margin: 0 }}>Specialized Industry Modules</h4>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Customized software modules for knitting, dyeing, and exports.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="features-grid grid grid-3" style={{ gap: '30px' }}>
                    <div className="glass-card text-center" style={{ padding: '40px' }}>
                        <Zap className="accent-text" size={48} style={{ marginBottom: '20px' }} />
                        <h3>Rapid Software Deployment</h3>
                        <p>Our software company ensures your ERP goes live in record time with local support.</p>
                    </div>
                    <div className="glass-card text-center" style={{ padding: '40px' }}>
                        <Users className="accent-text" size={48} style={{ marginBottom: '20px' }} />
                        <h3>Expert Software Developers</h3>
                        <p>Access a team of dedicated developers specializing in textile ERP solutions.</p>
                    </div>
                    <div className="glass-card text-center" style={{ padding: '40px' }}>
                        <Award className="accent-text" size={48} style={{ marginBottom: '20px' }} />
                        <h3>Premium Quality Software</h3>
                        <p>High-end software standards tailored for Tirupur's export dynamic.</p>
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default GarmentsERPTirupur;
