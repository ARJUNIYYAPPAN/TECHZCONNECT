import React from "react";
import { motion } from "framer-motion";
import "../styles/HeroSection.css";

function HeroSection() {
  return (
    <motion.section 
      className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <div className="hero-overlay"></div>
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Techzconnect HR Consultant
      </motion.h1>
      <motion.p
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        Empowering Businesses with Innovative HR Solutions
      </motion.p>

      <div className="hero-buttons">
      <motion.button 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
       <a href="/hire-us" className="hire-btn">Hire Talent</a>
      </motion.button>

      <motion.button 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
       <a href="/jobs-listing" className="gethired-btn">Get Hired</a>
      </motion.button>
      </div>
    </motion.section>
  );
}

export default HeroSection;
