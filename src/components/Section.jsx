import React from 'react';
import './Section.css';

const Section = () => {
  return (
    <div className="section-container">
      <div className="section-caption">
        <p className="section-subtitle">BUSINESS CONSULTANCY</p>
        <h1 className="section-title">Take Our Help To Reach The Top Level</h1>
        <div className="section-buttons">
          <a href="#" className="btn btn-primary">Get Quote</a>
          <a href="#" className="btn btn-secondary">Contact Us</a>
        </div>
      </div>
    </div>
  );
};

export default Section;
