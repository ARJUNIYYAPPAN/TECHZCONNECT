import React from 'react';
import './ClientsAndPartners.css';
import { motion } from 'framer-motion';

const partners = [
  { logo: '/partners/logo1.png', name: 'Company A' },
  { logo: '/partners/logo2.png', name: 'Company B' },
  { logo: '/partners/logo3.png', name: 'Company C' },
  { logo: '/partners/logo4.png', name: 'Company D' },
  { logo: '/partners/logo5.png', name: 'Company E' },
  { logo: '/partners/logo6.png', name: 'Company F' },
];

const ClientsAndPartners = () => {
  return (
    <section className="clients-section">
      <motion.h2 
        className="clients-title"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Our Clients & Partners
      </motion.h2>

      <div className="clients-logos">
        {partners.map((partner, index) => (
          <motion.div 
            key={index}
            className="logo-wrapper"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <img src={partner.logo} alt={partner.name} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ClientsAndPartners;
