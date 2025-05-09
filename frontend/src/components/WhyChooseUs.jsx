import React from 'react';
import { motion } from 'framer-motion';
import './WhyChooseUs.css';

const reasons = [
  {
    icon: "💼",
    title: "Industry Expertise",
    description: "Years of experience in HR consulting and global recruitment across multiple industries."
  },
  {
    icon: "🌍",
    title: "Global Reach",
    description: "We connect businesses with top talent from the US, UK, Canada, Australia, and beyond."
  },
  {
    icon: "⚙️",
    title: "Customized Solutions",
    description: "Tailored recruitment and training services designed to fit your specific business goals."
  },
  {
    icon: "🤝",
    title: "Client-Centric Approach",
    description: "We partner closely with you to ensure transparency, quality, and long-term success."
  },
];

const WhyChooseUs = () => {
  return (
    <section className="why-choose-section">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Why Choose Us?
      </motion.h2>

      <div className="why-grid">
        {reasons.map((reason, index) => (
          <motion.div 
            className="why-card"
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="why-icon">{reason.icon}</div>
            <h3>{reason.title}</h3>
            <p>{reason.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
