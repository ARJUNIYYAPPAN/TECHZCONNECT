import React from 'react';
import './LetsGetStarted.css'; // Assuming you have a CSS file for styling
import { motion } from 'framer-motion'; // Importing framer-motion for animations

const LetsGetStarted = () => {
    return (
        <motion.div 
        className="lets-get-started-container"
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        >
            <h1>Lets get started!!</h1>
            <p>Welcome to the Domestic Services page!</p>
            <p>We are here to assist you with all your domestic needs.</p>
            <p>Explore our services and let us help you find the best solutions.</p>
            <div className="benefits-section">
                <h2>The Benefits of Paid Registration</h2>
                <ul>
                    <li>Upload your resume, if not done already</li>
                    <li>Provide Life Long Notifications to keep your resume and profile updated, always</li>
                    <li>Undisclosed Vacancies Information</li>
                    <li>Provide Free Interview Tips & Increase The Selection Criteria Chances</li>
                    <li>Free Personality Development Tips</li>
                    <li>Create customized alerts for the type of jobs you want to apply for</li>
                    <li>All The Time Career Counselor Available For Your Support & Assistance</li>
                </ul>
            </div>
        </motion.div>
    );
};

export default LetsGetStarted;