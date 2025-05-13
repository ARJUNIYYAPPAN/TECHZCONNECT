import React from 'react';
import './OurServices.css';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Permanent Staffing',
    desc: 'End-to-end talent acquisition for long-term roles.',
    link: '/services/permanent-staffing'
  },
  {
    title: 'Contract Staffing',
    desc: 'On-demand workforce with flexibility and scalability.',
    link: '/services/contract-staffing'
  },
  {
    title: 'Global IT Recruitment',
    desc: 'Specialized hiring for tech sectors across regions.',
    link: '/services/global-it-recruitment'
  },
  {
    title: 'Leadership Hiring',
    desc: 'Executive search for strategic and leadership positions.',
    link: '/services/leadership-hiring'
  },
  {
    title: 'Campus Recruitment',
    desc: 'Engage fresh talent from top-tier institutions.',
    link: '/services/campus-recruitment'
  },
  {
    title: 'HR Consulting',
    desc: 'Comprehensive HR solutions including compliance, training & more.',
    link: '/services/hr-consulting'
  }
];

const OurServices = () => {
  return (
    <section className="services-section">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        What We Offer
      </motion.h2>

      <div className="services-grid">
        {services.map((service, index) => (
          <motion.a 
            href={service.link}
            className="service-card"
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
            <span className="learn-more">Learn more →</span>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default OurServices;
