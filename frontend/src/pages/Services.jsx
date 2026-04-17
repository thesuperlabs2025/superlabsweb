import React from 'react';
import { motion } from 'framer-motion';
import { Code, Layout, Palette, ShoppingCart, Smartphone, Terminal } from 'lucide-react';
import Section from '../components/Section';

const serviceList = [
    {
        icon: <Terminal size={32} />,
        title: "Software ERP for Garments",
        description: "End-to-end management for garment manufacturers, from sampling and merchandising to production and delivery.",
        color: "#6366f1"
    },
    {
        icon: <ShoppingCart size={32} />,
        title: "Billing Solutions",
        description: "Faster, smarter billing software with integrated inventory management and multi-tax support for all industries.",
        color: "#a855f7"
    },
    {
        icon: <Smartphone size={32} />,
        title: "App Development",
        description: "Custom iOS and Android applications built with native performance and premium user experience.",
        color: "#ec4899"
    },
    {
        icon: <Code size={32} />,
        title: "Web Design & Dev",
        description: "Responsive, high-performance websites that look stunning on every device and convert visitors into clients.",
        color: "#06b6d4"
    },
    {
        icon: <Palette size={32} />,
        title: "Branding",
        description: "Crafting unique visual identities, logos, and brand guidelines that resonate with your target audience.",
        color: "#f59e0b"
    },
    {
        icon: <Layout size={32} />,
        title: "Design Solutions",
        description: "From UI/UX design to marketing materials, we provide end-to-end creative solutions for your brand.",
        color: "#10b981"
    }
];

const Services = () => {
    return (
        <div className="services-page" style={{ paddingTop: '120px' }}>
            <Section>
                <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                    <span className="badge" style={{ marginBottom: '24px' }}>Our Expertise</span>
                    <h1 className="gradient-text" style={{ fontSize: '3.5rem', marginBottom: '24px' }}>Comprehensive Services</h1>
                    <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.2rem' }}>
                        We provide fully customizable digital solutions designed to streamline your operations and elevate your brand presence.
                    </p>
                </div>

                <div className="grid grid-3">
                    {serviceList.map((service, index) => (
                        <motion.div
                            key={index}
                            className="glass-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            style={{ position: 'relative', overflow: 'hidden' }}
                        >
                            <div
                                style={{
                                    height: '64px',
                                    width: '64px',
                                    background: `${service.color}15`,
                                    borderRadius: '16px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginBottom: '28px',
                                    color: service.color
                                }}
                            >
                                {service.icon}
                            </div>
                            <h3 style={{ marginBottom: '16px' }}>{service.title}</h3>
                            <p style={{ color: 'var(--text-muted)' }}>{service.description}</p>

                            <div style={{
                                position: 'absolute',
                                bottom: '-20px',
                                right: '-20px',
                                fontSize: '120px',
                                opacity: 0.03,
                                color: service.color,
                                zIndex: 0
                            }}>
                                {service.icon}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Section>

            <Section>
                <div className="glass-card" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'center', padding: '60px' }}>
                    <div>
                        <h2 className="gradient-text" style={{ fontSize: '2.5rem', marginBottom: '24px' }}>Fully Customizable Solutions</h2>
                        <p style={{ marginBottom: '24px' }}>
                            We don't believe in one-size-fits-all. Every industry has unique challenges, and we build software that adapts to YOUR workflow, not the other way around.
                        </p>
                        <ul style={{ listStyle: 'none', display: 'grid', gap: '12px' }}>
                            <li style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                                <div style={{ height: '8px', width: '8px', borderRadius: '50%', background: 'var(--primary)' }}></div>
                                <span>Modular Architecture</span>
                            </li>
                            <li style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                                <div style={{ height: '8px', width: '8px', borderRadius: '50%', background: 'var(--secondary)' }}></div>
                                <span>Scalable Infrastructure</span>
                            </li>
                            <li style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                                <div style={{ height: '8px', width: '8px', borderRadius: '50%', background: 'var(--accent)' }}></div>
                                <span>Dedicated Support</span>
                            </li>
                        </ul>
                    </div>
                    <div style={{ position: 'relative' }}>
                        <img
                            src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                            alt="Design"
                            style={{ width: '100%', borderRadius: '20px' }}
                        />
                        <div style={{ position: 'absolute', top: '-20px', right: '-20px', padding: '20px', background: 'rgba(99, 102, 241, 0.9)', borderRadius: '12px', backdropFilter: 'blur(10px)', color: 'white', fontWeight: '800' }}>
                            7+ Years Experience
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default Services;
