
import React, { useState } from 'react';
import './App3.css';
import { FaExchangeAlt, FaDoorOpen, FaPalette, FaTools, FaPhone, FaMapMarkerAlt, FaEnvelope, FaFacebook, FaWhatsapp, FaTimes } from 'react-icons/fa';

const App3 = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <div className="app">
      {/* Mini Top Bar */}
      <div className="mini-top-bar">
        <div className="container">
          <div className="social-icons">
            <a href="#" aria-label="Facebook"><FaFacebook /></a>
            <a href="#" aria-label="Whatsapp"><FaWhatsapp /></a>
          </div>
          <button className="quote-button" onClick={toggleModal}>
            Get a Quote
          </button>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="main-nav">
        <div className="container">
          <div className="logo-placeholder">
            <img 
              src="/logo.png"  
              alt="Alu Lady "
              className="logo-image"
            />
          </div>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Our Services</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>
      </nav>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={toggleModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={toggleModal}>
              <FaTimes />
            </button>
            <h3>Get a Quote</h3>
            <form className="quote-form">
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <input type="tel" placeholder="Phone Number" required />
              <select required>
                <option value="">Select Service</option>
                <option value="conversion">Window Conversion</option>
                <option value="maintenance">Door Maintenance</option>
                <option value="custom">Custom Designs</option>
              </select>
              <textarea placeholder="Project Details" required></textarea>
              <button type="submit" className="submit-button">Submit Request</button>
            </form>
          </div>
        </div>
      )}
      {/* Hero Section */}
      <header className="hero">
        <div className="hero-content">
          <h1>Elevate Your Space with Aluminium Elegance</h1>
          <p>Where innovation meets elegance in aluminium solutions</p>
          <button className="cta-button mx-3">Contact us</button>
          <button className="cta-button mx-3">Get a Quote</button>
        </div>
      </header>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <h2>About Alu Lady</h2>
          <p>Alu Lady is committed to empowering women and elevating home aesthetics. We specialize in high-quality aluminum products and offer comprehensive solutions including doors, windows, and commercial shopfronts.</p>
          <div className="features-grid">
            <div className="feature">
              <div className="icon-circle">
                <FaExchangeAlt />
              </div>
              <h3>Steel to Aluminium Conversion</h3>
              <p>Modernize your property with durable, stylish aluminium windows.</p>
            </div>
            <div className="feature">
              <div className="icon-circle">
                <FaTools />
              </div>
              <h3>Door Maintenance</h3>
              <p>Keep your sliding and stacking doors in perfect condition.</p>
            </div>
            <div className="feature">
              <div className="icon-circle">
                <FaPalette />
              </div>
              <h3>Custom Designs</h3>
              <p>Bespoke aluminium solutions tailored to your vision.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Sections */}
      <section className="service-section conversion">
        <div className="container" id="services">
          <div className="service-content">
            <h2>Steel to Aluminium Window Conversion</h2>
            <p>Transform your windows with our expert conversion services. Enjoy improved aesthetics, energy efficiency, and security while utilizing your current window infrastructure.</p>
            <ul className="benefits-list">
              <li><span>✓</span> Modern aesthetic with sleek designs</li>
              <li><span>✓</span> Superior durability against rust and corrosion</li>
              <li><span>✓</span> Improved energy efficiency</li>
              <li><span>✓</span> Lightweight and easy maintenance</li>
              <li><span>✓</span> Cost-effective upgrade</li>
            </ul>
            <button className="secondary-button">Learn More</button>
          </div>
          <div className="service-image">
            {/* Image placeholder */}
          </div>
        </div>
      </section>

      <section className="service-section maintenance">
        <div className="container">
          <div className="service-image">
            {/* Image placeholder */}
          </div>
          <div className="service-content">
            <h2>Sliding & Stacking Door Maintenance</h2>
            <p>Ensure smooth operation and longevity with our comprehensive maintenance services for your aluminium doors.</p>
            <ul className="benefits-list">
              <li><span>✓</span> Smooth operation without sticking or jamming</li>
              <li><span>✓</span> Enhanced security with optimized locks</li>
              <li><span>✓</span> Improved durability against wear and tear</li>
              <li><span>✓</span> Cost savings through preventive care</li>
              <li><span>✓</span> Aesthetic preservation</li>
            </ul>
            <button className="secondary-button">Schedule Maintenance</button>
          </div>
        </div>
      </section>

      <section className="service-section custom">
        <div className="container">
          <div className="service-content">
            <h2>Custom Aluminium Designs</h2>
            <p>Create bespoke aluminium windows, doors, shower enclosures, and balustrades that perfectly complement your space.</p>
            <div className="design-features">
              <div className="design-feature">
                <h4>Durability</h4>
                <p>Resistant to corrosion and harsh weather conditions</p>
              </div>
              <div className="design-feature">
                <h4>Energy Efficiency</h4>
                <p>Excellent thermal insulation to reduce energy bills</p>
              </div>
              <div className="design-feature">
                <h4>Low Maintenance</h4>
                <p>Minimal upkeep required compared to other materials</p>
              </div>
              <div className="design-feature">
                <h4>Aesthetic Appeal</h4>
                <p>Wide range of finishes to match any architectural style</p>
              </div>
            </div>
            <button className="secondary-button">Start Your Design</button>
          </div>
          <div className="service-image">
            {/* Image placeholder */}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="container">
          <h2>Our Professional Process</h2>
          <div className="process-steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Consultation</h3>
              <p>We begin with understanding your needs and preferences</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Measurement & Design</h3>
              <p>Precise measurements and detailed designs for perfect fit</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Fabrication</h3>
              <p>High-quality materials crafted with state-of-the-art technology</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h3>Installation</h3>
              <p>Skilled installation ensuring smooth operation</p>
            </div>
            <div className="step">
              <div className="step-number">5</div>
              <h3>Aftercare</h3>
              <p>Comprehensive services to maintain your investment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container" id="contact">
          <h2>Contact Us Today</h2>
          <div className="contact-grid">
            <div className="contact-info">
              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <p>11 Melles Drive, Eldoraigne</p>
              </div>
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <p>admin@alulady.co.za</p>
              </div>
              <div className="contact-item">
                <FaPhone className="contact-icon" />
                <p>071 024 9222 / 060 315 4062</p>
              </div>
            </div>
            <form className="contact-form">
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <input type="tel" placeholder="Your Phone" />
              <textarea placeholder="Your Message" required></textarea>
              <button type="submit" className="cta-button">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <h3>Alu Lady</h3>
              <p>Elegance in Aluminium Solutions</p>
            </div>
            <div className="footer-links">
              <a href="#about">About</a>
              <a href="#services">Services</a>
              <a href="#contact">Contact</a>
            </div>
            <div className="footer-social">
              {/* Social icons would go here */}
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Alu Lady. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App3;