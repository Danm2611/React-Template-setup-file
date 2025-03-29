import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">
          <Link to="/">
            <h1>Elite Loft Conversions</h1>
          </Link>
        </div>
        
        {/* Hamburger Icon for Mobile */}
        <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          <span className={isMobileMenuOpen ? 'open' : ''}></span>
          <span className={isMobileMenuOpen ? 'open' : ''}></span>
          <span className={isMobileMenuOpen ? 'open' : ''}></span>
        </div>

        {/* Menu Items */}
        <nav className={isMobileMenuOpen ? 'nav-menu active' : 'nav-menu'}>
          <ul>
            <li><Link to="/" onClick={toggleMobileMenu}>Home</Link></li>
            <li><Link to="/services" onClick={toggleMobileMenu}>Our Services</Link></li>
            <li><Link to="/testimonials" onClick={toggleMobileMenu}>Testimonials</Link></li>
            <li><Link to="/about" onClick={toggleMobileMenu}>About</Link></li>
            <li><Link to="/why-choose-us" onClick={toggleMobileMenu}>Why Choose Us</Link></li>
            <li><Link to="/blog" onClick={toggleMobileMenu}>Blog</Link></li>
            <li><Link to="/contact" onClick={toggleMobileMenu}>Contact</Link></li>
          </ul>
        </nav>
        
        <div className="phone-number">
          <a href="tel:01943871027">Call 01943 871 027</a>
        </div>
      </div>
    </header>
  );
}

export default Header;