import React from "react";
import "./ContractStaffing.css"; // Assume you will create this CSS file for styles

const ContractStaffing = () => {
    return (
        <section className="contract-staffing">
            <div className="contract-staffing__header">
                <h1 className="contract-staffing__title">CONTRACT STAFFING</h1>
                <h2 className="contract-staffing__subtitle">
                    Unlock Agility with Contract Staffing Solutions
                </h2>
            </div>
            <div className="contract-staffing__intro">
                <p>
                    In an ever-changing business landscape, adaptability is your greatest asset. Contract staffing empowers companies to respond swiftly to evolving needs—without the overhead of permanent hires. Whether you're launching a time-sensitive project, navigating seasonal spikes, or bridging gaps during employee absences, contract professionals provide immediate, targeted expertise to keep your business moving forward. It’s a smart, scalable, and low-risk approach to workforce management.
                </p>
            </div>
            <div className="contract-staffing__services">
                <h3 className="contract-staffing__section-title">
                    Our Contract Staffing Services <span className="contract-staffing__highlight">--On-Demand Talent. On Your Terms.</span>
                </h3>
                <p>
                    Need to scale quickly or find niche skills fast? Our contract staffing solutions connect you with proven professionals who are ready to hit the ground running. From short-term roles to specialized project teams, we deliver agile talent exactly when—and where—you need it.
                </p>
            </div>
            <div className="contract-staffing__why-choose">
                <h3 className="contract-staffing__section-title">Why Choose Our Contract Staffing?</h3>
                <ul className="contract-staffing__list">
                    <li>Rapid access to a curated pool of pre-qualified professionals</li>
                    <li>Flexible workforce scaling without long-term commitments</li>
                    <li>Deep industry knowledge for precise talent matching</li>
                    <li>Hassle-free onboarding and full compliance management</li>
                </ul>
                <p>
                    Whether you're filling one critical role or assembling a full project team, we tailor every hire to fit your goals—efficiently and effectively.
                </p>
            </div>
            <div className="contract-staffing__cta">
                <h3 className="contract-staffing__cta-title">Let’s Build Your Flexible Workforce</h3>
                <p>
                    Contact us today and discover how contract staffing can give your business the edge.
                </p>
            </div>
        </section>
    );
};

export default ContractStaffing;