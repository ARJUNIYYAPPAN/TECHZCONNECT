// import React from 'react';
// import { motion } from 'framer-motion';
// import './Immigration.css'; 

// const Immigration = () => {
//     return (

//         <div className="immigration-container">
//       {/* Hero Section */}
//       <section className="hero-section">
//         <h1>Immigration Assessment</h1>
//         <p>Your gateway to global job opportunities. Let’s guide your next move.</p>
//       </section>

//       {/* What We Assess */}
//       <section className="assessment-section">
//         <h2>What We Assess</h2>
//         <ul>
//           <li>Eligibility Based on Country</li>
//           <li>Work Experience & Skills</li>
//           <li>Educational Qualifications</li>
//           <li>Language Proficiency</li>
//           <li>Visa Options & Pathways</li>
//         </ul>
//       </section>

//       {/* Process Steps */}
//       <section className="process-section">
//         <h2>Step-by-Step Process</h2>
//         <div className="steps">
//           <div className="step">1. Submit Your Profile</div>
//           <div className="step">2. Document Verification</div>
//           <div className="step">3. Expert Consultation</div>
//           <div className="step">4. Country Match Report</div>
//           <div className="step">5. Application Guidance</div>
//         </div>
//       </section>

//       {/* Testimonials */}
//       <section className="testimonials">
//         <h2>Client Success Stories</h2>
//         <p>“Thanks to Techzinfinity, I landed a dream role in Canada within 3 months!”</p>
//         <p>- Praveen S, Software Engineer</p>
//       </section>

//       {/* Call To Action */}
//       <motion.section 
//         className="cta-section"
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         <h3>Ready to Begin?</h3>
//         <button className="cta-button">Get Your Free Assessment</button>
//       </motion.section>
//     </div>
       
//     );
// };

// export default Immigration;

import React from "react";
import "./Immigration.css";
import { motion } from "framer-motion";

const ImmigrationAssessment = () => {
  return (
    <div className="immigration-container">
      {/* Hero Section */}
      <section className="hero-section">
        <h1>Immigration Assessment</h1>
        <p>Helping professionals and job seekers achieve their international career goals.</p>
      </section>

      {/* What We Assess */}
      <section className="assessment-section">
        <h2>What We Assess</h2>
        <ul className="assessment-list">
          <li>Education Qualification</li>
          <li>Work Experience</li>
          <li>Language Proficiency</li>
          <li>Visa Eligibility</li>
          <li>Criminal & Medical Background</li>
        </ul>
      </section>

      {/* Step-by-Step Process */}
      <section className="process-section">
        <h2>Step-by-Step Process</h2>
        <ol className="assessment-list">
          <li>Submit Your Profile</li>
          <li>Eligibility Check</li>
          <li>Document Verification</li>
          <li>Consultation Session</li>
          <li>Visa Filing & Follow-up</li>
        </ol>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <h2>What Our Clients Say</h2>
        <blockquote>
          “Techzinfinity helped me go from dream to reality. The process was smooth and professional.” — Ramesh P.
        </blockquote>
        <blockquote>
          “The assessment saved me time and gave me confidence to proceed with my application.” — Priya M.
        </blockquote>
      </section>

      {/* CTA */}
      <motion.section 
      className="cta-section"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      >
        <h2>Need Help with Immigration?</h2>
        <p>Connect with our experts today and begin your international journey.</p>
        <a href="/contact" className="cta-btn">Get in Touch</a>
      </motion.section>
    </div>
  );
};

export default ImmigrationAssessment;
