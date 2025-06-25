import React from 'react';
import './App4.css';
import { FaExchangeAlt, FaDoorOpen, FaPalette, FaTools, FaPhone, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

const App4 = () => {
  return (
    <div className="app dark-theme">
      {/* Hero Section */}
      <header className="hero">
        <div className="hero-content">
          <h1>Aluminium Excellence by Alu Lady</h1>
          <p>Where innovation meets elegance in aluminium solutions</p>
          <button className="cta-button">Discover More</button>
        </div>
      </header>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <div className="floating-card">
            <h2>About Us</h2>
            <p>Alu Lady is committed to empowering women and elevating home aesthetics. We specialize in high-quality aluminum products and offer comprehensive solutions including doors, windows, and commercial shopfronts.</p>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">
                  <FaExchangeAlt />
                </div>
                <h3>Conversions</h3>
                <p>Modernize with steel to aluminium window conversions</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  <FaTools />
                </div>
                <h3>Maintenance</h3>
                <p>Expert care for your sliding and stacking doors</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  <FaPalette />
                </div>
                <h3>Custom Designs</h3>
                <p>Bespoke aluminium solutions for your unique vision</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Sections */}
      <section className="service-section">
        <div className="container">
          <div className="floating-card large">
            <div className="service-content">
              <h2>Steel to Aluminium Window Conversion</h2>
              <p>Transform your windows with our expert conversion services. Enjoy improved aesthetics, energy efficiency, and security while utilizing your current window infrastructure.</p>
              <div className="benefits-grid">
                <div className="benefit">
                  <div className="benefit-icon">✓</div>
                  <h4>Superior Durability</h4>
                  <p>Resistant to rust and corrosion</p>
                </div>
                <div className="benefit">
                  <div className="benefit-icon">✓</div>
                  <h4>Energy Efficiency</h4>
                  <p>Reduce heat transfer and energy bills</p>
                </div>
                <div className="benefit">
                  <div className="benefit-icon">✓</div>
                  <h4>Easy Maintenance</h4>
                  <p>Lightweight and minimal upkeep</p>
                </div>
              </div>
              <button className="secondary-button">Learn More</button>
            </div>
          </div>
        </div>
      </section>

      <section className="service-section">
        <div className="container">
          <div className="floating-card large">
            <div className="service-content">
              <h2>Sliding & Stacking Door Maintenance</h2>
              <p>Ensure smooth operation and longevity with our comprehensive maintenance services for your aluminium doors.</p>
              <div className="benefits-grid">
                <div className="benefit">
                  <div className="benefit-icon">✓</div>
                  <h4>Smooth Operation</h4>
                  <p>Prevent sticking or jamming</p>
                </div>
                <div className="benefit">
                  <div className="benefit-icon">✓</div>
                  <h4>Enhanced Security</h4>
                  <p>Optimized locks and hinges</p>
                </div>
                <div className="benefit">
                  <div className="benefit-icon">✓</div>
                  <h4>Improved Durability</h4>
                  <p>Protect against wear and tear</p>
                </div>
                <div className="benefit">
                  <div className="benefit-icon">✓</div>
                  <h4>Cost Savings</h4>
                  <p>Avoid expensive repairs</p>
                </div>
              </div>
              <button className="secondary-button">Schedule Service</button>
            </div>
          </div>
        </div>
      </section>

      <section className="service-section">
        <div className="container">
          <div className="floating-card large">
            <div className="service-content">
              <h2>Custom Aluminium Designs</h2>
              <p>Create bespoke aluminium windows, doors, shower enclosures, and balustrades that perfectly complement your space.</p>
              <div className="design-grid">
                <div className="design-feature">
                  <h3>Durability</h3>
                  <p>Resistant to corrosion and harsh weather conditions</p>
                </div>
                <div className="design-feature">
                  <h3>Energy Efficiency</h3>
                  <p>Excellent thermal insulation to reduce energy bills</p>
                </div>
                <div className="design-feature">
                  <h3>Low Maintenance</h3>
                  <p>Minimal upkeep required</p>
                </div>
                <div className="design-feature">
                  <h3>Aesthetic Appeal</h3>
                  <p>Wide range of finishes and colors</p>
                </div>
              </div>
              <button className="secondary-button">Start Your Project</button>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="container">
          <div className="floating-card">
            <h2>Our Professional Process</h2>
            <div className="process-steps">
              <div className="step">
                <div className="step-number">1</div>
                <h3>Consultation</h3>
                <p>Understanding your needs and preferences</p>
              </div>
              <div className="step">
                <div className="step-number">2</div>
                <h3>Measurement & Design</h3>
                <p>Precise measurements for perfect fit</p>
              </div>
              <div className="step">
                <div className="step-number">3</div>
                <h3>Fabrication</h3>
                <p>High-quality materials and craftsmanship</p>
              </div>
              <div className="step">
                <div className="step-number">4</div>
                <h3>Installation</h3>
                <p>Skilled installation for optimal operation</p>
              </div>
              <div className="step">
                <div className="step-number">5</div>
                <h3>Aftercare</h3>
                <p>Comprehensive maintenance services</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <div className="floating-card large">
            <h2>Contact Us</h2>
            <div className="contact-content">
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
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Alu Lady. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App4;