import React from 'react';
import './QuickStats.css';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';

const stats = [
  { label: 'Years of Excellence', value: 12, suffix: '+' },
  { label: 'Clients Served', value: 500, suffix: '+' },
  { label: 'Industries Covered', value: 20, suffix: '+' },
  { label: 'Cities Presence', value: 30, suffix: '+' },
  { label: 'Candidates Placed', value: 100000, suffix: '+' },
];

const QuickStats = () => {
  return (
    <section className="quick-stats-section">
      <motion.h2 
        className="quick-stats-title"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Techzconnect in Numbers
      </motion.h2>

      <div className="stats-grid">
        {stats.map((stat, index) => (
          <motion.div 
            key={index}
            className="stat-card"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="stat-value">
              <CountUp 
                end={stat.value} 
                duration={2} 
                separator="," 
                suffix={stat.suffix} 
                enableScrollSpy
                scrollSpyDelay={100}
              />
            </div>
            <div className="stat-label">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default QuickStats;
