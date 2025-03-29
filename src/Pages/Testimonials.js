import React from 'react';
import Header from '../components/Header/Header.js';
import Footer from '../components/Footer/Footer.js';
import '../styles/Testimonials.css';

function Testimonials() {
  // Sample testimonials data - would come from an API or CMS in a real project
  const testimonials = [
    {
      id: 1,
      name: "Charles McEvoy",
      text: "Extremely impressed not only with the quality of the work, but the remarkably low impact the work has on us: they were with us for the best part of five weeks, caused no bother, kept to time and to budget, checked in with us at appropriate times and left no mess. Efficient, high quality and thoroughly recommended.",
      image: "https://rsjloftconversions.co.uk/wp-content/plugins/fb-reviews-pro/static/img/avatar.png"
    },
    {
      id: 2,
      name: "Adam Greenaway",
      text: "It's very rare you come across a company that delivers everything they say they would and at the time they said they would! I was worried converting my garage into 3 areas of office, utility and storage would not be up to the standard of our 10 year old house. To be honest when all the work was completed by Elite I was left thinking I wish my house was built as well as their conversion work - thanks team Elite!",
      image: "https://rsjloftconversions.co.uk/wp-content/plugins/fb-reviews-pro/static/img/avatar.png"
    },
    {
      id: 3,
      name: "Anna Mdee",
      text: "Wonderful service from start to finish- we love our new kitchen. Thanks to all the team at Elite!",
      image: "https://rsjloftconversions.co.uk/wp-content/plugins/fb-reviews-pro/static/img/avatar.png"
    },
    {
      id: 4,
      name: "Rachael Stewart",
      text: "Did a lovely ensuite, utility and garage conversion for us. Attention to detail second to none and great customer service! Highly recommend!",
      image: "https://rsjloftconversions.co.uk/wp-content/plugins/fb-reviews-pro/static/img/avatar.png"
    },
    {
      id: 5,
      name: "Sarah Rawson",
      text: "Absolutely a brilliant bunch of guys, did an excellent job on my garage conversion, & completed in the time said. Couldn't recommend a better company",
      image: "https://rsjloftconversions.co.uk/wp-content/plugins/fb-reviews-pro/static/img/avatar.png"
    },
    {
      id: 6,
      name: "Matthew Pinkney",
      text: "Really pleased with our loft conversion. The builders were all very professional and friendly, and worked hard. They minimised disruption to the rest of the house and always tidied/cleaned up afterwards. Everyone who has seen the conversion has commented on how good it looks - and it matches the rest of the house so it looks as though it has always been there!",
      image: "https://rsjloftconversions.co.uk/wp-content/plugins/fb-reviews-pro/static/img/avatar.png"
    }
  ];

  return (
    <div>
      <Header />
      
      <div className="testimonials-banner">
        <div className="container">
          <h1 data-aos="fade-up">Customer Testimonials</h1>
          <p data-aos="fade-up" data-aos-delay="100">
            Don't just take our word for it. Here's what our customers say about us.
          </p>
        </div>
      </div>
      
      <section className="testimonials-section">
        <div className="container">
          <div className="video-testimonial" data-aos="fade-up">
            <h2>Watch Our Customers' Stories</h2>
            <div className="video-container">
              <iframe 
                width="100%" 
                height="315" 
                src="https://www.youtube.com/embed/PEXhjI5G1h0" 
                title="Elite Loft & Garage Conversions Testimonial Video" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
          
          <div className="testimonials-grid" data-aos="fade-up">
            {testimonials.map(testimonial => (
              <div className="testimonial-card" key={testimonial.id} data-aos="fade-up" data-aos-delay={testimonial.id * 100}>
                <div className="testimonial-content">
                  <p>"{testimonial.text}"</p>
                </div>
                <div className="testimonial-author">
                  <img src={testimonial.image} alt={testimonial.name} />
                  <h3>{testimonial.name}</h3>
                </div>
              </div>
            ))}
          </div>
          
          <div className="testimonial-cta" data-aos="fade-up">
            <h2>Ready to Transform Your Home?</h2>
            <p>Join our happy customers and start your conversion journey today.</p>
            <a href="/contact" className="btn-get-quote">Get a Free Quote</a>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}

export default Testimonials;