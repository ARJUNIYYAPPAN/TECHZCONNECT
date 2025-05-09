import React from 'react';
import "./MainLogo.css";

const Button = () => {
  return (
    
      <button className="button" data-text="Awesome" onClick={() => window.location.href = "/"}>
        <span className="actual-text">&nbsp;Techzconnect&nbsp;</span>
        <span aria-hidden="true" className="hover-text">&nbsp;Techzconnect&nbsp;</span>
      </button>
    
  );
}


  
export default Button;
