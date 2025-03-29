import React from 'react';
import Header from '../components/Header/Header.js';
import Footer from '../components/Footer/Footer.js';
import '../styles/Services.css';

function Services() {
  return (
    <div>
      <Header />
      
      <div className="services-banner">
        <div className="container">
          <h1 data-aos="fade-up">Our Services</h1>
          <p data-aos="fade-up" data-aos-delay="100">
            We specialize in high-quality loft and garage conversions that transform your space.
          </p>
        </div>
      </div>
      
      <section id="loft" className="service-section loft-section">
        <div className="container">
          <div className="service-intro" data-aos="fade-up">
            <h2>Loft Conversions</h2>
            <p>
              Transform your unused attic space into a beautiful, functional living area with our professional 
              loft conversion service. Whether you need an extra bedroom, office, playroom, or bathroom, 
              we can help you make the most of your home's potential.
            </p>
          </div>
          
          <div className="service-features" data-aos="fade-up">
            <div className="feature-grid">
              <div className="feature-item" data-aos="fade-up" data-aos-delay="100">
                <div className="feature-icon">
                  <i className="fas fa-bed"></i>
                </div>
                <h3>Dormer Loft Conversions</h3>
                <p>Maximize headroom with dormer extensions that create more usable floor space.</p>
              </div>
              
              <div className="feature-item" data-aos="fade-up" data-aos-delay="200">
                <div className="feature-icon">
                  <i className="fas fa-home"></i>
                </div>
                <h3>Hip to Gable Conversions</h3>
                <p>Straighten sloping sides to create additional space in properties with hipped roofs.</p>
              </div>
              
              <div className="feature-item" data-aos="fade-up" data-aos-delay="300">
                <div className="feature-icon">
                  <i className="fas fa-bath"></i>
                </div>
                <h3>Velux/Roof Light Conversions</h3>
                <p>An affordable option that utilizes roof windows to bring natural light into your loft.</p>
              </div>
              
              <div className="feature-item" data-aos="fade-up" data-aos-delay="400">
                <div className="feature-icon">
                  <i className="fas fa-pencil-ruler"></i>
                </div>
                <h3>Mansard Loft Conversions</h3>
                <p>Ideal for properties with limited roof space, maximizing the potential living area.</p>
              </div>
            </div>
          </div>
          
          <div className="service-gallery" data-aos="fade-up">
            <div className="gallery-grid">
              <div className="gallery-item">
                <img src="https://rsjloftconversions.co.uk/wp-content/uploads/2016/10/Luxury-Modern-Loft-Conversion-Leeds.jpg" alt="Luxury Loft Conversion" />
              </div>
              <div className="gallery-item">
                <img src="https://rsjloftconversions.co.uk/wp-content/uploads/2016/10/Loft-Bathroom.jpg" alt="Loft Bathroom" />
              </div>
              <div className="gallery-item">
                <img src="https://rsjloftconversions.co.uk/wp-content/uploads/2018/02/window-with-balcony-1024x683.jpg" alt="Loft with Balcony" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section id="garage" className="service-section garage-section">
        <div className="container">
          <div className="service-intro" data-aos="fade-up">
            <h2>Garage Conversions</h2>
            <p>
              Turn your underutilized garage into valuable living space with our professional conversion services. 
              Whether you need a home office, gym, additional bedroom, or entertainment area, our team can transform 
              your garage into a seamless extension of your home.
            </p>
          </div>
          
          <div className="service-features" data-aos="fade-up">
            <div className="feature-grid">
              <div className="feature-item" data-aos="fade-up" data-aos-delay="100">
                <div className="feature-icon">
                  <i className="fas fa-laptop-house"></i>
                </div>
                <h3>Home Office Conversions</h3>
                <p>Create a dedicated workspace that's separate from your living areas but still conveniently located.</p>
              </div>
              
              <div className="feature-item" data-aos="fade-up" data-aos-delay="200">
                <div className="feature-icon">
                  <i className="fas fa-dumbbell"></i>
                </div>
                <h3>Gym & Fitness Spaces</h3>
                <p>Transform your garage into a private fitness studio with custom flooring and ventilation.</p>
              </div>
              
              <div className="feature-item" data-aos="fade-up" data-aos-delay="300">
                <div className="feature-icon">
                  <i className="fas fa-couch"></i>
                </div>
                <h3>Family Rooms & Play Areas</h3>
                <p>Create additional living space for the whole family to enjoy with comfortable and practical design.</p>
              </div>
              
              <div className="feature-item" data-aos="fade-up" data-aos-delay="400">
                <div className="feature-icon">
                  <i className="fas fa-door-open"></i>
                </div>
                <h3>Utility & Storage Solutions</h3>
                <p>Optimize your garage with practical utility areas while maintaining valuable storage space.</p>
              </div>
            </div>
          </div>
          
          <div className="service-gallery" data-aos="fade-up">
            <div className="gallery-grid">
              <div className="gallery-item">
                <img src="https://rsjloftconversions.co.uk/wp-content/uploads/2016/10/RSJ-Garage-Conversion-Leeds.jpg" alt="Garage Conversion" />
              </div>
              <div className="gallery-item">
                <img src="https://rsjloftconversions.co.uk/wp-content/uploads/2016/10/RSJ-Loft-Conversion-Leeds.jpg" alt="Modern Conversion" />
              </div>
              <div className="gallery-item">
                <img src="https://rsjloftconversions.co.uk/wp-content/uploads/2016/10/Luxury-Modern-Loft-Conversion-Leeds.jpg" alt="Luxury Conversion" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="cta-section">
        <div className="container">
          <div className="cta-content" data-aos="fade-up">
            <h2>Ready to transform your space?</h2>
            <p>Contact us today for a free, no-obligation quote for your loft or garage conversion project.</p>
            <a href="/contact" className="btn-get-quote">Get a Free Quote</a>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}

export default Services;