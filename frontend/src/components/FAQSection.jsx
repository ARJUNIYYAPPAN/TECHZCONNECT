import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './FAQSection.css';

const faqs = [
  {
    question: "What industries do you specialize in?",
    answer: "We specialize in IT, Healthcare, Manufacturing, BFSI, Education, and more.",
  },
  {
    question: "Do you provide international recruitment?",
    answer: "Yes, we connect talent globally, especially in the US, UK, Canada, and Australia.",
  },
  {
    question: "How fast can you fill a role?",
    answer: "Depending on the position, we typically fill roles within 7–14 days.",
  },
  {
    question: "Do you offer remote hiring solutions?",
    answer: "Absolutely. We assist with both remote and hybrid workforce recruitment.",
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className="faq-section">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${openIndex === index ? 'open' : ''}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              {faq.question}
              <span className="faq-icon">{openIndex === index ? '−' : '+'}</span>
            </div>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  className="faq-answer"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p>{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
