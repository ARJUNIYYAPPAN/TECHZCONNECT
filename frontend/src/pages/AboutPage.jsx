// import React from "react";
// import "./AboutPage.css";

// const AboutPage = () => {
//   return (
//     <div className="about-container">
//       {/* Hero Section */}
//       <section className="about-hero">
//         <div className="hero-content">
//           <h1>Welcome to Techz Aspire</h1>
//           <p>Transforming businesses with innovative HR solutions</p>
//         </div>
//       </section>

//       {/* About Content */}
//       <section className="about-content">
//         <h2>Who We Are</h2>
//         <p>
//           Techz Aspire empowers organizations to achieve excellence through **innovative HR solutions**.  
//           We specialize in transforming businesses by optimizing **workforce strategies**, enhancing  
//           **employee engagement**, and fostering **organizational growth**.  
//         </p>

//         <h2>Our Mission</h2>
//         <p>
//           At Techz Aspire, we redefine the future of human resources by offering **talent acquisition**,  
//           employee development, compliance management, and HR technology solutions.  
//           We provide **customized HR strategies** that drive business success.
//         </p>

//         <h2>Why Choose Us?</h2>
//         <ul>
//           <li>✔ **Tailored HR strategies** for business success</li>
//           <li>✔ **Innovative workforce optimization** methods</li>
//           <li>✔ **Technology-driven HR solutions** for modern businesses</li>
//           <li>✔ **Proven track record** across multiple industries</li>
//         </ul>

//         <h2>Our Leadership Team</h2>
//         <div className="team">
//           <div className="team-member">
//             <img src="/techzin.ico" alt="John Doe" />
//             <h3>John Doe</h3>
//             <p>Founder & CEO</p>
//           </div>
//           <div className="team-member">
//             <img src="/techzin.ico" alt="Jane Smith" />
//             <h3>Jane Smith</h3>
//             <p>Head of HR</p>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default AboutPage;

import React from "react";
import "./AboutPage.css";
import { motion } from "framer-motion";

const About = () => {
  return (
    <><motion.div
      className="about-container"
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <h1>About Us</h1>
      <p>We are a leading HR consultancy, providing top-tier recruitment solutions.</p>
      <div className="about-cards">
        <div className="card">
          <h3>🚀 Our Mission</h3>
          <p>Connecting top talent with leading companies worldwide.</p>
        </div>
        <div className="card">
          <h3>🌍 Our Vision</h3>
          <p>Transforming recruitment through innovation and technology.</p>
        </div>
        <div className="card">
          <h3>🏆 Our Achievements</h3>
          <p>Awarded as the best HR consultancy in 2025.</p>
        </div>
      </div>
    </motion.div><motion.hr
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        style={{ transformOrigin: "left", height: "3px", background: "#f7c948", border: "none" }} /></>
    
  );
};

export default About;
