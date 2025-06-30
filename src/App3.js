import React, { useState } from 'react';
import './App3.css';
import { FaExchangeAlt, FaDoorOpen, FaPalette, FaTools, FaPhone, FaMapMarkerAlt, FaEnvelope, FaFacebook, FaWhatsapp, FaTimes, FaShieldAlt, FaLeaf, FaCog, FaStar, FaDollarSign } from 'react-icons/fa';

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
              src={`${process.env.PUBLIC_URL}/logo.png`} 
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
      <header className="hero"  id="home">
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
                <FaDoorOpen />
              </div>
              <h3>1. Custom and Standard Aluminium Window and Door</h3>
              <p>Expertly crafted aluminium windows and doors, both custom and standard, to suit your needs.</p>
            </div>
            <div className="feature">
              <div className="icon-circle">
                <FaPalette />
              </div>
              <h3>2. Custom Designs</h3>
              <p>Bespoke aluminium solutions tailored to your vision.</p>
            </div>
            <div className="feature">
              <div className="icon-circle">
                {/* Placeholder for shower/balustrade icon */}
                <FaStar />
              </div>
              <h3>3. Frameless Shower Doors &amp; Aluminium Balustrade Design &amp; Installation</h3>
              <p>Elegant frameless shower doors and modern aluminium balustrades, designed and installed to perfection.</p>
            </div>
            <div className="feature">
              <div className="icon-circle">
                <FaTools />
              </div>
              <h3>4. Sliding and Stacking Aluminium Door Maintenance Services</h3>
              <p>Keep your sliding and stacking doors in perfect condition with our expert maintenance services.</p>
            </div>
            <div className="feature">
              <div className="icon-circle">
                <FaCog />
              </div>
              <h3>5. Professional Installation Services</h3>
              <p>Seamless and professional installation for all aluminium products, ensuring quality and durability.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Sections */}
      <section className="service-section conversion">
        <div className="container" id="services">
          <div className="service-content">
            <h2>1.Custom and Standard Aluminium Window and
                Door</h2>
                <p> At Alu Lady, we specialize in creating bespoke aluminium window and door designs that
                perfectly complement your home or business. Our custom designs are not only
                AESTHETICALLY PLEASING but also offer superior DURABILITY AND ENERGY
                EFFICIENCY. Whether you&#39;re looking for sleek, modern lines or a more traditional look, our
                team of expert designers will work with you to BRING YOUR VISION TO LIFE.</p>

            <h4>Why choose aluminium?</h4>
            <p>Aluminium is a VERSATILE AND SUSTAINABLE material that offers numerous benefits:</p>
            <div className="benefits-list">
              <div className="benefit-item">
                <div className="benefit-header">
                  <img src={`${process.env.PUBLIC_URL}/Icons/Durability.png`} alt="Durability" className="benefit-icon" />
                  <h5>Durability</h5>
                </div>
                <p>Aluminium is resistant to corrosion and can withstand harsh weather conditions, ensuring your windows and doors last for years.</p>
              </div>
              <div className="benefit-item">
                <div className="benefit-header">
                  <img src={`${process.env.PUBLIC_URL}/Icons/energy-efficiency.png`} alt="Energy Efficiency" className="benefit-icon" />
                  <h5>Energy Efficiency</h5>
                </div>
                <p>Our aluminium frames are designed to provide excellent thermal insulation, helping to reduce your energy bills.</p>
              </div>
              <div className="benefit-item">
                <div className="benefit-header">
                  <img src={`${process.env.PUBLIC_URL}/Icons/low-maintenance.png`} alt="Low Maintenance" className="benefit-icon" />
                  <h5>Low Maintenance</h5>
                </div>
                <p>Unlike other materials, aluminium requires minimal upkeep, saving you time and money.</p>
              </div>
              <div className="benefit-item">
                <div className="benefit-header">
                  <img src={`${process.env.PUBLIC_URL}/Icons/modernaesthetic.png`} alt="Aesthetic Appeal" className="benefit-icon" />
                  <h5>Aesthetic Appeal</h5>
                </div>
                <p>With a wide range of finishes and colours available, aluminium windows and doors can be customized to match any architectural style.</p>
              </div>
            </div>
            <button className="secondary-button">Learn More</button>
          </div>
          <div className="service-image">
            <img src={`${process.env.PUBLIC_URL}/bg1.jpg`} alt="Alu Lady Example" className="service-img" />
          </div>
        </div>
      </section>

      <section className="service-section maintenance">
        <div className="container">
          <div className="service-image">
          <img src={`${process.env.PUBLIC_URL}/b2.jpg`} alt="Alu Lady Example" className="service-img" />
          </div>
          <div className="service-content">
            <h2>Professional Installation Services</h2>
            <p>At Alu Lady, we don't just design your windows and doors – we also offer professional installation services to <b>ENSURE A PERFECT FIT AND FINISH</b>. Our experienced installation team is dedicated to providing a <b>HASSLE-FREE EXPERIENCE</b>, from start to finish.</p>
            <h4>Our Installation Process</h4>
            <div className="installation-steps">
              <div className="installation-step">
                <div className="installation-header">
                  <img src={`${process.env.PUBLIC_URL}/Icons/colsultation.png`} alt="Consultation" className="benefit-icon" />
                  <h5>Consultation</h5>
                </div>
                <p>We begin with a thorough consultation to understand your needs and preferences.</p>
              </div>
              <div className="installation-step">
                <div className="installation-header">
                  <img src={`${process.env.PUBLIC_URL}/Icons/customdesign.png`} alt="Measurement and Design" className="benefit-icon" />
                  <h5>Measurement and Design</h5>
                </div>
                <p>Our team will take precise measurements and create detailed designs to ensure a perfect fit.</p>
              </div>
              <div className="installation-step">
                <div className="installation-header">
                  <img src={`${process.env.PUBLIC_URL}/Icons/fabrication.png`} alt="Fabrication" className="benefit-icon" />
                  <h5>Fabrication</h5>
                </div>
                <p>Using high-quality materials and state-of-the-art technology, we fabricate your custom windows and doors.</p>
              </div>
              <div className="installation-step">
                <div className="installation-header">
                  <img src={`${process.env.PUBLIC_URL}/Icons/Installation.png`} alt="Installation" className="benefit-icon" />
                  <h5>Installation</h5>
                </div>
                <p>Our skilled installers will carefully fit your new windows and doors, ensuring they operate smoothly and securely.</p>
              </div>
              <div className="installation-step">
                <div className="installation-header">
                  <img src={`${process.env.PUBLIC_URL}/Icons/aftercare.png`} alt="Aftercare" className="benefit-icon" />
                  <h5>Aftercare</h5>
                </div>
                <p>We provide comprehensive aftercare services to keep your windows and doors in top condition.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-section shopfront">
        <div className="container">
          <div className="service-image">
            <img src={`${process.env.PUBLIC_URL}/bg1.jpg`} alt="Aluminium Shopfront Example" className="service-img" />
          </div>
          <div className="service-content">
            <h2>Aluminium Shopfront Design & Installation Services</h2>
            <p>
              <b>Make a Powerful First Impression</b><br />
              Your shopfront is the face of your business — it's the first thing customers see, and the last thing they remember. At Alu Lady, our expert team specializes in designing and installing high-quality aluminium shopfronts that not only elevate your curb appeal but also provide <b>DURABILITY, SECURITY, AND ENERGY EFFICIENCY</b>.
            </p>
            <h4>Why Choose Aluminium?</h4>
            <p>
              Aluminium is the ideal choice for modern businesses looking for a <b>SLEEK, PROFESSIONAL, AND LOW-MAINTENANCE</b> solution. It's strong, lightweight, and naturally resistant to corrosion — making it perfect for high-traffic retail and commercial environments.
            </p>
            <div className="design-features">
              <div className="design-feature">
                <div className="design-feature-header">
                  <img src={`${process.env.PUBLIC_URL}/Icons/modernaesthetic.png`} alt="Modern Appearance" className="benefit-icon benefit-icon-white" />
                  <h4>Modern Appearance</h4>
                </div>
                <p>Professional, sleek look that enhances your brand</p>
              </div>
              <div className="design-feature">
                <div className="design-feature-header">
                  <img src={`${process.env.PUBLIC_URL}/Icons/Durability.png`} alt="Durability" className="benefit-icon benefit-icon-white" />
                  <h4>Durability</h4>
                </div>
                <p>Long-lasting and weather-resistant materials</p>
              </div>
              <div className="design-feature">
                <div className="design-feature-header">
                  <img src={`${process.env.PUBLIC_URL}/Icons/energy-efficiency.png`} alt="Energy Efficiency" className="benefit-icon benefit-icon-white" />
                  <h4>Energy Efficiency</h4>
                </div>
                <p>Thermally broken frames available for better insulation</p>
              </div>
              <div className="design-feature">
                <div className="design-feature-header">
                  <img src={`${process.env.PUBLIC_URL}/Icons/customdesign.png`} alt="Customisation" className="benefit-icon benefit-icon-white" />
                  <h4>Customisation</h4>
                </div>
                <p>Wide range of colours, finishes, and glazing options</p>
              </div>
              <div className="design-feature">
                <div className="design-feature-header">
                  <img src={`${process.env.PUBLIC_URL}/Icons/security.png`} alt="Security & Automation" className="benefit-icon benefit-icon-white" />
                  <h4>Security & Automation</h4>
                </div>
                <p>Compatible with automatic doors and security systems</p>
              </div>
            </div>
            <button className="secondary-button">Get a Shopfront Quote</button>
          </div>
        </div>
      </section>

      <section className="process-section">
        <div className="container">
          <h2>Our Services</h2>
          <div className="process-steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Bespoke Design</h3>
              <p>We work closely with you to create a shopfront that reflects your brand and fits seamlessly with your building's architecture. Whether you need a minimalist look or something bold and eye-catching, we can bring your vision to life.</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Precision Fabrication</h3>
              <p>Our aluminium shopfronts are crafted using high-grade materials and precision engineering to ensure the perfect fit and finish every time.</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Professional Installation</h3>
              <p>Our experienced installers ensure every shopfront is fitted safely, efficiently, and with minimal disruption to your business operations.</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h3>Maintenance & Repairs</h3>
              <p>We also offer ongoing maintenance and repair services to keep your shopfront looking and functioning its best.</p>
            </div>
          </div>
          <div className="tailored-business-types">
            <h4>Tailored for All Business Types</h4>
            <ul>
              <li>Retail stores</li>
              <li>Restaurants and cafes</li>
              <li>Offices and commercial buildings</li>
              <li>Shopping centres</li>
              <li>Showrooms</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="service-section conversion">
        <div className="container" id="services">
          <div className="service-content">
            <h2>3. Steel to Aluminium Window Conversion Services</h2>
            <p><b>Transform Your Windows with Expert Steel to Aluminium Conversion</b></p>
            <p>At Alu Lady, we specialize in converting existing steel-framed windows into <b>DURABLE, STYLISH</b> aluminium windows. Our steel to aluminium window conversion services provide a <b>COST-EFFECTIVE</b> way to enhance your property's aesthetic appeal, improve <b>ENERGY EFFICIENCY</b>, and <b>INCREASE SECURITY</b>—all while <b>UTILIZING YOUR CURRENT WINDOW INFRASTRUCTURE</b>.</p>
            <h4>Why Convert Steel Windows to Aluminium?</h4>
            <div className="benefits-list">
              <div className="benefit-item">
                <div className="benefit-header">
                  <img src={`${process.env.PUBLIC_URL}/Icons/modernaesthetic.png`} alt="Modern Aesthetic" className="benefit-icon" />
                  <h5>Modern Aesthetic</h5>
                </div>
                <p>Aluminium frames offer sleek, contemporary designs that enhance your building's appearance.</p>
              </div>
              <div className="benefit-item">
                <div className="benefit-header">
                  <img src={`${process.env.PUBLIC_URL}/Icons/Durability.png`} alt="Superior Durability" className="benefit-icon" />
                  <h5>Superior Durability</h5>
                </div>
                <p>Aluminium is resistant to rust, corrosion, and weathering, ensuring long-lasting performance in all climates.</p>
              </div>
              <div className="benefit-item">
                <div className="benefit-header">
                  <img src={`${process.env.PUBLIC_URL}/Icons/energy-efficiency.png`} alt="Improved Energy Efficiency" className="benefit-icon" />
                  <h5>Improved Energy Efficiency</h5>
                </div>
                <p>Aluminium windows with modern glazing options can significantly reduce heat transfer, lowering your energy bills.</p>
              </div>
              <div className="benefit-item">
                <div className="benefit-header">
                  <img src={`${process.env.PUBLIC_URL}/Icons/low-maintenance.png`} alt="Lightweight and Easy Maintenance" className="benefit-icon" />
                  <h5>Lightweight & Easy Maintenance</h5>
                </div>
                <p>Aluminium frames are lighter than steel, making installation easier, and they require minimal upkeep.</p>
              </div>
              <div className="benefit-item">
                <div className="benefit-header">
                  <img src={`${process.env.PUBLIC_URL}/Icons/CostEffective.png`} alt="Cost-Effective Upgrade" className="benefit-icon" />
                  <h5>Cost-Effective Upgrade</h5>
                </div>
                <p>Replacing old steel frames with aluminium allows you to upgrade your windows without the expense of complete window replacement.</p>
              </div>
            </div>
          </div>
          <div className="service-image">
            <img src={`${process.env.PUBLIC_URL}/alulady1.jpg`} alt="Steel to Aluminium Conversion Example" className="service-img" />
          </div>
        </div>
      </section>
      
      {/* Our Window Conversion Process */}
      <section className="process-section">
        <div className="container">
          <h2>Our Window Conversion Process</h2>
          <div className="process-steps">
            <div className="process-row">
              <div className="step">
                <div className="step-icon" style={{ background: '#ffffff', borderRadius: '50%' }}>
                  <img
                    src={`${process.env.PUBLIC_URL}/Icons/Initialinspection.png`}
                    alt="Initial Assessment"
                    className="process-icon"
                  />
                </div>
                <h4>Initial Assessment</h4>
                <p>
                  We evaluate your existing steel window frames to determine compatibility and scope of the conversion.
                </p>
              </div>
              <div className="step">
                <div className="step-icon" style={{ background: '#ffffff', borderRadius: '50%' }}>
                  <img
                    src={`${process.env.PUBLIC_URL}/Icons/customdesign.png`}
                    alt="Design & Customization"
                    className="process-icon"
                  />
                </div>
                <h4>Design &amp; Customization</h4>
                <p>
                  Our experts craft custom aluminium frame solutions that match your aesthetic preferences and functional needs.
                </p>
              </div>
              <div className="step">
                <div className="step-icon" style={{ background: '#f277c6', borderRadius: '50%' }}>
                  <img
                    src={`${process.env.PUBLIC_URL}/Icons/window.png`}
                    alt="Preparation & Removal"
                    className="process-icon"
                  />
                </div>
                <h4>Preparation &amp; Removal</h4>
                <p>
                  We carefully remove the old steel frames, ensuring minimal disruption to your property.
                </p>
              </div>
            </div>
            <div className="process-row">
              <div className="step">
                <div className="step-icon" style={{ background: '#f277c6', borderRadius: '50%' }}>
                  <img
                    src={`${process.env.PUBLIC_URL}/Icons/steeltoaluminium.png`}
                    alt="Conversion & Installation"
                    className="process-icon"
                  />
                </div>
                <h4>Conversion &amp; Installation</h4>
                <p>
                  Using precision techniques, we install the new aluminium frames, ensuring a perfect and secure fit.
                </p>
              </div>
              <div className="step">
                <div className="step-icon" style={{ background: '#f277c6', borderRadius: '50%' }}>
                  <img
                    src={`${process.env.PUBLIC_URL}/Icons/Finaltouch.png`}
                    alt="Finishing Touches"
                    className="process-icon"
                  />
                </div>
                <h4>Finishing Touches</h4>
                <p>
                  We complete the process with high-quality seals and finishes for optimal insulation and appearance.
                </p>
              </div>
              <div className="step">
                <div className="step-icon" style={{ background: '#f277c6', borderRadius: '50%' }}>
                  <img
                    src={`${process.env.PUBLIC_URL}/Icons/finalinpection.png`}
                    alt="Final Inspection"
                    className="process-icon"
                  />
                </div>
                <h4>Final Inspection</h4>
                <p>
                  Our team thoroughly inspects each window to guarantee performance, aesthetics, and safety.
                </p>
              </div>
            </div>
          </div>
          <div className="tailored-business-types">
            <h4>Why Choose Alu Lady?</h4>
            <ul>
              <li>Experienced specialists in window conversion projects</li>
              <li>High-quality aluminium materials and components</li>
              <li>Customized solutions tailored to your building's needs</li>
              <li>Commitment to efficiency, safety, and customer satisfaction</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="service-section custom">
        <div className="container">
          <div className="service-content">
            <h2>4. Frameless Shower Doors & Aluminium Balustrade Design & Installation</h2>
            <h3>Sleek. Modern. Expertly Installed.</h3>
            <p>At Alu Lady, we specialise in custom-designed frameless shower doors and aluminium balustrades — delivering clean lines, high-end finishes, and long-lasting functionality for both residential and commercial spaces.</p>
            <div className="frameless-section">
              <h3>Frameless Shower Doors</h3>
              <h4>Minimal Design, Maximum Impact</h4>
              <p>Our frameless glass shower doors bring elegance and simplicity to any bathroom. With no bulky frames to distract the eye, these doors create a spacious, open feel while highlighting your tilework and fixtures.</p>
              <h5>Why Choose Frameless Glass Showers?</h5>
              <ul>
                <li>Clean, modern aesthetic</li>
                <li>Space-enhancing and light-maximising</li>
                <li>Easy to clean & low maintenance</li>
                <li>High-quality toughened safety glass</li>
                <li>Custom sizing to fit any shower area</li>
              </ul>
              <h5>Our Services Include:</h5>
              <ul>
                <li>Bespoke design & layout consultation</li>
                <li>Precision measuring & fabrication</li>
                <li>Expert installation with durable hardware</li>
                <li>Optional glass treatments for water & stain resistance</li>
              </ul>
              <p>Whether it's a walk-in, corner, or over-bath setup, we'll tailor a frameless solution that fits your space perfectly.</p>
            </div>
            <div className="balustrade-section">
              <h3>Aluminium Balustrades</h3>
              <h4>Strong. Stylish. Built to Last.</h4>
              <p>Our aluminium balustrades combine safety with style, ideal for balconies, staircases, terraces, and commercial spaces. Lightweight yet extremely durable, aluminium resists rust and requires minimal upkeep — making it a smart choice for indoor and outdoor applications.</p>
              <h5>Features & Benefits:</h5>
              <ul>
                <li>Weather-resistant and corrosion-free</li>
                <li>Sleek powder-coated finishes in a range of colours</li>
                <li>Modern or classic designs available</li>
                <li>Custom configurations to suit any layout</li>
                <li>Compliant with safety and building codes</li>
              </ul>
              <h5>Applications:</h5>
              <ul>
                <li>Residential balconies & decks</li>
                <li>Staircases and mezzanines</li>
                <li>Commercial buildings & complexes</li>
                <li>Pool fencing and safety barriers</li>
              </ul>
              <h5>Our Full-Service Offering Includes:</h5>
              <ul>
                <li>Design consultation and compliance advice</li>
                <li>High-quality fabrication</li>
                <li>Fast, safe, and professional installation</li>
              </ul>
            </div>
            <div className="why-choose-alu-lady">
              <h4>Why Choose Alu Lady?</h4>
              <ul>
                <li>Fully qualified and experienced installers</li>
                <li>Premium materials and components</li>
                <li>Customised solutions for every space</li>
                <li>Local expertise and friendly service</li>
                <li>Transparent pricing and free quotes</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Services section */}
      <section className="service-section maintenance-services">
        <div className="container">
          <div className="service-content" style={{ textAlign: 'center', margin: '0 auto' }}>
            <h2 style={{ textAlign: 'center' }}>5. Sliding and Stacking Aluminium Door Maintenance Services</h2>
            <h3 style={{ textAlign: 'center' }}>Ensure Smooth Operation and Longevity with Expert Maintenance</h3>
            <p>
              At Alu Lady, we provide <b>COMPREHENSIVE MAINTENANCE SERVICES</b> for sliding and stacking aluminium doors, helping you keep your doors operating seamlessly and looking their best. Regular maintenance not only prolongs the life of your doors but also <b>ENHANCES THEIR SECURITY, FUNCTIONALITY, AND AESTHETIC APPEAL</b>.
            </p>
            <h4 style={{ textAlign: 'center' }}>Why Regular Maintenance for Aluminium Doors?</h4>
            <div className="benefits-list" style={{ justifyContent: 'center', display: 'flex', flexWrap: 'wrap', gap: '24px' }}>
              <div className="benefit-item" style={{ flex: '0 1 200px', textAlign: 'center' }}>
                <div className="benefit-header" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <img src={`${process.env.PUBLIC_URL}/Icons/smooth-operation.png`} alt="Smooth Operation" className="benefit-icon" style={{ display: 'block', margin: '0 auto' }} />
                  <h5 style={{ textAlign: 'center' }}>Smooth Operation</h5>
                </div>
                <p>Prevents sticking, jamming, or misalignment issues.</p>
              </div>
              <div className="benefit-item" style={{ flex: '0 1 200px', textAlign: 'center' }}>
                <div className="benefit-header" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <img src={`${process.env.PUBLIC_URL}/Icons/security.png`} alt="Enhanced Security" className="benefit-icon" style={{ display: 'block', margin: '0 auto' }} />
                  <h5 style={{ textAlign: 'center' }}>Enhanced Security</h5>
                </div>
                <p>Keeps locks, hinges, and rollers in optimal condition.</p>
              </div>
              <div className="benefit-item" style={{ flex: '0 1 200px', textAlign: 'center' }}>
                <div className="benefit-header" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <img src={`${process.env.PUBLIC_URL}/Icons/Durability.png`} alt="Improved Durability" className="benefit-icon" style={{ display: 'block', margin: '0 auto' }} />
                  <h5 style={{ textAlign: 'center' }}>Improved Durability</h5>
                </div>
                <p>Protects against corrosion, dirt, and debris that can cause wear and tear.</p>
              </div>
              <div className="benefit-item" style={{ flex: '0 1 200px', textAlign: 'center' }}>
                <div className="benefit-header" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <img src={`${process.env.PUBLIC_URL}/Icons/CostEffective.png`} alt="Cost Savings" className="benefit-icon" style={{ display: 'block', margin: '0 auto' }} />
                  <h5 style={{ textAlign: 'center' }}>Cost Savings</h5>
                </div>
                <p>Avoid costly repairs or replacements through timely upkeep.</p>
              </div>
              <div className="benefit-item" style={{ flex: '0 1 200px', textAlign: 'center' }}>
                <div className="benefit-header" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <img src={`${process.env.PUBLIC_URL}/Icons/modernaesthetic.png`} alt="Aesthetic Preservation" className="benefit-icon" style={{ display: 'block', margin: '0 auto' }} />
                  <h5 style={{ textAlign: 'center' }}>Aesthetic Preservation</h5>
                </div>
                <p>Maintains the sleek appearance of your doors.</p>
              </div>
            </div>
            <h4 class="pt-5" style={{ textAlign: 'center' }}>Our Maintenance Services Include</h4>
            <ul style={{ display: 'inline-block', textAlign: 'left' }}>
              <li><b>Inspection & Assessment:</b> We thoroughly examine your sliding and stacking aluminium doors to identify potential issues.</li>
              <li><b>Cleaning & Lubrication:</b> We clean tracks, rollers, hinges, and locking mechanisms, and apply high-quality lubricants to ensure smooth movement.</li>
              <li><b>Adjustment & Alignment:</b> We realign doors and hardware to prevent gaps, noise, and operational problems.</li>
              <li><b>Seal & Weatherstripping Checks:</b> We inspect and replace seals to ensure proper insulation and weather protection.</li>
              <li><b>Hardware Replacement:</b> We replace worn-out rollers, locks, handles, or any damaged components.</li>
              <li><b>Preventive Maintenance Tips:</b> We provide guidance on best practices to keep your doors functioning perfectly between professional services.</li>
            </ul>
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