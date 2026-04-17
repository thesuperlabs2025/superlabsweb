import React from 'react';
import Section from '../components/Section';
import { Briefcase, MapPin, Clock, ArrowRight } from 'lucide-react';

const jobs = [
    { title: "Senior React Developer", type: "Full-Time", location: "Remote / On-site" },
    { title: "UI/UX Designer", type: "Full-Time", location: "On-site" },
    { title: "ERP Support Specialist", type: "Full-Time", location: "On-site" },
    { title: "Business Development Manager", type: "Full-Time", location: "On-site" },
];

const Career = () => {
    return (
        <div className="career-page" style={{ paddingTop: '120px' }}>
            <Section>
                <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                    <span className="badge" style={{ marginBottom: '24px' }}>Join the Tribe</span>
                    <h1 className="gradient-text" style={{ fontSize: '3.5rem', marginBottom: '24px' }}>Build the Future with Us</h1>
                    <p style={{ maxWidth: '700px', margin: '0 auto' }}>
                        We're always looking for talented individuals who are passionate about technology, design, and solving real-world industrial problems.
                    </p>
                </div>

                <div className="grid grid-2">
                    <div>
                        <h2 style={{ marginBottom: '24px' }}>Our Culture</h2>
                        <p style={{ marginBottom: '20px' }}>At Superlabs, we foster a culture of constant learning and innovation. We believe in autonomy, creativity, and the power of a well-designed solution.</p>
                        <ul style={{ listStyle: 'none', display: 'grid', gap: '16px' }}>
                            <li style={{ display: 'flex', gap: '12px' }}>
                                <div style={{ padding: '4px', borderRadius: '50%', background: 'var(--primary)', height: '24px' }}></div>
                                <span>Competitive Compensation</span>
                            </li>
                            <li style={{ display: 'flex', gap: '12px' }}>
                                <div style={{ padding: '4px', borderRadius: '50%', background: 'var(--secondary)', height: '24px' }}></div>
                                <span>Modern Tech Stack</span>
                            </li>
                            <li style={{ display: 'flex', gap: '12px' }}>
                                <div style={{ padding: '4px', borderRadius: '50%', background: 'var(--accent)', height: '24px' }}></div>
                                <span>Flexible Work Environment</span>
                            </li>
                        </ul>
                    </div>
                    <div className="glass-card">
                        <h3>Current Openings</h3>
                        <div style={{ display: 'grid', gap: '20px', marginTop: '32px' }}>
                            {jobs.map((job, index) => (
                                <div key={index} style={{ padding: '20px', background: 'rgba(255,255,255,0.02)', borderRadius: '12px', border: '1px solid var(--glass-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <div>
                                        <h4 style={{ marginBottom: '8px' }}>{job.title}</h4>
                                        <div style={{ display: 'flex', gap: '16px', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                                            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Clock size={14} /> {job.type}</span>
                                            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><MapPin size={14} /> {job.location}</span>
                                        </div>
                                    </div>
                                    <a href="/contact" className="accent-text"><ArrowRight size={24} /></a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default Career;
