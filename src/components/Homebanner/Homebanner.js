import React from 'react';
import { Link } from 'react-router-dom';
import './Homebanner.css';

function Homebanner() {
  return (
    <section className="homebanner">
      <div className="container banner-content" data-aos="fade-up">
        <h1 data-aos="fade-up">Loft & Garage Conversion Specialists</h1>
        <p data-aos="fade-up" data-aos-delay="100">
          Transform your space, add value to your property, and stay in the area you love.
        </p>
        <div className="cta-buttons" data-aos="fade-up" data-aos-delay="200">
          <Link to="/contact" className="btn-get-started">
            Get a Free Quote
          </Link>
          <Link to="/testimonials" className="btn-testimonials">
            Hear From Our Customers
          </Link>
        </div>
      </div>
      
      <div className="banner-services" data-aos="fade-up" data-aos-delay="300">
        <div className="service-box">
          <h3>Loft Conversions</h3>
          <Link to="/services#loft" className="service-link">Find Out More</Link>
        </div>
        <div className="service-box">
          <h3>Garage Conversions</h3>
          <Link to="/services#garage" className="service-link">Find Out More</Link>
        </div>
      </div>
    </section>
  );
}

export default Homebanner;