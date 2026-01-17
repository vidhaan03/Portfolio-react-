import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { worksData } from '../content';
import './Works.css';


const Works = () => {
    return (
        <section className="works-section" id="work">
            <div className="container">
                <motion.h2
                    className="section-title works-title"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    SELECTED <span className="text-outline">WORKS</span>
                </motion.h2>

                <div className="works-grid">
                    {worksData.map((project, index) => (
                        <motion.div
                            key={project.id}
                            className="work-item"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="work-image-placeholder" style={{ background: `linear-gradient(45deg, ${project.color}, #111)` }}>
                                <div className="overlay">
                                    <ArrowUpRight size={48} color="white" />
                                </div>
                            </div>
                            <div className="work-info">
                                <h3>{project.title}</h3>
                                <p>{project.category}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Works;
