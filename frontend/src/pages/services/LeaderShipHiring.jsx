import React from "react";
import "./LeaderShipHiring.css";

const LeaderShipHiring = () => (
    <div className="leadership-hiring-container">
        <h1 className="leadership-hiring-title">
            LEADERSHIP HIRING
        </h1>
        <h2 className="leadership-hiring-description">
            Leadership Hiring that Drives Results
        </h2>
        <p className="leadership-hiring-description">
            Unlock your company’s potential with top-tier executive search and leadership hiring services. We connect you with bold, visionary leaders—CEOs, CFOs, CTOs, and beyond—who don’t just fill roles, they transform them.
        </p>
        <p className="leadership-hiring-description">
            With deep industry insight, a global talent network, and a data-driven approach, we deliver leaders who align with your vision, culture, and growth goals.
        </p>

        <h2 className="leadership-hiring-title" style={{ fontSize: "1.5rem", marginTop: 32 }}>
            Why Choose Us for Leadership Hiring?
        </h2>
        <ul className="leadership-hiring-list">
            <li>
                <strong>Industry-Specific Expertise:</strong> We understand the nuances of your sector and identify leaders who can make an immediate impact.
            </li>
            <li>
                <strong>Global Talent Network:</strong> Access an exclusive pipeline of C-suite and senior management professionals across industries.
            </li>
            <li>
                <strong>Confidential & Discreet Searches:</strong> We manage sensitive leadership roles with complete discretion and professionalism.
            </li>
            <li>
                <strong>Data-Driven Assessments:</strong> Leverage behavioural analytics and performance metrics to find the right leadership fit.
            </li>
        </ul>

        <div style={{ textAlign: "center" }}>
            <h3 style={{ color: "#1a237e", marginBottom: 8 }}>
                Hire leaders. Shape the future.
            </h3>
            <p className="leadership-hiring-description" style={{ marginBottom: 0 }}>
                Let’s find your next game-changer.
            </p>
        </div>
    </div>
);

export default LeaderShipHiring;