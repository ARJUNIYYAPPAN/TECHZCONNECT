import React from "react";
import { Star } from "lucide-react";
import "./Testimonials.css";

const Testimonials = () => {
  const testimonials = [
    {
      text: "Techzconnect made hiring seamless and fast. Their team truly understands our business needs.",
      name: "Priya R",
      role: "HR Manager, FinTech Co.",
      rating: 4,
    },
    {
      text: "Reliable, fast, and with top-notch communication—Techzconnect is now our go-to hiring partner.",
      name: "Kumar S",
      role: "HR Manager, FinTech Co.",
      rating: 4,
    },
    {
      text: "Techzconnect made hiring seamless and fast. Their team truly understands our business needs.",
      name: "Priya R",
      role: "HR Manager, FinTech Co.",
      rating: 4,
    },
  ];

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="container">
        <h2 className="testimonial-title">What Our Clients Say</h2>
        <p className="testimonial-subtitle">
          Comprehensive staffing and HR solutions tailored to your business needs
        </p>

        <div className="testimonial-grid">
          {testimonials.map((t, i) => (
            <div className="testimonial-card" key={i}>
              <p className="testimonial-text">“{t.text}”</p>
              <h4 className="testimonial-name">{t.name}</h4>
              <p className="testimonial-role">{t.role}</p>

              <div className="stars">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    className={`star ${index < t.rating ? "filled" : ""}`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
