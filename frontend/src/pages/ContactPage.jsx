import React, { useState } from "react";
import { motion } from "framer-motion";
import "./ContactPage.css";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    department: "Support",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);

    if (formData.department === "sales") {
      console.log("Send to Sales Department");
    } else if (formData.department === "support") {
      console.log("Send to Support Department");
    } else if (formData.department === "hr") {
      console.log("Send to HR Department");
    }

    alert(`Your message has been routed to the ${formData.department} department!`);
  };

  return (
    <><motion.div
      className="contact-container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1>Contact Us</h1>
      <p>We're here to help. Reach out to us with your query.</p>

      <motion.form
        onSubmit={handleSubmit}
        className="contact-form"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        <label>Full Name:</label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required />

        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required />

        <label>Message:</label>
        <textarea
          name="message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          required />

        <motion.button
          type="submit"
          className="submit-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Send Message
        </motion.button>
      </motion.form>

      <div className="map-section">
        <iframe
          title="Techzconnect Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.196321286258!2d80.24060447484115!3d12.959285987354951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d9a4af906f3%3A0x9c6b4f7970bd8200!2sTechzit%20Solutions!5e0!3m2!1sen!2sin!4v1744197579045!5m2!1sen!2sin"
          width="100%"
          height="300"
          style={{ border: 0, borderRadius: "10px", marginTop: "30px" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

    </motion.div><motion.hr
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        style={{ transformOrigin: "left", height: "3px", background: "#f7c948", border: "none" }} /></>

     
  );
};

export default ContactPage;
