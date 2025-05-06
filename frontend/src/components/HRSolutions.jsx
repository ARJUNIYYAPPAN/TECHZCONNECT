
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './HRSolutions.css';

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

const HRSolutions = () => {
  const cards = [
    {
      title: 'Talent Acquisition',
      description:
        'We help companies find top-tier talent through end-to-end recruitment strategies, employer branding, and industry-specific sourcing methods.',
      icon: '👥',
      link: '/talent-acquisition',
    },
    {
      title: 'Training & Development',
      description:
        'Our tailored employee development programs enhance workforce skills through corporate training, leadership development, and soft skill workshops.',
      icon: '🎓',
      link: '/employee-trainee',
    },
    {
      title: 'Global IT Recruitment',
      description:
        'Connecting international businesses with skilled tech professionals through global hiring, visa assistance, and remote onboarding support.',
      icon: '🌐',
      link: '/global-it-recruitment',
    },
  ];

  return (
    <section className="hr-solutions-wrapper">
      <h2 className="solutions-title">OUR HR SOLUTIONS</h2>
      <div className="solutions-grid">
        {cards.map((card, index) => (
          <motion.div
            className="solution-card"
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
          >
            <Link to={card.link} className="solution-card-link">
              <div className="icon">{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              <span className="contact-link">READ MORE</span>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HRSolutions;
