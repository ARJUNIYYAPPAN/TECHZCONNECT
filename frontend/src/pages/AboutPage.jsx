import React from 'react';
import './AboutPage.css';
import { motion } from 'framer-motion';

const AboutUs = () => {
  return (
    <div className="about-container">
      <section className="about-hero">
        <motion.h1 initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1.05 }}>
          Who We Are
        </motion.h1>
        <p>Empowering businesses and individuals through innovative recruitment solutions.</p>
      </section>

      <section className="about-section">
        <motion.div className="about-card" whileHover={{ scale: 1.02 }}>
          <h2>🚀 Our Mission</h2>
          <p>
            To connect top-tier talent with leading organizations by delivering efficient, ethical, and intelligent recruitment strategies.
          </p>
        </motion.div>

        <motion.div className="about-card" whileHover={{ scale: 1.02 }}>
          <h2>🌍 Our Vision</h2>
          <p>
            To be a trusted global HR partner, reshaping the future of work by matching purpose-driven people with the right opportunities.
          </p>
        </motion.div>

        <motion.div className="about-card" whileHover={{ scale: 1.02 }} transition={{ delay: 0.1 }}>
          <h2>🎯 Our Values</h2>
          <ul>
            <li>Integrity in every connection</li>
            <li>Innovation in hiring strategies</li>
            <li>Commitment to candidate success</li>
            <li>Partnership-driven growth</li>
          </ul>
        </motion.div>
      </section>

      

      <section className="why-techzconnect">
        
        <motion.h2 initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1.05 }}>
          Why Choose Techzconnect?
        </motion.h2>
        <p>
          We blend technology with human insight to deliver seamless recruitment experiences. Whether you're a startup or a global enterprise,
          Techzconnect is your strategic talent partner — from sourcing to onboarding.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;

