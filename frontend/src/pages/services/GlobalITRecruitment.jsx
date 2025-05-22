import React from "react";
import "./GlobalITRecruitment.css";

const roles = [
    "Full-Stack & Backend Developers",
    "Cloud Architects & DevOps Engineers",
    "AI, Machine Learning & Data Experts",
    "IT Security Analysts & Network Engineers",
    "ERP, CRM, and Enterprise Tech Specialists",
];

export default function GlobalITRecruitment() {
    return (
        <div className="global-it-recruitment">
            <section className="hero-section">
                <h1 className="hero-title">Global IT Recruitment</h1>
                <p className="hero-subtitle">Tech Talent Without Borders</p>
            </section>

            <section className="intro-section">
                <p>
                    In a world where innovation knows no limits, why should your talent pool? Our global IT recruitment solutions connect forward-thinking companies with high-performing tech professionals across continents. From Silicon Valley to Bangalore, we find the talent that builds your future.
                </p>
            </section>

            <section className="differentiators-section">
                <h2 className="section-title">What Makes Us Different?</h2>
                <ul className="differentiators-list">
                    <li>
                        <strong>Global Reach, Local Insight</strong> – We source talent worldwide with region-specific expertise
                    </li>
                    <li>
                        <strong>Tech-Savvy Recruiters</strong> – Specialists in software, cloud, cybersecurity, AI, and more
                    </li>
                    <li>
                        <strong>Speed & Precision</strong> – Agile hiring that keeps your tech projects moving
                    </li>
                    <li>
                        <strong>Cross-Border Hiring Support</strong> – From time zones to tax codes, we’ve got it covered
                    </li>
                </ul>
            </section>

            <section className="roles-section">
                <h2 className="section-title">Roles We Fill Globally:</h2>
                <ul className="roles-list">
                    {roles.map((role) => (
                        <li key={role}>{role}</li>
                    ))}
                </ul>
            </section>

            <section className="confidence-section">
                <h2 className="section-title">Go Global with Confidence</h2>
                <p>
                    Whether you're scaling a startup or expanding your enterprise IT team, we help you hire the best—wherever they are.
                </p>
            </section>

            <section className="cta-section">
                <h3 className="cta-title">Let’s Build Your Global Tech Team</h3>
            </section>
        </div>
    );
}