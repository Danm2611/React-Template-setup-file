import './App.css';
import 'aos/dist/aos.css'; // Import AOS CSS
import 'glightbox/dist/css/glightbox.css'; // Import GLightbox CSS
import AOS from 'aos'; // Import AOS
import GLightbox from 'glightbox'; // Import GLightbox
import { useEffect } from 'react'; // Import useEffect to initialize AOS and GLightbox

import Home from './Pages/Home';
import About from './Pages/Aboutus';
import Services from './Pages/Services';
import Testimonials from './Pages/Testimonials';
import WhyChooseUs from './Pages/WhyChooseUs';
import Blog from './Pages/Blog';
import Contact from './Pages/Contactus';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,  // Set animation duration
      easing: 'ease-in-out',
      once: true,  // Whether animation should happen only once
      mirror: false  // Whether elements should animate out while scrolling past them
    });

    // Initialize GLightbox for any elements that need it
    const lightbox = GLightbox({
      selector: '.glightbox', // Customize the selector if needed
    });
    
  }, []); // Empty dependency array so it only runs once on mount

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/why-choose-us" element={<WhyChooseUs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;