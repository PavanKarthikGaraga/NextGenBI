'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-background">
        <div className="hero-gradient"></div>
        <div className="hero-pattern"></div>
      </div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge">
              <span className="badge-icon">⚡</span>
              <span className="badge-text">100 Days to Mastery</span>
            </div>
            <motion.h1 
              className="hero-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Master <span className="highlight">Power BI</span> & Transform Your Career
            </motion.h1>
            <motion.h2 
              className="hero-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Comprehensive Training in Power BI & SQL
            </motion.h2>
            <motion.div 
              className="hero-stats"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="stat-item">
                <span className="stat-number">500+</span>
                <span className="stat-label">Graduates</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">95%</span>
                <span className="stat-label">Placement Rate</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Projects</span>
              </div>
            </motion.div>
            <motion.div 
              className="hero-features"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="feature-item">
                <span className="feature-icon">✓</span>
                <span>Advanced Training</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">✓</span>
                <span>Realtime Projects</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">✓</span>
                <span>Interview Preparation</span>
              </div>
            </motion.div>
            <motion.div 
              className="hero-cta"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <button className="button primary">
                Get Started Now
                <svg className="button-arrow" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="button secondary">
                Download Syllabus
              </button>
            </motion.div>
          </div>
          <motion.div 
            className="hero-image"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="image-container">
              <Image
                src="/powerbi-dashboard.svg"
                alt="Power BI Dashboard"
                fill
                className="image"
                priority
              />
              <div className="image-overlay"></div>
            </div>
            <motion.div 
              className="floating-card card-1"
              animate={{ 
                y: [0, -10, 0],
                rotate: [-1, 1, -1]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="card-icon">📊</div>
              <div className="card-text">
                <span className="card-title">Data Analysis</span>
                <span className="card-subtitle">Master visualization</span>
              </div>
            </motion.div>
            <motion.div 
              className="floating-card card-2"
              animate={{ 
                y: [0, -10, 0],
                rotate: [1, -1, 1]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            >
              <div className="card-icon">💼</div>
              <div className="card-text">
                <span className="card-title">Job Ready</span>
                <span className="card-subtitle">Industry skills</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 