import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './HRSolutions.css';

// const cardVariants = {
//   hidden: { opacity: 0, y: 50 },
//   visible: (i) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       delay: i * 0.2,
//       duration: 0.6,
//       ease: 'easeOut',
//     },
//   }),
// };

// const HRSolutions = () => {
//   const cards = [
//     {
//       title: 'Talent Acquisition',
//       description:
//         'We help companies find top-tier talent through end-to-end recruitment strategies, employer branding, and industry-specific sourcing methods.',
//       icon: '👥',
//       link: '/talent-acquisition',
//     },
//     {
//       title: 'Training & Development',
//       description:
//         'Our tailored employee development programs enhance workforce skills through corporate training, leadership development, and soft skill workshops.',
//       icon: '🎓',
//       link: '/employee-trainee',
//     },
//     {
//       title: 'Global IT Recruitment',
//       description:
//         'Connecting international businesses with skilled tech professionals through global hiring, visa assistance, and remote onboarding support.',
//       icon: '🌐',
//       link: '/global-it-recruitment',
//     },
//   ];

//   return (
//     <section className="hr-solutions-wrapper">
//       <h2 className="solutions-title">OUR HR SOLUTIONS</h2>
//       <div className="solutions-grid">
//         {cards.map((card, index) => (
//           <motion.div
//             className="solution-card"
//             key={index}
//             custom={index}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={cardVariants}
//           >
//             <Link to={card.link} className="solution-card-link">
//               <div className="icon">{card.icon}</div>
//               <h3>{card.title}</h3>
//               <p>{card.description}</p>
//               <span className="contact-link">READ MORE</span>
//             </Link>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: 'easeOut',
      },
    }),
  };


const cards = [
  {
    title: "Recruitment & Talent Acquisition",
    description: "We provide end-to-end recruitment services, matching skilled professionals to the right job roles across various industries.",
    link: "/talent-acquisition",
    icon: "👥"
  },
  {
    title: "Employee Training & Development",
    description: "Upskill your workforce with tailored training programs focused on leadership, communication, and technical excellence.",
    link: "/employee-trainee",
    icon: "📚"
  },
  {
    title: "Global IT Recruitment",
    description: "Specialized hiring services for top IT talent from the US, UK, Canada, and Australia with visa and relocation support.",
    link: "/global-it-recruitment",
    icon: "🌐"
  }
];

const HRSolutions = () => {
  return (
    <section className="solutions-section">
      <motion.h2 
        className="solutions-title"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Our HR Solutions
      </motion.h2>

      <div className="solutions-grid">
        {cards.map((item, index) => (
          <motion.div 
            className="solution-card"
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            variants={cardVariants}
          >
            <Link to={item.link} className="card-link">
              <div className="solution-icon">{item.icon}</div>
              <h3 className="solution-title">{item.title}</h3>
              <p className="solution-desc">{item.description}</p>
              <span className="solution-cta">Learn More →</span>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HRSolutions;
