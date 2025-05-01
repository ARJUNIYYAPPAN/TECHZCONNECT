import React from "react";
import { motion } from "framer-motion";
import "../styles/Carousel.css";

const testimonials = [
  {
    quote: "TechzAspire helped us find the perfect candidates in no time!",
    author: "Prawin, CEO of XYZ Corp"
  },
  {
    quote: "Their career coaching sessions boosted my confidence for interviews.",
    author: "Arjun, Software Engineer"
  },
  {
    quote: "The AI-powered recruitment solution is simply amazing!",
    author: "Michael, HR Manager"
  }
];

function Carousel() {
  return (
    <section className="carousel">
      <h2>WHAT OUR CLIENTS SAY</h2>
      <motion.div 
        className="carousel-track"
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        {testimonials.map((testimonial, index) => (
          <motion.div 
            className="carousel-slide" 
            key={index}
            whileHover={{ scale: 1.05 }}
          >
            <p>"{testimonial.quote}"</p>
            <h4>- {testimonial.author}</h4>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Carousel;
