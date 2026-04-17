import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'About Us', path: '/about' },
        { name: 'Clients', path: '/clients' },
        { name: 'Career', path: '/career' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container nav-container">
                <Link to="/" className="nav-logo">
                    <img src="/images/TSL Logo 2.jpg" alt="The Super Labs" />
                    <span>The Super Labs</span>
                </Link>

                {/* Desktop Links */}
                <div className="nav-links">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    {/* Get Started Button Removed */}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="mobile-menu-btn"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mobile-menu"
                        style={{
                            position: 'absolute',
                            top: 'var(--nav-height)',
                            left: 0,
                            right: 0,
                            background: 'rgba(7, 11, 20, 0.95)',
                            backdropFilter: 'blur(16px)',
                            padding: '24px',
                            borderBottom: '1px solid var(--glass-border)',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '20px',
                            zIndex: 999
                        }}
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                                onClick={() => setIsMobileMenuOpen(false)}
                                style={{ fontSize: '1.2rem' }}
                            >
                                {link.name}
                            </Link>
                        ))}

                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
