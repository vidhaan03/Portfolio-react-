import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Globe, Heart, ToggleRight, X, ArrowUpRight, Palette, Code, ArrowRight } from 'lucide-react';
import Tools from './Tools';
import { heroData } from '../content';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero container">
            <div className="hero-content">


                {/* Existing Glass Cards */}
                <motion.div
                    className="glass-card card-1"
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                    <div className="card-icon"><Palette size={32} /></div>
                    <div className="card-info">
                        <span className="card-title">UI/UX Design</span>
                        <span className="card-subtitle">Pixel Perfect</span>
                    </div>
                </motion.div>

                <motion.div
                    className="glass-card card-2"
                    animate={{ y: [0, 25, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                    <div className="card-icon"><Code size={32} /></div>
                    <div className="card-info">
                        <span className="card-title">Frontend Dev</span>
                        <span className="card-subtitle">Clean Code</span>
                    </div>
                </motion.div>

                {/* Big Text Composition */}
                <div className="big-text-wrapper">
                    <motion.h1
                        className="big-text"
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        {heroData.titleLines[0]}<br />
                        {heroData.titleLines[1]}<br />
                        {heroData.titleLines[2]}
                    </motion.h1>

                    {/* Sticker: Retro Window */}
                    <motion.div
                        className="sticker sticker-window glass-morphism"
                        initial={{ opacity: 0, rotate: -20, x: -50 }}
                        animate={{ opacity: 1, rotate: -10, x: 0 }}
                        transition={{ delay: 0.5 }}
                        drag
                        dragConstraints={{ left: 0, right: 300, top: 0, bottom: 300 }}
                    >
                        <div className="window-header">
                            <span>ERROR</span>
                            <span>x</span>
                        </div>
                        <div className="window-body">
                            <p>{heroData.stickers.errorTitle}</p>
                            <div className="window-actions">
                                <button className="win-btn">{heroData.stickers.errorBtn}</button>
                                <button className="win-btn outline">{heroData.stickers.errorRetry}</button>
                            </div>
                        </div>
                    </motion.div>

                    {/* Sticker: Hex Tag */}
                    <motion.div
                        className="sticker sticker-hex"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1, rotate: -15 }}
                        transition={{ delay: 0.8, type: "spring" }}
                        whileHover={{ scale: 1.1, rotate: 0 }}
                    >
                        {heroData.stickers.hex}
                    </motion.div>

                    {/* Sticker: Globe */}
                    <motion.div
                        className="sticker sticker-globe"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                        <Globe size={64} strokeWidth={1} />
                    </motion.div>

                    {/* Sticker: Heart */}
                    <motion.div
                        className="sticker sticker-heart"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    >
                        <Heart size={48} fill="white" stroke="none" />
                    </motion.div>

                    {/* Sticker: Switch */}
                    <div className="sticker sticker-switch">
                        <ToggleRight size={56} color="#CCFF00" />
                    </div>
                </div>


                {/* Existing Stickers/Accents */}
                <motion.div
                    className="sticker-circle"
                    whileHover={{ scale: 1.1, rotate: 15 }}
                >
                    <svg viewBox="0 0 100 100" className="text-circle">
                        <path id="curve" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
                        <text width="500">
                            <textPath xlinkHref="#curve" fill="black" fontWeight="bold">
                                SCROLL TO EXPLORE • SCROLL TO EXPLORE •
                            </textPath>
                        </text>
                    </svg>
                    <div className="arrow-center">
                        <ArrowRight size={24} color="black" />
                    </div>
                </motion.div>

                {/* Arrow Graphics (SVG) */}
                <svg className="doodle-arrow arrow-1" viewBox="0 0 100 100" fill="none" stroke="var(--color-accent)" strokeWidth="3" strokeLinecap="round">
                    <path d="M10 90 Q 50 10 90 50" />
                    <path d="M80 40 L90 50 L80 60" />
                </svg>

            </div>

            {/* Bottom Section Transition */}
            <div className="hero-bottom">
                <div className="info-card">
                    <h3>{heroData.status.label}</h3>
                    <div className="pill">
                        <div className="dot"></div> {heroData.status.value}
                    </div>
                </div>

                <Tools />
            </div>
        </section>
    );
};

export default Hero;
