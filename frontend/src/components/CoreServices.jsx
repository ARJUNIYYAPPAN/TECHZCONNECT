import React from "react";
import { Briefcase, UserCheck, Settings } from "lucide-react"; // optional icon library
import "./CoreServices.css";

const CoreServices = () => {
  const services = [
    {
      icon: <Briefcase className="service-icon" />,
      title: "Contract Staffing",
      desc: "Flexible staffing solutions for short-term and long-term projects",
    },
    {
      icon: <UserCheck className="service-icon" />,
      title: "HR Consulting",
      desc: "Strategic HR solutions and policy advisory for modern organizations",
    },
    {
      icon: <Settings className="service-icon" />,
      title: "RPO Solutions",
      desc: "End-to-end recruitment process outsourcing for seamless hiring",
    },
  ];

  return (
    <section className="core-services" id="services">
      <div className="container">
        <h2 className="section-title">Our Core Services</h2>
        <p className="section-subtitle">
          Comprehensive staffing and HR solutions tailored to your business needs
        </p>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="icon-wrapper">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>

        <button className="view-btn">
          View All Services <span className="arrow">→</span>
        </button>
      </div>
    </section>
  );
};

export default CoreServices;
