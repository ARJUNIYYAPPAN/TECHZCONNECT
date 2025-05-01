import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import "./ApplyJobPage.css";

const ApplyJobPage = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    resume: null,
    coverLetter: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [fileName, setFileName] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prev) => ({ ...prev, resume: file }));
    setFileName(file?.name || "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    setSuccessMessage("✅ Application submitted successfully!");
    setFileName("");
    setFormData({
      fullName: "",
      email: "",
      resume: null,
      coverLetter: "",
    });
  };

  return (
    <motion.div
      className="apply-job-container"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Apply for Job #{id}
      </motion.h1>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        <label>Full Name:</label>
        <motion.input
          type="text"
          name="fullName"
          value={formData.fullName}
          required
          onChange={handleChange}
          whileFocus={{ scale: 1.02 }}
        />

        <label>Email:</label>
        <motion.input
          type="email"
          name="email"
          value={formData.email}
          required
          onChange={handleChange}
          whileFocus={{ scale: 1.02 }}
        />

        <label>Resume (PDF only):</label>
        <motion.input
          type="file"
          accept=".pdf"
          required
          onChange={handleFileChange}
        />
        {fileName && <p className="file-name">📎 Selected: {fileName}</p>}

        <label>Cover Letter:</label>
        <motion.textarea
          name="coverLetter"
          rows="4"
          value={formData.coverLetter}
          onChange={handleChange}
          whileFocus={{ scale: 1.02 }}
        ></motion.textarea>

        <motion.button
          type="submit"
          className="submit-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Submit Application
        </motion.button>

        {successMessage && <p className="success-message">{successMessage}</p>}
      </motion.form>
    </motion.div>
  );
};

export default ApplyJobPage;
 