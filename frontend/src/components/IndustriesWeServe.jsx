import React from 'react';
import { motion } from 'framer-motion';
import './IndustriesWeServe.css';

const industries = [
  { name: 'Information Technology', icon: '💻' },
  { name: 'Healthcare & Pharma', icon: '🩺' },
  { name: 'Retail & E-Commerce', icon: '🛍️' },
  { name: 'Manufacturing & Engineering', icon: '🏭' },
  { name: 'Banking & Finance', icon: '💼' },
  { name: 'Telecom & Media', icon: '📡' },
  { name: 'Education & EdTech', icon: '🎓' },
  { name: 'Logistics & Supply Chain', icon: '🚚' },
];

const IndustriesWeServe = () => {
  return (
    <section className="industries-section">
      <motion.h2 
        className="industries-title"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Industries We Serve
      </motion.h2>

      <div className="industries-grid">
        {industries.map((industry, index) => (
          <motion.div 
            className="industry-card"
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="icon">{industry.icon}</div>
            <h3>{industry.name}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default IndustriesWeServe;
