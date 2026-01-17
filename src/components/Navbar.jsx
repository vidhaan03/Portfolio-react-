import React from 'react';
import { socialLinks } from '../content';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar container">
            <div className="logo badge">
                <span>VIDHAN</span>
                <span className="badge-highlight">D.</span>
            </div>

            <div className="nav-links">
                <a href="#about" className="nav-link">About</a>
                <a href="#work" className="nav-link">Work</a>
                <a href="#stack" className="nav-link">Stack</a>
            </div>

            <a href={`mailto:${socialLinks.email}`} className="btn btn-primary">
                Let's Talk
            </a>
        </nav>
    );
};

export default Navbar;
