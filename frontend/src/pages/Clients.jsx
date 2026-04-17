import React from 'react';
import Section from '../components/Section';
import { motion } from 'framer-motion';

const clients = [
    { name: "Bairavatex", category: "Garments" },
    { name: "Fashion Hub", category: "Retail" },
    { name: "Global Exports", category: "Logistics" },
    { name: "Apex Billing", category: "Finance" },
    { name: "Creative Minds", category: "Agency" },
    { name: "Tech Sol", category: "IT" },
];

const Clients = () => {
    return (
        <div className="clients-page" style={{ paddingTop: '120px' }}>
            <Section>
                <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                    <span className="badge" style={{ marginBottom: '24px' }}>Our Network</span>
                    <h1 className="gradient-text" style={{ fontSize: '3.5rem', marginBottom: '24px' }}>Trusted by Industry Leaders</h1>
                    <p style={{ maxWidth: '700px', margin: '0 auto' }}>
                        We work with brands of all sizes, from local manufacturers to global exporters, helping them streamline their digital presence.
                    </p>
                </div>

                <div className="grid grid-3">
                    {clients.map((client, index) => (
                        <motion.div
                            key={index}
                            className="glass-card"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '200px' }}
                        >
                            <h2 style={{ fontSize: '2rem', marginBottom: '8px', opacity: 0.8 }}>{client.name}</h2>
                            <span className="accent-text" style={{ fontWeight: '600', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.1em' }}>{client.category}</span>
                        </motion.div>
                    ))}
                </div>
            </Section>

            <Section>
                <div className="glass-card" style={{ padding: '60px', textAlign: 'center' }}>
                    <h2 className="gradient-text" style={{ fontSize: '2.5rem', marginBottom: '32px' }}>What They Say</h2>
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <p style={{ fontStyle: 'italic', fontSize: '1.25rem', marginBottom: '24px' }}>
                            "Superlabs transformed our manufacturing process. Their ERP system is intuitive, powerful, and specifically built for our needs. We saw a 40% increase in efficiency within the first six months."
                        </p>
                        <div style={{ fontWeight: '700', color: 'white' }}>Director, Bairavatex</div>
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default Clients;
