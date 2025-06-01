import React from "react";
import "./GlobalITRecruitment.css";
import { motion } from "framer-motion";
import us from "../assets/us.jpg";
import canada from "../assets/canada.jpg";
import uk from "../assets/uk.jpg";
import australia from "../assets/australia.jpg";



const GlobalITRecruitment = () => {
  const countries = [
    {
      name: "United States",
      desc: "Recruiting top talent from Silicon Valley, New York, Austin, and more tech hubs.",
      image: us,
    },
    {
      name: "Canada",
      desc: "Connecting you with skilled developers, analysts, and engineers from Toronto, Vancouver, and Montreal.",
      image: canada,
    },
    {
      name: "United Kingdom",
      desc: "Finding top IT talent in London, Manchester, Birmingham for your business growth.",
      image: uk,
    },
    {
      name: "Australia",
      desc: "Specialized recruitment services for Sydney, Melbourne, and Brisbane tech sectors.",
      image: australia,
    },
  ];
  
  return (
    
    <div className="global-it-recruitment1">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Global IT Recruitment
      </motion.h1>

      <div className="countries-grid">
        {countries.map((country, index) => (
          <motion.div
            className="country-card-bg"
            key={index}
            style={{ backgroundImage: `url(${country.image})`, }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="overlay" />
            <div className="country-content">
              <h3>{country.name}</h3>
              <p>{country.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default GlobalITRecruitment;
