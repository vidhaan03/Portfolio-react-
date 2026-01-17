import React from 'react';
import { motion } from 'framer-motion';
import { Database, FileJson, Server, Code, Globe, Layers, Cpu, Box, Terminal } from 'lucide-react';
import './Stack.css';

const stackItems = [
    { name: "React", icon: <Code size={40} />, category: "Frontend", color: "#61DAFB" },
    { name: "Node.js", icon: <Server size={40} />, category: "Backend", color: "#339933" },
    { name: "MongoDB", icon: <Database size={40} />, category: "Database", color: "#47A248" },
    { name: "Python", icon: <Terminal size={40} />, category: "Language", color: "#3776AB" },
    { name: "Figma", icon: <Layers size={40} />, category: "Design", color: "#F24E1E" },
    { name: "Tailwind", icon: <Box size={40} />, category: "Style", color: "#38B2AC" },
    { name: "Next.js", icon: <Globe size={40} />, category: "Framework", color: "white" },
    { name: "Three.js", icon: <Cpu size={40} />, category: "3D", color: "white" }
];

const Stack = () => {
    return (
        <section className="stack-section container" id="stack">
            <div className="section-header">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="section-title"
                >
                    MY <span className="text-accent">STACK</span>
                </motion.h2>
            </div>

            <div className="stack-marquee">
                <div className="marquee-content">
                    {[...stackItems, ...stackItems].map((item, index) => (
                        <div key={index} className="stack-item-minimal">
                            <div className="icon-box" style={{ borderColor: item.color }}>
                                <div style={{ color: item.color }}>{item.icon}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stack;
