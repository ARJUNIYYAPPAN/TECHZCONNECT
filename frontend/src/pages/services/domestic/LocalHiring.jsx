import React from "react";
import "./LocalHiring.css";

const services = [
  {
    title: "Job Posting Assistance",
    description:
      "We help you craft compelling job postings and distribute them across top job portals to attract the right talent.",
  },
  {
    title: "Candidate Screening",
    description:
      "Our team pre-screens applications, conducts initial interviews, and filters the most suitable candidates for your company.",
  },
  {
    title: "Onboarding Support",
    description:
      "Smooth onboarding processes including document verification, induction support, and early engagement strategies.",
  },
];

const LocalHiring = () => {
  return (
    <section className="local-hiring-container">
      <h2 className="section-title">Local Hiring Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LocalHiring;
