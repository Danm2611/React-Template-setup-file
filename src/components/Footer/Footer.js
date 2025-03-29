import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content container">
        {/* About Section */}
        <div className="footer-section about" data-aos="fade-up">
          <h2>Elite Loft Conversions</h2>
          <p>
            Based in Leeds, Elite Loft & Garage Conversions are specialists in loft and garage 
            conversions across West Yorkshire. Discover how we go above and beyond our customers' expectations.
          </p>
          <div className="socials">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>

        {/* Links Section */}
        <div className="footer-section links" data-aos="fade-up" data-aos-delay="100">
          <h3>Main Pages</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Loft Conversion</Link></li>
            <li><Link to="/services">Garage Conversion</Link></li>
            <li><Link to="/why-choose-us">Why Choose Us</Link></li>
            <li><Link to="/testimonials">Testimonials</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* Blog Section */}
        <div className="footer-section blog-links" data-aos="fade-up" data-aos-delay="150">
          <h3>Blog</h3>
          <ul>
            <li><Link to="/blog">Inspiration</Link></li>
            <li><Link to="/blog">News</Link></li>
            <li><Link to="/blog">Top Tips</Link></li>
          </ul>
          
          <div className="download-brochure">
            <h3>Download Brochure</h3>
            <p>View our latest work and take inspiration for your own project.</p>
            <Link to="/contact" className="btn-download">Download</Link>
          </div>
        </div>

        {/* Contact Section */}
        <div className="footer-section contact" data-aos="fade-up" data-aos-delay="200">
          <h3>Contact Us</h3>
          <p><i className="fas fa-phone"></i> 01943 871 027</p>
          <p><i className="fas fa-envelope"></i> info@eliteloftconversions.co.uk</p>
          <p><i className="fas fa-map-marker-alt"></i> Unit 7 Gordon Mills, Netherfield Road, Leeds, LS20 9PD</p>
          
          <div className="footer-cta">
            <Link to="/contact" className="btn-quote">Request A Free Quote</Link>
          </div>
        </div>
      </div>

      <div className="footer-bottom" data-aos="fade-up" data-aos-delay="300">
        <p>&copy; {new Date().getFullYear()} Elite Loft & Garage Conversions | All Rights Reserved</p>
        <div className="footer-legal">
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms & Conditions</a>
          <a href="/sitemap">Sitemap</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;