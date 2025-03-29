import React from 'react';
import Header from '../components/Header/Header.js';
import Footer from '../components/Footer/Footer.js';
import '../styles/Blog.css';
import { Link } from 'react-router-dom';

function Blog() {
  // Sample blog post data - would come from an API or CMS in a real project
  const blogPosts = [
    {
      id: 1,
      title: "Loft Conversion Myth Buster – Planning Permission",
      excerpt: "Many homeowners believe they always need planning permission for a loft conversion, but this isn't always the case. In this article, we bust the myths around planning requirements for loft conversions.",
      category: "News",
      date: "23/02/2023",
      author: "Jonathan Reed",
      image: "https://rsjloftconversions.co.uk/wp-content/uploads/2018/02/floor-plan-1474454_960_720-e1519382605166.jpg"
    },
    {
      id: 2,
      title: "Planning for Buildings with Bats",
      excerpt: "If you have bats residing in your property, there are special considerations when planning a loft conversion. Learn about the regulations and how to proceed with your project while protecting these protected species.",
      category: "News",
      date: "08/02/2023",
      author: "Jonathan Reed",
      image: "https://rsjloftconversions.co.uk/wp-content/uploads/2018/02/bat2-1024x678.jpg"
    },
    {
      id: 3,
      title: "Love it or List it: Why a Conversion Makes Sense",
      excerpt: "Should you move to a bigger house or convert your existing space? We explore the financial and practical benefits of choosing a loft or garage conversion over relocating.",
      category: "News",
      date: "02/02/2023",
      author: "Jonathan Reed",
      image: "https://rsjloftconversions.co.uk/wp-content/uploads/2018/02/window-with-balcony-1024x683.jpg"
    },
    {
      id: 4,
      title: "5 Creative Uses for Your Converted Garage Space",
      excerpt: "Looking for inspiration for your garage conversion? Discover five innovative ways to transform your garage into a functional and beautiful living space that adds value to your home.",
      category: "Inspiration",
      date: "15/01/2023",
      author: "Sarah Johnson",
      image: "https://rsjloftconversions.co.uk/wp-content/uploads/2016/10/RSJ-Garage-Conversion-Leeds.jpg"
    },
    {
      id: 5,
      title: "How to Maximize Natural Light in Your Loft Conversion",
      excerpt: "Natural light can transform your loft conversion from ordinary to extraordinary. Learn about skylights, dormers, and other design techniques to bring more daylight into your new space.",
      category: "Top Tips",
      date: "05/12/2022",
      author: "Michael Thompson",
      image: "https://rsjloftconversions.co.uk/wp-content/uploads/2016/10/Loft-Bathroom.jpg"
    },
    {
      id: 6,
      title: "The Ultimate Guide to Loft Conversion Costs",
      excerpt: "Wondering how much your loft conversion might cost? This comprehensive guide breaks down all the potential expenses, from design and materials to labor and finishing touches.",
      category: "Top Tips",
      date: "20/11/2022",
      author: "Jonathan Reed",
      image: "https://rsjloftconversions.co.uk/wp-content/uploads/2016/10/Luxury-Modern-Loft-Conversion-Leeds.jpg"
    }
  ];

  return (
    <div>
      <Header />
      
      <div className="blog-banner">
        <div className="container">
          <h1 data-aos="fade-up">Our Blog</h1>
          <p data-aos="fade-up" data-aos-delay="100">
            Stay updated with our latest news, insights, and tips on loft and garage conversions.
          </p>
        </div>
      </div>
      
      <section className="blog-section">
        <div className="container">
          <div className="blog-categories" data-aos="fade-up">
            <ul>
              <li><a href="#" className="active">All</a></li>
              <li><a href="#">News</a></li>
              <li><a href="#">Inspiration</a></li>
              <li><a href="#">Top Tips</a></li>
            </ul>
          </div>
          
          <div className="blog-grid" data-aos="fade-up">
            {blogPosts.map(post => (
              <div className="blog-card" key={post.id} data-aos="fade-up" data-aos-delay={post.id * 50}>
                <div className="blog-image">
                  <img src={post.image} alt={post.title} />
                  <div className="blog-category">{post.category}</div>
                </div>
                <div className="blog-content">
                  <h2>{post.title}</h2>
                  <div className="blog-meta">
                    <span className="blog-author">{post.author}</span>
                    <span className="blog-date">{post.date}</span>
                  </div>
                  <p>{post.excerpt}</p>
                  <Link to={`/blog/${post.id}`} className="read-more">Read More</Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="blog-pagination" data-aos="fade-up">
            <ul>
              <li className="active"><a href="#">1</a></li>
              <li><a href="#">2</a></li>
              <li><a href="#">3</a></li>
              <li><a href="#">→</a></li>
            </ul>
          </div>
        </div>
      </section>
      
      <section className="subscribe-section" data-aos="fade-up">
        <div className="container">
          <h2>Download Our Brochure</h2>
          <p>View our latest work and take inspiration for your own project.</p>
          
          <form className="subscribe-form">
            <div className="form-group">
              <input type="text" placeholder="First Name*" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Your Email*" required />
            </div>
            <button type="submit" className="btn-subscribe">Download</button>
          </form>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}

export default Blog;