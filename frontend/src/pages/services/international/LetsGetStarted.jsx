import React from 'react';
import '../domestic/LetsGetStarted.css'; 
import { motion } from 'framer-motion';

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
            <p>Trust people and they will be true to you;</p>
            <p>Treat them greatly, and they will show themselves great.</p>
            <p>Keep your face to the sunshine and you cannot see the shadows.</p>
            <p>In any moment of decision, the best thing you can do is the right thing, the next best thing is the wrong thing, and the worst thing you can do is nothing.</p>
            <p>Whether you think you can, or you think you can’t – you’re right.</p>
            <p>We help you significantly increase the amount of quality applications you get to your jobs.</p>
            <p>Not only this, a minimum of 3 specialized job openings within 3 months matching your profile and lots more..</p>
            <div className="benefits-section">
            <h2>THE BENEFITS OF PAID REGISTRATION</h2>
            <ul>
                <li>Upload your resume, if not done already</li>
                <li>Provide Life Long Notifications keep your resume and profile updated, always</li>
                <li>Undisclosed Vacancies Information</li>
                <li>Provide Free Interview Tips & Increase The Selection Criteria Chance’s</li>
                <li>Free Personality Development Tips</li>
                <li>Create customized alerts for the type of jobs you want to apply for</li>
                <li>All The Time Carrier Counselor Available For Your Support & Assistance</li>
            </ul>
            </div>
        </motion.div>
    );
};

export default LetsGetStarted;