import React from 'react';
import './HireUs.css';
import { Link } from 'react-router-dom';
import hireUsImage from '../assets/hireus.jpg';
import { motion } from 'framer-motion';

const HireUs = () => {
  return (
    <section className="hire-us">
      <div className="hire-us-content">
        <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        >
          Start Your Talent Search Here
        </motion.h1>
        <p>
          As a top recruitment agency in Chennai, we offer comprehensive staffing services 
          to help you find the people you need to achieve your business goals. Our thorough 
          candidate screening process includes skills assessments, background checks, 
          job reference checks, drug testing, and safety orientations.
        </p>

        <ul className="hire-us-list">
          <li>✅ Understand your job requirements and culture</li>
          <li>✅ Help create a job description that grabs attention</li>
          <li>✅ Source qualified candidates using proven methods</li>
          <li>✅ Screen, test, verify references, and conduct background checks</li>
          <li>✅ Navigate interviews and offer processes smoothly</li>
        </ul>

        <Link to="/contact" className="hire-us-button">
          Contact Us
        </Link>
      </div>

      <motion.div
       className="hire-us-image"
       initial={{ opacity: 0, y: 50, scale: 0.8 }}
       whileInView={{ opacity: 1, y: 0, scale: 1 }}
       transition={{ duration: 0.8 }}
       viewport={{ once: true }}
      >
        <img src={hireUsImage} alt="Hire Us" />
      </motion.div>
    </section>
  );
};

export default HireUs;

