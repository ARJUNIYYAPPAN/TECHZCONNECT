import React, { useState } from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import '../styles/HeroSection.css';
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

const CustomPrevArrow = (props) => (
  <div className="slider-arrow left-arrow" onClick={props.onClick}>
    <FaArrowCircleLeft />
  </div>
);

const CustomNextArrow = (props) => (
  <div className="slider-arrow right-arrow" onClick={props.onClick}>
    <FaArrowCircleRight />
  </div>
);

const HeroSection = () => {
  const slides = [
    {
      title: 'Techzconnect HR Consulting',
      subtitle: 'Empowering Businesses with Innovative HR Solutions',
      btn1: { text: 'Hire Talent', link: '/hire-us' },
      btn2: { text: 'Get Hired', link: '/jobs-listing' },
    },
    {
      title: 'Global Recruitment Expertise',
      subtitle: 'Connecting global talent to top organizations.',
      btn1: { text: 'Contact Us', link: '/contact' },
      btn2: { text: 'Apply Now', link: '/apply' },
    },
    {
      title: 'Career Coaching & Resume Help',
      subtitle: 'Boost your career with expert guidance.',
      btn1: { text: 'Start Coaching', link: '/career-coaching' },
      btn2: { text: 'Check Services', link: '/services' },
    },
    {
      title: 'AI-Powered Hiring Solutions',
      subtitle: 'Smarter, faster, and more accurate hiring.',
      btn1: { text: 'Our Solutions', link: '/ai-solutions' },
      btn2: { text: 'Get Matched', link: '/jobs-listing' },
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
    arrows: true,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />
  };

  const progressPercentage = ((currentSlide + 1) / slides.length) * 100;

  return (
    <motion.section
      className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <div className="hero-overlay"></div>

      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
            <motion.h1
              className="hero-title"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {slide.title}
            </motion.h1>

            <motion.p
              className="hero-subtitle"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {slide.subtitle}
            </motion.p>

            <div className="hero-buttons">
              <motion.a
                href={slide.btn1.link}
                className="hire-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {slide.btn1.text}
              </motion.a>
              <motion.a
                href={slide.btn2.link}
                className="gethired-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {slide.btn2.text}
              </motion.a>
            </div>
          </div>
        ))}
      </Slider>

      <div className="slider-progress-bar">
        <div className="slider-progress" style={{ width: `${progressPercentage}%` }}></div>
      </div>
    </motion.section>
  );
};

export default HeroSection;

