import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Cpu, Globe, Rocket, Shield, Zap } from 'lucide-react';
import Section from '../components/Section';

const Home = () => {
    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="section-padding" style={{ paddingTop: '160px', textAlign: 'center' }}>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <span className="badge" style={{ marginBottom: '24px' }}>Innovation Meets Excellence</span>
                        <h1 style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', marginBottom: '24px' }} className="gradient-text">
                            Next-Gen ERP & <br /> Digital Solutions.
                        </h1>
                        <p style={{ maxWidth: '800px', margin: '0 auto 40px', fontSize: '1.25rem' }}>
                            We build customizable, robust, and scalable Software ERP systems for Garments, Billing, and diverse industries. Your vision, our innovation.
                        </p>
                        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <a href="/services" className="btn btn-primary">
                                Explore Services <ArrowRight size={20} />
                            </a>
                            <a href="/contact" className="btn btn-outline">
                                Get a Quote
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Industries Grid */}
            <Section>
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <h2 className="gradient-text" style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Industry Specialists</h2>
                    <p style={{ maxWidth: '600px', margin: '0 auto' }}>Specialized ERP solutions tailored for specific industrial needs.</p>
                </div>
                <div className="grid grid-3">
                    <div className="glass-card">
                        <div style={{ height: '60px', width: '60px', background: 'rgba(99, 102, 241, 0.1)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                            <Cpu className="accent-text" size={32} />
                        </div>
                        <h3>Garment ERP</h3>
                        <p style={{ marginTop: '16px' }}>Complete manufacturing and export management system for the apparel industry.</p>
                    </div>
                    <div className="glass-card">
                        <div style={{ height: '60px', width: '60px', background: 'rgba(168, 85, 247, 0.1)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                            <Rocket className="accent-text" size={32} />
                        </div>
                        <h3>Billing Software</h3>
                        <p style={{ marginTop: '16px' }}>High-speed, accurate, and customizable billing solutions for retail and wholesale.</p>
                    </div>
                    <div className="glass-card">
                        <div style={{ height: '60px', width: '60px', background: 'rgba(236, 72, 153, 0.1)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                            <Globe className="accent-text" size={32} />
                        </div>
                        <h3>Custom ERP</h3>
                        <p style={{ marginTop: '16px' }}>Flexible modules that grow with your business, no matter the industry.</p>
                    </div>
                </div>
            </Section>

            {/* Services Brief */}
            <Section className="bg-glass">
                <div className="grid grid-2" style={{ alignItems: 'center' }}>
                    <div>
                        <h2 className="gradient-text" style={{ fontSize: '3rem', marginBottom: '24px' }}>Beyond Just ERP.</h2>
                        <p style={{ marginBottom: '32px' }}>
                            At Superlabs, we provide a full spectrum of digital services to help your brand stand out in the modern market. From initial branding to complex app ecosystems.
                        </p>
                        <div style={{ display: 'grid', gap: '20px' }}>
                            <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                                <Zap className="accent-text" size={24} />
                                <span>Premium Web Design</span>
                            </div>
                            <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                                <Shield className="accent-text" size={24} />
                                <span>App Development (iOS & Android)</span>
                            </div>
                            <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                                <Rocket className="accent-text" size={24} />
                                <span>Brand Identity & Design Solutions</span>
                            </div>
                        </div>
                    </div>
                    <div className="glass-card" style={{ padding: '0', overflow: 'hidden' }}>
                        <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Dashboard" style={{ width: '100%', height: 'auto', display: 'block' }} />
                    </div>
                </div>
            </Section>

            {/* CTA */}
            <Section>
                <div className="glass-card" style={{ textAlign: 'center', background: 'linear-gradient(45deg, rgba(99, 102, 241, 0.1), rgba(168, 85, 247, 0.1))' }}>
                    <h2 className="gradient-text" style={{ fontSize: '2.5rem', marginBottom: '24px' }}>Ready to Scale Your Business?</h2>
                    <p style={{ marginBottom: '32px' }}>Let's build something extraordinary together. Contact our team for a demo today.</p>
                    <a href="/contact" className="btn btn-primary">Start Your Project</a>
                </div>
            </Section>
        </div>
    );
};

export default Home;
