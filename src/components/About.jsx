import React from 'react';
import { motion } from 'framer-motion';
import profileImg from '../assets/profile.jpg';
import { aboutData } from '../content';
import './About.css';

const About = () => {
    return (
        <section className="about-section container" id="about">
            <div className="about-grid">
                {/* Left Side: Image */}
                <motion.div
                    className="about-image-wrapper"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="image-frame">
                        <img src={profileImg} alt="Vidhan Dubey" className="profile-img" />
                        {/* Decorative Corners */}
                        <div className="corner top-left"></div>
                        <div className="corner bottom-right"></div>
                        {/* Floating Badge */}
                        <div className="floating-badge">
                            <span>CREATOR</span>
                        </div>
                    </div>
                </motion.div>

                {/* Right Side: Content */}
                <motion.div
                    className="about-content"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <h2 className="section-title">ABOUT <span className="text-accent">ME</span></h2>
                    {aboutData.descriptionParagraphs.map((text, index) => (
                        <p key={index} className="about-text">{text}</p>
                    ))}

                    <div className="stats-grid">
                        {aboutData.stats.map((stat, index) => (
                            <div key={index} className="stat-item">
                                <span className="stat-number">{stat.number}</span>
                                <span className="stat-label">{stat.label}</span>
                            </div>
                        ))}
                    </div>

                    <button className="btn btn-accent mt-4">
                        Download CV
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
