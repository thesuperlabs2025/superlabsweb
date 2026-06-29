import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Instagram = ({ size = 20 }) => (
    <svg xmlns="http://www.w3.org/2003/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
);

const Linkedin = ({ size = 20 }) => (
    <svg xmlns="http://www.w3.org/2003/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
);

const Twitter = ({ size = 20 }) => (
    <svg xmlns="http://www.w3.org/2003/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
);

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-info">
                        <Link to="/" className="nav-logo">
                            <img src="/images/TSL Logo 2.png" alt="The Super Labs" />
                            <span>The Super Labs</span>
                        </Link>
                        <p>
                            Transforming industries with premium ERP solutions, app development, and high-end design solutions. Specialized in Garment & Billing ERPs.
                        </p>
                        <div style={{ display: 'flex', gap: '16px', marginTop: '24px' }}>
                            <a
                                href="https://www.instagram.com/the_superlabs?igsh=MTA4Yzd6ajdwMmw5dw%3D%3D&utm_source=qr"
                                className="nav-link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="nav-link"><Linkedin size={20} /></a>

                        </div>
                    </div>

                    <div>
                        <h4 className="footer-title">Services</h4>
                        <ul className="footer-links">
                            <li className="footer-link"><Link to="/services">ERP Solutions</Link></li>
                            <li className="footer-link"><Link to="/services">App Development</Link></li>
                            <li className="footer-link"><Link to="/services">Web Design</Link></li>
                            <li className="footer-link"><Link to="/services">Branding</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="footer-title">Solutions</h4>
                        <ul className="footer-links" style={{ fontSize: '0.85rem' }}>
                            <li className="footer-link"><Link to="/garments-erp-india">Garments ERP India</Link></li>
                            <li className="footer-link"><Link to="/garments-erp-tirupur">ERP Tirupur</Link></li>
                            <li className="footer-link"><Link to="/garment-management">Management System</Link></li>
                            <li className="footer-link"><Link to="/textile-erp-software">Textile ERP</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="footer-title">Company</h4>
                        <ul className="footer-links">
                            <li className="footer-link"><Link to="/about">About Us</Link></li>
                            <li className="footer-link"><Link to="/clients">Our Clients</Link></li>
                            <li className="footer-link"><Link to="/career">Careers</Link></li>
                            <li className="footer-link"><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="footer-title">Contact Us</h4>
                        <ul className="footer-links">
                            <li className="footer-link" style={{ display: 'flex', gap: '12px', color: 'var(--text-muted)' }}>
                                <Mail size={18} className="accent-text" />
                                <span>thesuperlabs2025@gmail.com</span>
                            </li>
                            <li className="footer-link" style={{ display: 'flex', gap: '12px', color: 'var(--text-muted)' }}>
                                <Phone size={18} className="accent-text" />
                                <span>+91 89259 01430 </span>
                            </li>
                            <li className="footer-link" style={{ display: 'flex', gap: '12px', color: 'var(--text-muted)' }}>
                                <MapPin size={18} className="accent-text" />
                                <span>Tiruppur, Tamil Nadu</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} The Super Labs. All rights reserved.</p>
                    <div style={{ display: 'flex', gap: '24px' }}>
                        <Link to="#" className="nav-link">Privacy Policy</Link>
                        <Link to="#" className="nav-link">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
