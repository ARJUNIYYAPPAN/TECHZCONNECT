import React from 'react';
import { motion } from 'framer-motion';
import './ClientTestimonial.css';

const testimonials = [
  {
    name: "Priya R.",
    role: "HR Manager, FinTech Co.",
    quote: "Techzconnect made hiring seamless and fast. Their team truly understands our business needs.",
  },
  {
    name: "James M.",
    role: "CEO, StartUp Hub",
    quote: "They brought us great candidates and handled everything professionally from start to finish.",
  },
  {
    name: "S. Kumar",
    role: "Talent Lead, HealthCorp",
    quote: "Reliable, fast, and with top-notch communication—Techzconnect is now our go-to hiring partner.",
  },
];

const ClientTestimonials = () => {
  return (
    <section className="testimonials-section">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        What Our Clients Say
      </motion.h2>

      <div className="testimonial-cards">
        {testimonials.map((item, index) => (
          <motion.div 
            className="testimonial-card"
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <p className="quote">“{item.quote}”</p>
            <h4>{item.name}</h4>
            <span>{item.role}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ClientTestimonials;
