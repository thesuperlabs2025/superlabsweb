import React, { useState } from 'react';
import Section from '../components/Section';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        email: '',
        enquiryType: '',
        serviceType: '',
        message: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const whatsappNumber = '8925901430';

        const text = `*New Form Submission*%0A%0A` +
            `*Name:* ${formData.name}%0A` +
            `*Mobile:* ${formData.mobile}%0A` +
            `*Email:* ${formData.email}%0A` +
            `*Enquiry:* ${formData.enquiryType}%0A` +
            (formData.enquiryType === 'Sale Enquiry' ? `*Service Interested in:* ${formData.serviceType}%0A` : '') +
            `*Message:* ${formData.message}`;

        window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
    };

    const inputStyle = {
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid var(--glass-border)',
        padding: '14px',
        borderRadius: '10px',
        color: 'white',
        width: '100%',
        outline: 'none',
        fontSize: '1rem',
        appearance: 'none',
        cursor: 'pointer'
    };

    // Custom Select Component for better UI
    const StyledSelect = ({ name, value, onChange, options, placeholder }) => (
        <div style={{ position: 'relative' }}>
            <select
                name={name}
                required
                value={value}
                onChange={onChange}
                style={{
                    ...inputStyle,
                    color: value ? 'white' : '#94a3b8',
                }}
            >
                <option value="" disabled style={{ background: '#0f172a', color: '#94a3b8' }}>{placeholder}</option>
                {options.map(opt => (
                    <option key={opt} value={opt} style={{ background: '#0f172a', color: 'white' }}>
                        {opt}
                    </option>
                ))}
            </select>
            <div style={{ position: 'absolute', right: '14px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: 'var(--text-muted)', fontSize: '0.8rem' }}>
                ▼
            </div>
        </div>
    );

    return (
        <div className="contact-page" style={{ paddingTop: '120px' }}>
            <Section>
                <div className="grid grid-2" style={{ gap: '60px' }}>
                    <div>
                        <span className="badge" style={{ marginBottom: '24px' }}>Get In Touch</span>
                        <h1 className="gradient-text" style={{ fontSize: '3.5rem', marginBottom: '24px' }}>Let's Start a <br />Conversation.</h1>
                        <p style={{ marginBottom: '40px', fontSize: '1.1rem' }}>
                            Have a project in mind or want to see a demo of our ERP solutions? Reach out to us and our team will get back to you within 24 hours.
                        </p>

                        <div style={{ display: 'grid', gap: '32px' }}>
                            <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                                <div style={{ height: '56px', width: '56px', background: 'rgba(99, 102, 241, 0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 style={{ marginBottom: '4px' }}>Email Us</h4>
                                    <p style={{ margin: 0 }}>thesuperlabs2025@gmail.com</p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                                <div style={{ height: '56px', width: '56px', background: 'rgba(168, 85, 247, 0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--secondary)' }}>
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 style={{ marginBottom: '4px' }}>Call Us</h4>
                                    <p style={{ margin: 0 }}>+91 89259 01430</p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                                <div style={{ height: '56px', width: '56px', background: 'rgba(236, 72, 153, 0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)' }}>
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 style={{ marginBottom: '4px' }}>Visit Us</h4>
                                    <p style={{ margin: 0 }}>Tirupur, Tamil Nadu</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="glass-card">
                        <h3 style={{ marginBottom: '32px' }}>Send a Message</h3>
                        <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '24px' }}>
                            <div style={{ display: 'grid', gap: '8px' }}>
                                <label style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    placeholder="Enter your name"
                                    style={inputStyle}
                                />
                            </div>

                            <div style={{ display: 'grid', gap: '8px' }}>
                                <label style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Mobile Number</label>
                                <input
                                    type="tel"
                                    name="mobile"
                                    required
                                    value={formData.mobile}
                                    onChange={handleInputChange}
                                    placeholder="Enter your mobile number"
                                    style={inputStyle}
                                />
                            </div>

                            <div style={{ display: 'grid', gap: '8px' }}>
                                <label style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="john@example.com"
                                    style={inputStyle}
                                />
                            </div>

                            <div style={{ display: 'grid', gap: '8px' }}>
                                <label style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Enquiry Type</label>
                                <StyledSelect
                                    name="enquiryType"
                                    value={formData.enquiryType}
                                    onChange={handleInputChange}
                                    placeholder="Select enquiry type"
                                    options={["Sale Enquiry", "Job Enquiry"]}
                                />
                            </div>

                            {formData.enquiryType === 'Sale Enquiry' && (
                                <div style={{ display: 'grid', gap: '8px' }}>
                                    <label style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Interested in:</label>
                                    <StyledSelect
                                        name="serviceType"
                                        value={formData.serviceType}
                                        onChange={handleInputChange}
                                        placeholder="Select category"
                                        options={[
                                            "Garments ERP",
                                            "Website",
                                            "Design Solution",
                                            "Branding",
                                            "Billing ERP",
                                            "Other ERP Related services"
                                        ]}
                                    />
                                </div>
                            )}

                            <div style={{ display: 'grid', gap: '8px' }}>
                                <label style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Message</label>
                                <textarea
                                    name="message"
                                    required
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    placeholder="Tell us about your project..."
                                    style={{ ...inputStyle, resize: 'none', appearance: 'auto' }}
                                ></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary" style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', padding: '16px' }}>
                                Send Message <Send size={18} />
                            </button>
                        </form>
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default ContactUs;
