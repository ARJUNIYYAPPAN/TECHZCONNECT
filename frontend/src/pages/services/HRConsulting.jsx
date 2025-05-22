import React from "react";
import "./HRConsulting.css";

const HRConsulting = () => (
    <div className="hr-consulting-page">
        <h1 className="hr-title">HR CONSULTING</h1>
        <h2 className="hr-subtitle">Empowering Businesses with Strategic HR Consulting Solutions</h2>
        <p className="hr-description">
            At Techzconnect, we offer comprehensive HR consulting services designed to align your human resources strategy with your business goals. Whether you're a startup building your HR foundation or an established enterprise refining your workforce practices, our HR experts deliver tailored solutions to enhance productivity, compliance, and employee engagement.
        </p>

        <h3 className="hr-section-title">Our Core HR Consulting Services:</h3>
        <ul className="hr-services-list">
            <li>
                <strong>HR Policy &amp; Compliance:</strong> Develop and implement HR policies aligned with labor laws and industry standards.
            </li>
            <li>
                <strong>Talent Acquisition Strategy:</strong> Optimize your recruitment process to attract, hire, and retain top talent.
            </li>
            <li>
                <strong>Performance Management:</strong> Design frameworks to evaluate employee performance, boost productivity, and drive results.
            </li>
            <li>
                <strong>Organizational Development:</strong> Improve business structures, workflows, and leadership development to support growth.
            </li>
            <li>
                <strong>Employee Engagement &amp; Retention:</strong> Foster a positive workplace culture to reduce turnover and increase satisfaction.
            </li>
            <li>
                <strong>HR Audits &amp; Diagnostics:</strong> Identify gaps in your HR systems and recommend actionable improvements.
            </li>
        </ul>

        <h3 className="hr-section-title">Why Choose Us?</h3>
        <ul className="hr-why-list">
            <li>Experienced HR Consultants Across Industries</li>
            <li>Scalable Solutions for SMEs, Corporates &amp; Startups</li>
            <li>Data-Driven HR Strategies</li>
            <li>End-to-End Support – From Hiring to Exit</li>
        </ul>

        <div className="hr-highlight-box">
            <h2 className="hr-highlight-title">Elevate Your Workforce with Expert HR Consulting</h2>
            <p className="hr-highlight-description">
                We combine industry insight, regulatory expertise, and strategic thinking to deliver results that matter. Let us help you transform your HR function into a growth driver.
            </p>
            <p className="hr-highlight-contact">
                <strong>Need professional HR guidance?</strong>
                <br />
                Contact us today to schedule your free consultation.
            </p>
        </div>
    </div>
);

export default HRConsulting;