import React from 'react';
import Header from '../components/Header/Header.js';
import Footer from '../components/Footer/Footer.js';
import '../styles/WhyChooseUs.css';

function WhyChooseUs() {
  const benefits = [
    {
      id: 1,
      title: "Minimal Disruption",
      description: "Throughout the project we ensure minimal disturbance to you and your family.",
      icon: "fa-clock"
    },
    {
      id: 2,
      title: "On Time & On Budget",
      description: "Our project guarantee ensures that all our work is completed on time and on budget.",
      icon: "fa-money-bill"
    },
    {
      id: 3,
      title: "Lifetime Guarantee",
      description: "We provide a lifetime guarantee on all our projects to give you complete peace of mind.",
      icon: "fa-shield-alt"
    },
    {
      id: 4,
      title: "Expert Team",
      description: "Our team of professionals have years of experience in loft and garage conversions.",
      icon: "fa-users"
    },
    {
      id: 5,
      title: "Quality Materials",
      description: "We only use the highest quality materials to ensure a superior finish.",
      icon: "fa-medal"
    },
    {
      id: 6,
      title: "Transparent Process",
      description: "Our clear project timeline and communication ensures you know what's happening at every stage.",
      icon: "fa-tasks"
    }
  ];

  return (
    <div>
      <Header />
      
      <div className="why-choose-banner">
        <div className="container">
          <h1 data-aos="fade-up">Why Choose Us</h1>
          <p data-aos="fade-up" data-aos-delay="100">
            Discover the Elite difference and how we stand out from other conversion specialists.
          </p>
        </div>
      </div>
      
      <section className="discover-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2>Discover the Elite difference…</h2>
            <p>
              Based in Leeds, our experienced team works across West Yorkshire. We go above and 
              beyond what you would expect from a builder with our unique process and project guarantees.
            </p>
          </div>
          
          <div className="benefits-grid" data-aos="fade-up">
            {benefits.map(benefit => (
              <div className="benefit-card" key={benefit.id} data-aos="fade-up" data-aos-delay={benefit.id * 100}>
                <div className="benefit-icon">
                  <i className={`fas ${benefit.icon}`}></i>
                </div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="process-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2>Our Process</h2>
            <p>We follow a proven step-by-step process to ensure a smooth, hassle-free conversion</p>
          </div>
          
          <div className="process-timeline" data-aos="fade-up">
            <div className="timeline-item" data-aos="fade-right">
              <div className="timeline-number">1</div>
              <div className="timeline-content">
                <h3>Initial Consultation</h3>
                <p>We discuss your requirements, visit your property, and provide initial design ideas.</p>
              </div>
            </div>
            
            <div className="timeline-item" data-aos="fade-left">
              <div className="timeline-number">2</div>
              <div className="timeline-content">
                <h3>Detailed Design</h3>
                <p>Our design team creates detailed plans for your approval, incorporating your ideas.</p>
              </div>
            </div>
            
            <div className="timeline-item" data-aos="fade-right">
              <div className="timeline-number">3</div>
              <div className="timeline-content">
                <h3>Planning & Permits</h3>
                <p>We handle all the necessary planning permissions and building regulations for you.</p>
              </div>
            </div>
            
            <div className="timeline-item" data-aos="fade-left">
              <div className="timeline-number">4</div>
              <div className="timeline-content">
                <h3>Construction</h3>
                <p>Our expert team carries out the conversion with minimal disruption to your home life.</p>
              </div>
            </div>
            
            <div className="timeline-item" data-aos="fade-right">
              <div className="timeline-number">5</div>
              <div className="timeline-content">
                <h3>Quality Inspection</h3>
                <p>We conduct thorough inspections to ensure everything meets our high standards.</p>
              </div>
            </div>
            
            <div className="timeline-item" data-aos="fade-left">
              <div className="timeline-number">6</div>
              <div className="timeline-content">
                <h3>Project Completion</h3>
                <p>We hand over your new space, complete with all documentation and guarantees.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="team-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2>Meet Our Team</h2>
            <p>Our skilled professionals are committed to delivering quality results</p>
          </div>
          
          <div className="team-image" data-aos="fade-up">
            <img src="https://rsjloftconversions.co.uk/wp-content/uploads/2016/10/Luxury-Modern-Loft-Conversion-Leeds.jpg" alt="Elite Loft Conversions Team" />
          </div>
          
          <div className="team-cta" data-aos="fade-up">
            <h3>Want to discuss your own project?</h3>
            <a href="/contact" className="btn-get-quote">Get in Touch Today</a>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}

export default WhyChooseUs;