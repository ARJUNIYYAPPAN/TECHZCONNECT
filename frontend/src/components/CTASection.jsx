import React from "react";
import { NavLink } from "react-router-dom";
import "./CTASection.css";
import { motion } from "framer-motion";

const CTASection = () => {
return (
    <div className="cta-sectionD">
        <motion.div
            className="cta-card candidate"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h4>Candidates</h4>
            <h2>Looking for a new role?</h2>
            <NavLink to="/jobs-listing" className="cta-btn">See all jobs</NavLink>
        </motion.div>
        <motion.div
            className="cta-card employer"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
        >
            <h4>Employers</h4>
            <h2>Looking for new talent?</h2>
            <NavLink to="/our-approach" className="cta-btn">See our approach</NavLink>
        </motion.div>
    </div>
);
};

export default CTASection;



