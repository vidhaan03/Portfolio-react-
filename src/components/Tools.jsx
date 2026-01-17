import React from 'react';
import './Tools.css';

const Tools = () => {
    return (
        <div className="tools-container">
            <span className="tools-label">Tools</span>
            <div className="tool-icons">
                {/* Figma Logo (Simplified) */}
                <div className="tool-icon figma" title="Figma">
                    <svg width="24" height="36" viewBox="0 0 24 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 36C2.68629 36 0 33.3137 0 30C0 26.6863 2.68629 24 6 24H12V30C12 33.3137 9.31371 36 6 36Z" fill="#0ACF83" />
                        <path d="M0 18C0 14.6863 2.68629 12 6 12H12V24H6C2.68629 24 0 21.3137 0 18Z" fill="#A259FF" />
                        <path d="M0 6C0 2.68629 2.68629 0 6 0H12V12H6C2.68629 12 0 9.31371 0 6Z" fill="#F24E1E" />
                        <path d="M12 0H18C21.3137 0 24 2.68629 24 6C24 9.31371 21.3137 12 18 12H12V0Z" fill="#FF7262" />
                        <g>
                            <path d="M24 18C24 21.3137 21.3137 24 18 24C14.6863 24 12 21.3137 12 18C12 14.6863 14.6863 12 18 12C21.3137 12 24 14.6863 24 18Z" fill="#1ABCFE" />
                        </g>
                    </svg>
                </div>

                {/* Python */}
                <div className="tool-icon python" title="Python">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.8 0C7.9 0 6.6 3.4 6.6 3.4L6.6 6.8L14.2 6.8L14.2 8.4L3.4 8.4C3.4 8.4 0 8.2 0 16.2C0 24 3.2 24.8 3.2 24.8L6.4 24.8L6.4 21.4C6.4 17.4 9 17.4 9 17.4L18.6 17.4C18.6 17.4 21 16.8 21 13.6L21 3.4C21 3.4 21.2 0 15.8 0ZM11.2 2.4C11.8 2.4 12.2 2.8 12.2 3.4C12.2 4 11.8 4.4 11.2 4.4C10.6 4.4 10.2 4 10.2 3.4C10.2 2.8 10.6 2.4 11.2 2.4ZM28.8 7.2L25.6 7.2L25.6 10.6C25.6 14.6 23 14.6 23 14.6L13.4 14.6C13.4 14.6 11 15.2 11 18.4L11 28.6C11 28.6 10.8 32 16.2 32C24.1 32 25.4 28.6 25.4 28.6L25.4 25.2L17.8 25.2L17.8 23.6L28.6 23.6C28.6 23.6 32 23.8 32 15.8C32 8 28.8 7.2 28.8 7.2ZM20.8 29.6C20.2 29.6 19.8 29.2 19.8 28.6C19.8 28 20.2 27.6 20.8 27.6C21.4 27.6 21.8 28 21.8 28.6C21.8 29.2 21.4 29.6 20.8 29.6Z" fill="url(#paint0_linear_python)" />
                        <defs>
                            <linearGradient id="paint0_linear_python" x1="4.5" y1="4.5" x2="27.5" y2="27.5" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#3776AB" />
                                <stop offset="1" stopColor="#FFD43B" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>

                {/* React */}
                <div className="tool-icon react" title="React">
                    <svg width="32" height="32" viewBox="-11.5 -10.23174 23 20.46348">
                        <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
                        <g stroke="#61DAFB" strokeWidth="1" fill="none">
                            <ellipse rx="11" ry="4.2" />
                            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
                        </g>
                    </svg>
                </div>

                {/* Node.js */}
                <div className="tool-icon node" title="Node.js">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <path d="M16 0L29.8564 8V24L16 32L2.14359 24V8L16 0Z" fill="#339933" />
                        <path d="M16 4L26 9.5V22.5L16 28L6 22.5V9.5L16 4Z" fill="#339933" opacity="0.8" />
                        <text x="50%" y="60%" dominantBaseline="middle" textAnchor="middle" fill="white" fontWeight="bold" fontSize="10">JS</text>
                    </svg>
                </div>

                {/* MongoDB */}
                <div className="tool-icon mongo" title="MongoDB">
                    <svg width="16" height="32" viewBox="0 0 16 32" fill="none">
                        <path d="M8 0C8 0 16 12 16 22C16 27.5228 12.4183 32 8 32C3.58172 32 0 27.5228 0 22C0 12 8 0 8 0Z" fill="#47A248" />
                        <path d="M8 2C8 2 13 13 13 22C13 26 10.5 30 8 30C5.5 30 3 26 3 22C3 13 8 2 8 2Z" fill="#47A248" stroke="#3FA037" />
                    </svg>
                </div>

                {/* Adobe XD Logo (Simplified) */}
                <div className="tool-icon xd" title="Adobe XD">
                    <span className="xd-text">Xd</span>
                </div>

                {/* Sparkle/Gemini */}
                <div className="tool-icon sparkle" title="AI Tools">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 0L14.595 9.405L24 12L14.595 14.595L12 24L9.405 14.595L0 12L9.405 9.405L12 0Z" fill="#4B8BF5" />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default Tools;
