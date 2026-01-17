import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import './Career.css';

import { careerData } from '../content';

const Career = () => {
    return (
        <section className="career-section container" id="work">
            <div className="section-header">
                <motion.h2
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="section-title"
                >
                    CAREER <span className="text-accent">PATH</span>
                </motion.h2>
            </div>

            <div className="timeline">
                {/* Central dashed line */}
                <div className="timeline-line"></div>

                {careerData.map((item, index) => (
                    <motion.div
                        key={index}
                        className={`timeline-item ${item.align}`}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                        <div className="timeline-dot"></div>
                        <div className="timeline-content glass-card-flat">
                            <h3>{item.role} <span className="text-highlight">: {item.company}</span></h3>
                            <p className="timeline-period">[{item.period}]</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Career;
