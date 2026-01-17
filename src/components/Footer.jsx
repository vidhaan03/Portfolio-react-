import React from 'react';
import { Linkedin, Instagram, Mail } from 'lucide-react';
import { footerData, socialLinks } from '../content';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="container footer-content">
                <h2 className="footer-title">{footerData.title}</h2>

                <a href={`mailto:${socialLinks.email}`} className="footer-email">
                    {socialLinks.email}
                </a>

                <div className="social-links">
                    <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="social-link" title="LinkedIn">
                        <Linkedin size={28} />
                    </a>
                    <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="social-link" title="Instagram">
                        <Instagram size={28} />
                    </a>
                    <a href={`mailto:${socialLinks.email}`} className="social-link" title="Email">
                        <Mail size={28} />
                    </a>
                </div>
                <p className="copyright">{footerData.copyright}</p>
            </div>
        </footer>
    );
};

export default Footer;
