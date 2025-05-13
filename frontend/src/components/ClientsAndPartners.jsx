import React from 'react';
import './ClientsAndPartners.css';
import nam1 from './logo/nam1.jpg';


const logos = [
  '/logo/nam1.jpg',
  'Nam1',
  'Nam2',
  'Nam2', 
  'Nam2',
  'Nam1',
  'Nam1',
  'Nam1',
];

const ClientLogos = () => {
  return (
    <section className="client-logos-section">
      <h2 className="logos-title">Trusted by Leading Companies</h2>
      <div className="logos-slider">
        <div className="logos-track">
          {logos.concat(logos).map((logo, index) => (
            <div className="logo-slide" key={index}>
              <img src={nam1} alt={`Client ${index}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
