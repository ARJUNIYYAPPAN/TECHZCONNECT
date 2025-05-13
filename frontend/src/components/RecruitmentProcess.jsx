import React from 'react';
import './RecruitmentProcess.css';
import { motion } from 'framer-motion';
import { FaSearch, FaUsers, FaFileAlt, FaUserCheck, FaHandshake } from 'react-icons/fa';

const steps = [
  {
    icon: <FaSearch />,
    title: "Understanding Requirements",
    desc: "We collaborate closely with clients to understand job roles, culture, and expectations."
  },
  {
    icon: <FaUsers />,
    title: "Talent Sourcing",
    desc: "We identify potential candidates from multiple sources including our talent pool and job portals."
  },
  {
    icon: <FaFileAlt />,
    title: "Screening & Evaluation",
    desc: "Profiles are screened based on technical skills, attitude, and cultural fit."
  },
  {
    icon: <FaUserCheck />,
    title: "Client Interviews",
    desc: "Shortlisted candidates are scheduled for interviews and feedback is captured."
  },
  {
    icon: <FaHandshake />,
    title: "Offer & Onboarding",
    desc: "We coordinate joining, ensure documentation, and provide post-placement support."
  }
];

const RecruitmentProcess = () => {
  return (
    <section className="recruitment-process-section">
      <h2 className="section-title">
        <span className="highlight">Our Recruitment Process</span> 
      </h2>
      <div className="steps-container">
        {steps.map((step, index) => (
          <motion.div
            className="step-card"
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="icon">{step.icon}</div>
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default RecruitmentProcess;
