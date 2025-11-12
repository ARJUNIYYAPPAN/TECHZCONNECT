import React from "react";
import { BadgeCheck, Globe, ThumbsUp } from "lucide-react";
import "./WhyChoose.css";

const WhyChoose = () => {
  const reasons = [
    {
      icon: <BadgeCheck className="why-icon" />,
      title: "Proven Expertise",
      desc: "Years of experience in staffing and HR solutions",
    },
    {
      icon: <Globe className="why-icon" />,
      title: "Global Reach",
      desc: "Access to talent pools across multiple regions",
    },
    {
      icon: <ThumbsUp className="why-icon" />,
      title: "Flexible Solutions",
      desc: "Customized approaches to meet your unique needs",
    },
  ];

  return (
    <section className="why-section">
      <div className="container">
        <h2 className="why-title">Why Choose TechzConnect</h2>
        <p className="why-subtitle">
          We bring trust, flexibility, and expertise to every engagement
        </p>

        <div className="why-grid">
          {reasons.map((item, index) => (
            <div className="why-card" key={index}>
              <div className="why-icon-bg">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
