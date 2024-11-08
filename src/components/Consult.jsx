import React from 'react';
import './Consult.css';

function Consult() {
  return (
    <div className="consult-section">
    
      <div className="left-section">
        <h2 className="title">
          Welcome To <span className="highlight">CONSULT</span>
        </h2>
        <p className="subtitle">
          Diam dolor diam ipsum sit. Clita erat ipsum et lorem stet no lorem sit clita duo justo magna dolore
        </p>
        <p className="description">
          Et stet ipsum nonumy rebum eos justo, accusam invidunt aliquyam stet magna at et sanctus, vero sea sit amet dolores, sit dolor duo invidunt dolor, kasd rebum consetetur diam invidunt erat stet.
          Accusam nonumy lorem kasd eirmod. Justo clita sadipscing ea invidunt rebum sadipscing consetetur.
        </p>
        <a href="#" className="quote-button">
          Get A Quote
        </a>
      </div>

     
      <div className="right-section">
        
        <div className="service-item">
          <div className="icon-container">
            <i className="fas fa-briefcase"></i>
          </div>
          <div className="service-content">
            <h3 className="service-title">Business Planning</h3>
            <p className="service-description">
              Tempor erat elitr rebum at clita. Diam dolor ipsum amet eos erat ipsum lorem et sit sed stet lorem sit clita duo
            </p>
          </div>
        </div>

        
        <div className="service-item">
          <div className="icon-container">
            <i className="fas fa-chart-line"></i>
          </div>
          <div className="service-content">
            <h3 className="service-title">Financial Analysis</h3>
            <p className="service-description">
              Tempor erat elitr rebum at clita. Diam dolor ipsum amet eos erat ipsum lorem et sit sed stet lorem sit clita duo
            </p>
          </div>
        </div>

        
        <div className="service-item">
          <div className="icon-container">
            <i className="fas fa-balance-scale"></i>
          </div>
          <div className="service-content">
            <h3 className="service-title">Legal Advisory</h3>
            <p className="service-description">
              Tempor erat elitr rebum at clita. Diam dolor ipsum amet eos erat ipsum lorem et sit sed stet lorem sit clita duo
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Consult;
