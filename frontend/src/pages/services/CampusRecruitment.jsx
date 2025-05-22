import React from 'react';
import './CampusRecruitment.css';


const CampusRecruitment = () => {
    return (
        <div className="campus-recruitment-page">
            <h1 className="campus-title">Campus Recruitment</h1>
            <h2 className="campus-subtitle">
                Discover Top Talent Through Our Campus Recruitment Solutions
            </h2>
            <p className="campus-description">
                We specialize in campus recruitment strategies that connect businesses with bright, motivated graduates from top universities and colleges. Our end-to-end campus hiring solutions help you identify, attract, and hire the next generation of professionals who are ready to make an impact.
            </p>

            <section className="campus-section">
                <h3 className="campus-section-title">Why Choose Our Campus Recruitment Services?</h3>
                <ul className="campus-list">
                    <li>
                        <strong>Access to Top Institutions:</strong> Partner with leading universities and colleges across the country to recruit highly skilled freshers.
                    </li>
                    <li>
                        <strong>Customized Hiring Campaigns:</strong> Tailored recruitment drives based on your company’s needs, culture, and technical requirements.
                    </li>
                    <li>
                        <strong>Seamless Onboarding:</strong> From pre-placement talks to offer rollouts, we manage the entire process to ensure a smooth experience for both employers and candidates.
                    </li>
                    <li>
                        <strong>Tech-Enabled Screening:</strong> Utilize AI-driven assessments, video interviews, and analytics to identify top talent efficiently.
                    </li>
                </ul>
            </section>

            <section className="campus-section">
                <h3 className="campus-section-title">Key Features:</h3>
                <ul className="campus-list">
                    <li>Bulk Hiring for Entry-Level Roles</li>
                    <li>Pre-Placement Engagement Activities</li>
                    <li>Internship-to-Full-Time Pipelines</li>
                    <li>Branding and Employer Value Proposition on Campus</li>
                </ul>
            </section>

            <div className="campus-highlight">
                <h2 className="campus-highlight-title">Hire Freshers with Confidence</h2>
                <p className="campus-highlight-description">
                    Tap into a diverse pool of young talent ready to contribute, innovate, and grow with your organization. Our campus recruitment solutions are designed to help you build a strong future workforce.
                </p>
            </div>

            <div className="campus-contact">
                <p>Looking to hire fresh graduates?</p>
                <button className="campus-contact-btn">Contact us today to plan your next campus recruitment drive.</button>
            </div>
        </div>
    );
};

export default CampusRecruitment;