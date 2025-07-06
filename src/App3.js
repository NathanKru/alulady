import React, { useState, useEffect } from 'react';
import './App3.css';
import { FaExchangeAlt, FaDoorOpen, FaPalette, FaTools, FaPhone, FaMapMarkerAlt, FaEnvelope, FaFacebook, FaWhatsapp, FaTimes, FaShieldAlt, FaLeaf, FaCog, FaStar, FaDollarSign } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const App3 = () => {
  const [showModal, setShowModal] = useState(false);
  const [showMoreContent, setShowMoreContent] = useState(false);
  const [modalType, setModalType] = useState('quote'); // 'quote' or 'maintenance'
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init("YOUR_EMAILJS_USER_ID"); // Replace with your actual EmailJS user ID
  }, []);

  const toggleModal = (type = 'quote') => {
    setModalType(type);
    setShowModal(!showModal);
    if (!showModal) {
      // Reset form when opening modal
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
      setSubmitStatus(null);
    }
  };

  const toggleMoreContent = () => {
    setShowMoreContent(!showMoreContent);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const templateParams = {
        to_name: 'Alu Lady Team',
        from_name: formData.name,
        from_email: formData.email,
        phone_number: formData.phone,
        service_type: formData.service,
        message: formData.message,
        request_type: modalType === 'maintenance' ? 'Maintenance Request' : 'Quote Request'
      };

      await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        templateParams
      );

      setSubmitStatus('success');
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
      
      // Close modal after 2 seconds
      setTimeout(() => {
        setShowModal(false);
        setSubmitStatus(null);
      }, 2000);

    } catch (error) {
      console.error('Email submission failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="app">
      {/* Mini Top Bar */}
      <div className="mini-top-bar">
        <div className="container">
          <div className="social-icons">
            <a href="#" aria-label="Facebook"><FaFacebook /></a>
            <a href="https://wa.me/27710249222" target="_blank" rel="noopener noreferrer" aria-label="Whatsapp"><FaWhatsapp /></a>
          </div>
          <button className="quote-button" onClick={() => toggleModal('quote')}>
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
              className="logo-image alu-lady-logo"
            />
          </div>
          <div className="logo-placeholder">
            <img
              src={`${process.env.PUBLIC_URL}/AAAMSALogo-small.png`}
              alt="AAAMSA "
              className="logo-image aaamsa-logo"
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
        <div className="modal-overlay" onClick={() => toggleModal()}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={() => toggleModal()}>
              <FaTimes />
            </button>
            <h3>{modalType === 'quote' ? 'Get a Quote' : 'Schedule Maintenance'}</h3>
            <form className="quote-form" onSubmit={handleSubmit}>
              <input type="text" name="name" placeholder="Your Name" required value={formData.name} onChange={handleInputChange} />
              <input type="email" name="email" placeholder="Your Email" required value={formData.email} onChange={handleInputChange} />
              <input type="tel" name="phone" placeholder="Phone Number" required value={formData.phone} onChange={handleInputChange} />
              <select name="service" required value={formData.service} onChange={handleInputChange}>
                <option value="">Select Service</option>
                <option value="conversion">Custom and Standard Aluminium Window & door designs </option>
                <option value="maintenance">Aluminium Shopfront Design & Installation Services </option>
                <option value="custom">Steel to Aluminium Window Conversion Services</option>
                <option value="custom">Frameless Shower Doors & Aluminium Balustrade Design & Installation</option>
                <option value="custom">Sliding and Stacking Aluminium Door Maintenance Services</option>
                <option value="custom">Maintenance Services</option>
              </select>
              <textarea name="message" placeholder="Project Details" required value={formData.message} onChange={handleInputChange}></textarea>
              <button type="submit" className="submit-button" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit Request'}
              </button>
              {submitStatus === 'success' && <p className="submit-status success">Thank you for your request! We will get back to you shortly.</p>}
              {submitStatus === 'error' && <p className="submit-status error">Failed to submit request. Please try again later.</p>}
            </form>
          </div>
        </div>
      )}
      {/* Hero Section */}
      <header className="hero" id="home">
        <div className="hero-content">
          <h1>Elevate Your Space with Aluminium Elegance</h1>
          <p class="white-text">Where innovation meets elegance in aluminium solutions</p>
          <button className="cta-button mx-3" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>Contact us</button>
          <button className="cta-button mx-3" onClick={() => toggleModal('quote')}>Get a Quote</button>
        </div>
      </header>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <h2>About Alu Lady</h2>
          <p>Alu Lady is committed to empowering women and elevating home aesthetics. We specialize in high-quality aluminum
             products and offer comprehensive solutions
            including doors, windows, and commercial shopfronts. We are proudly AAMSA-registered, ensuring our work meets the 
            highest industry standards.</p>
          
          {/* Certifications and Memberships */}
          <div className="certifications">
            <div className="certification-logos">
              <div className="certification-logo">
                <img
                  src={`${process.env.PUBLIC_URL}/AAAMSALogo-small.png`}
                  alt="AAAMSA Certified"
                  className="cert-logo"
                />
              </div>
              <div className="certification-logo">
                <img
                  src={`${process.env.PUBLIC_URL}/sagga.jpg`}
                  alt="SAGGA Member"
                  className="cert-logo"
                />
              </div>
            </div>
          </div>

          <div className="features-grid">
            <div className="feature">
              <div className="icon-circle">
                <FaDoorOpen />
              </div>
              <h3>Custom and Standard Aluminium Window and Door designs</h3>
              <p>Expertly crafted aluminium windows and doors, both custom and standard, to suit your needs.</p>
            </div>
            <div className="feature">
              <div className="icon-circle">
                <FaPalette />
              </div>
              <h3>Aluminium Shopfront Design & Installation Services</h3>
              <p>Bespoke aluminium solutions tailored to your vision.
                Expert team that specializes in designing and installing high-quality aluminium shopfronts</p>
            </div>
            <div className="feature">
              <div className="icon-circle">
                {/* Placeholder for shower/balustrade icon */}
                <FaStar />
              </div>
              <h3>Steel to Aluminium Window Conversion Services</h3>
              <p>Elegant frameless shower doors and modern aluminium balustrades, designed and installed to perfection.</p>
            </div>
            <div className="feature">
              <div className="icon-circle">
                <FaTools />
              </div>
              <h3>Frameless Shower Doors & Aluminium Balustrade Design & Installation</h3>
              <p>Keep your sliding and stacking doors in perfect condition with our expert maintenance services.</p>
            </div>
            <div className="feature">
              <div className="icon-circle">
                <FaCog />
              </div>
              <h3>Sliding and Stacking Aluminium Door Maintenance Services</h3>
              <p>Seamless and professional installation for all aluminium products, ensuring quality and durability.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Sections */}
      <section className="service-section conversion">
        <div className="container" id="services">
          <div className="service-content">
            <h2>Custom and Standard Aluminium Window and Door designs</h2>
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

      <section className="service-section conversion">
        <div className="container" id="services">
          <div className="service-content">
            <h2>Aluminium Shopfront Design & Installation Services</h2>
            <p> <b>Make a Powerful First Impression</b><br />
                  Your shopfront is the face of your business — it's the first thing customers see, and the last thing they remember.
                  At Alu Lady, our expert team specializes in designing and installing high-quality aluminium shopfronts that not only elevate your curb appeal 
                  but also provide <b>DURABILITY, SECURITY, AND ENERGY EFFICIENCY</b>.</p>
              <h4>Why Choose Aluminium?</h4>
              <p>
                  Aluminium is the ideal choice for modern businesses looking for a <b>SLEEK, PROFESSIONAL, AND LOW-MAINTENANCE</b> solution. It's strong, lightweight,
                  and naturally resistant to corrosion — making it perfect for high-traffic retail and commercial environments.
              </p>
            <div className="benefits-list">
              <div className="benefit-item">
                <div className="benefit-header">
                  <img src={`${process.env.PUBLIC_URL}/Icons/modernaesthetic.png`} alt="modern aesthetic" className="benefit-icon" />
                  <h5>Modern Appearance</h5>
                </div>
                <p>Professional, sleek look that enhances your brand with a modern, professional appearance</p>
              </div>
              <div className="benefit-item">
                <div className="benefit-header">
                  <img src={`${process.env.PUBLIC_URL}/Icons/Durability.png`} alt="DurabilityEnergy Efficiency" className="benefit-icon" />
                  <h5>Durability</h5>
                </div>
                <p>Long-lasting and weather-resistant materials</p>
              </div>
              <div className="benefit-item">
                <div className="benefit-header">
                  <img src={`${process.env.PUBLIC_URL}/Icons/energy-efficiency.png`} alt="energy-efficiency" className="benefit-icon" />
                  <h5>Energy Efficiency</h5>
                </div>
                <p>Energy-efficient and thermally broken frames available</p>
              </div>
              <div className="benefit-item">
                <div className="benefit-header">
                  <img src={`${process.env.PUBLIC_URL}/Icons/customdesign.png`} alt="Customisation" className="benefit-icon" />
                  <h5>Customisation</h5>
                </div>
                <p>Wide range of colours, finishes, and glazing options</p>
              </div>
              <div className="benefit-item">
                <div className="benefit-header">
                  <img src={`${process.env.PUBLIC_URL}/Icons/security.png`} alt="security" className="benefit-icon" />
                  <h5>Security & Automation</h5>
                </div>
                <p>Compatible with automatic doors and security systems</p>
              </div>
            </div>
            <button className="secondary-button">Learn More</button>
          </div>
          <div className="service-image">
            <img src={`${process.env.PUBLIC_URL}/bg3.jpg`} alt="Alu Lady Example" className="service-img" />
          </div>
        </div>
      </section>

     

      <section className="process-section">
        <div className="container">
          <h2 class="pink-text">Our Shopfront Services</h2>
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
            <h2>Steel to Aluminium Window Conversion Services</h2>
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
          <h2 class="pink-text">Our Window Conversion Process</h2>
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
                <div className="step-icon" style={{ background: '#ffffff', borderRadius: '50%' }}>
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
                <div className="step-icon" style={{ background: '#ffffff', borderRadius: '50%' }}>
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
                <div className="step-icon" style={{ background: '#ffffff', borderRadius: '50%' }}>
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
                <div className="step-icon" style={{ background: '#ffffff', borderRadius: '50%' }}>
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
            <h2>Frameless Shower Doors & Aluminium Balustrade Design & Installation</h2>
            <h3>Sleek. Modern. Expertly Installed.</h3>
            <p>At Alu Lady, we specialise in custom-designed frameless shower doors and aluminium balustrades — delivering clean lines, high-end finishes, and long-lasting functionality for both residential and commercial spaces.</p>
            <div className="frameless-section">
              <h3>Frameless Shower Doors</h3>
              <h4>Minimal Design, Maximum Impact</h4>
              <p>Our frameless glass shower doors bring elegance and simplicity to any bathroom. With no bulky frames to distract the eye, these doors create a spacious, open feel while highlighting your tilework and fixtures.</p>
              
              <h5>Why Choose Frameless Glass Showers?</h5>
              <ol>
                <li>Clean, modern aesthetic</li>
                <li>Space-enhancing and light-maximising</li>
                <li>Easy to clean & low maintenance</li>
                <li>High-quality toughened safety glass</li>
                <li>Custom sizing to fit any shower area</li>
              </ol>
              <button 
                className="read-more-button" 
                onClick={toggleMoreContent}
                style={{
                  backgroundColor: 'black',
                  color: '#ff69b4',
                  border: 'none',
                  padding: '10px 20px',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: 'bold',
                  marginTop: '15px',
                  marginBottom: '20px'
                }}
              >
                {showMoreContent ? 'Read Less' : 'Read More'}
              </button>
            </div>
            {showMoreContent && (
              <>
                <div className="frameless-services">
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
                <div className= "tailored-business-types" style={{ textAlign: 'center' }}>
                  <h4>Why Choose Alu Lady?</h4>
                  <ul className="text-white">
                    <li className="text-white">Fully qualified and experienced installers</li>
                      <li className="text-white">Premium materials and components</li>
                      <li className="text-white">Customised solutions for every space</li>
                      <li className="text-white">Local expertise and friendly service</li>
                      <li className="text-white">Transparent pricing and free quotes</li>
                  </ul>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      <section className="service-section maintenance">
        <div className="container">
          <div className="service-image">
            <img src={`${process.env.PUBLIC_URL}/b2.jpg`} alt="Alu Lady Example" className="service-img" />
          </div>
          <div className="service-content">
            <h2>Sliding and Stacking Aluminium Door Maintenance Services</h2>
            <p>Ensure Smooth Operation and Longevity with Expert Maintenance</p>
            <p>At Alu Lady, we provide <b>COMPREHENSIVE MAINTENANCE SERVICES</b> for sliding and stacking aluminium doors, helping you keep your doors operating 
                seamlessly and looking their best. Regular maintenance not only prolongs the life of your doors but also <b>ENHANCES THEIR SECURITY, FUNCTIONALITY, 
                AND AESTHETIC APPEAL</b>.</p>
                <h4 >Why Regular Maintenance for Aluminium Doors?</h4>
            <div className="installation-steps">
              <div className="installation-step">
                <div className="installation-header">
                  <img src={`${process.env.PUBLIC_URL}/Icons/smooth-operation.png`} alt="smooth-operation" className="benefit-icon" />
                  <h5>Smooth Operation</h5>
                </div>
                <p>Prevents sticking, jamming, or misalignment issues.</p>
              </div>
              <div className="installation-step">
                <div className="installation-header">
                  <img src={`${process.env.PUBLIC_URL}/Icons/security.png`} alt="Enhanced Security" className="benefit-icon" />
                  <h5>Enhanced Security</h5>
                </div>
                <p>Keeps locks, hinges, and rollers in optimal condition.</p>
              </div>
              <div className="installation-step">
                <div className="installation-header">
                  <img src={`${process.env.PUBLIC_URL}/Icons/Durability.png`} alt="Durability" className="benefit-icon" />
                  <h5>Improved Durability</h5>
                </div>
                <p>Protects against corrosion, dirt, and debris that can cause wear and tear.</p>
              </div>
              <div className="installation-step">
                <div className="installation-header">
                  <img src={`${process.env.PUBLIC_URL}/Icons/CostEffective.png`} alt="CostEffective" className="benefit-icon" />
                  <h5>Cost Savings</h5>
                </div>
                <p>Avoid costly repairs or replacements through timely upkeep.</p>
              </div>
              <div className="installation-step">
                <div className="installation-header">
                  <img src={`${process.env.PUBLIC_URL}/Icons/modernaesthetic.png`} alt="aesthetic" className="benefit-icon" />
                  <h5>Aesthetic Preservation</h5>
                </div>
                <p>Maintains the sleek appearance of your doors.</p>
              </div>
            </div>
           
          </div>
        </div>
      </section>
      <section className="process-section">
        <div className="container">
          <h3 class="pink-text">Our Maintenance Services Include</h3>
          <div className="process-steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3><b>Inspection & Assessment:</b></h3>
              <p> We thoroughly examine your sliding and stacking aluminium doors to identify potential issues.</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Cleaning & Lubrication:</h3>
              <p> We clean tracks, rollers, hinges, and locking mechanisms, and apply high-quality lubricants to ensure smooth movement.</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Adjustment & Alignment:</h3>
              <p> We realign doors and hardware to prevent gaps, noise, and operational problems.</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h3>Seal & Weatherstripping Checks:</h3>
              <p>We inspect and replace seals to ensure proper insulation and weather protection.</p>
            </div>
            <div className="step">
              <div className="step-number">5</div>
              <h3>Hardware Replacement:</h3>
              <p>We replace worn-out rollers, locks, handles, or any damaged components.</p>
            </div>
            <div className="step">
              <div className="step-number">6</div>
              <h3>Preventive Maintenance Tips:</h3>
              <p>We provide guidance on best practices to keep your doors functioning perfectly between professional services.</p>
            </div>
          </div><div className="tailored-business-types">
            <h4>Why Choose Alu Lady?</h4>
            <ul>
              <li>Experienced technicians specializing in aluminium door maintenance</li>
              <li>Prompt, reliable, and professional service</li>
              <li>Use of high-quality parts and materials</li>
              <li>Tailored maintenance plans to suit your specific doors and usag</li>
            </ul>
          </div>

        </div>
        <button className="secondary-button" onClick={() => toggleModal('maintenance')}>Schedule Your Maintenance Today</button>
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