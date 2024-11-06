import React from 'react';
import "./section.css"



const Section = () => {
  return (
   
          <div className="carousel-item active">
            <img className="w-100" src="new-project\src\assets\carousel-1.jpg" alt="Business Consultancy" />
            <div className="carousel-caption d-flex align-items-center justify-content-center">
              <div className="caption-content text-center">
                <h5 className="text-uppercase">Business Consultancy</h5>
                <h1 className="display-3 text-white">We Provide Solution On Your Business</h1>
                <a href="#" className="btn btn-primary">Get Quote</a>
                <a href="#" className="btn btn-secondary">Contact Us</a>
              </div>
            </div>
          </div>   
    
  );
};

export default Section;
