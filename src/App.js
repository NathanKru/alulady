import './App.css';

function App() {
  const services = [
    {
      icon: '/door.png',
      title: 'Steel to Aluminium Conversions',
      description:
        'Upgrade your home or business by converting outdated steel windows and doors into sleek, durable aluminum frames.',
      image: '/door-large.png', // add a bigger image for detailed section
    },
    {
      icon: '/main.png',
      title: 'Sliding & Stacking Door Maintenance',
      description:
        'Ensure smooth operation and extended lifespan of your sliding and stacking doors with expert maintenance services.',
      image: '/main-large.png',
    },
    {
      icon: '/icon3.png',
      title: 'Custom Designs & Installations',
      description:
        'We bring your ideas to life with custom aluminum solutions tailored to your specific style and functional needs.',
      image: '/b2.jpg',
    },
    {
      icon: '/icon7.png',
      title: 'Elegant Finishes & Detailing',
      description:
        'Achieve a polished, luxurious look with our refined finishing techniques and attention to detail in every installation.',
      image: '/bg1.jpg',
    },
  ];

  return (
    <div className="app">
      {/* NAVIGATION */}
      <nav className="navbar">
        <div className="navbar-container">
          <div className="logo">Alu Lady</div>
          <ul className="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
          <button className="btn-outline">Request a Quote</button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <div className="hero-section">
        <img src="/bg1.jpg" alt="Hero" className="hero-image" />
        <div className="hero-text">
          <p>We are the leaders in custom aluminum solutions</p>
          <button className="btn-solid">Request a Quote</button>
          <h4>OR</h4>
          <button className="btn-solid">Arrange a Call Out</button>
        </div>
      </div>

      {/* ABOUT SECTION */}
      <section className="about-section">
        <h1>Get to Know Us</h1>
        <p>
          Alu Lady is committed to empowering women and elevating home aesthetics. We specialize in high-quality aluminum products including doors, windows, and commercial shopfronts.
        </p>
        <p>
          Our team of skilled artisans and installers ensures meticulous craftsmanship and seamless installation. We pride ourselves on exceptional customer service.
        </p>
        <p>
          By combining affordability with premium quality, we offer tailored solutions to enhance your space — elegant, durable, and customer-focused.
        </p>
      </section>

      {/* SERVICES ICONS SECTION (Background with icons) */}
      {/* <section className="services-icons-section" style={{ backgroundImage: `url(/b2.jpg)` }}>
        <div className="overlay icons-overlay">
          {services.map(({ icon, title }, i) => (
            <div className="service-icon" key={i} title={title}>
              <img src={icon} alt={title} />
            </div>
          ))}
        </div>
      </section> */}
      <section className="background-container">
  <div className="overlay">
    <div className="icon-text-container">
      <div className="icon-text">
        <img src="/door.png" alt="Icon 1" className="icon" />
        <span className="text">Steel To Aluminium Conversions</span>
      </div>
      <div className="icon-text">
        <img src="/main.png" alt="Icon 2" className="icon" />
        <span className="text">Sliding and Stacking Door Maintenance</span>
      </div>
      <div className="icon-text">
        <img src="/icon3.png" alt="Icon 3" className="icon" />
        <span className="text">Custom Designs and Installations</span>
      </div>
    </div>
    <div className="icon-text-container">
      <div className="icon-text">
        <img src="/door.png" alt="Icon 1" className="icon" />
        <span className="text">Steel To Aluminium Conversions</span>
      </div>
      <div className="icon-text">
        <img src="/main.png" alt="Icon 2" className="icon" />
        <span className="text">Sliding and Stacking Door Maintenance</span>
      </div>
      <div className="icon-text">
        <img src="/icon3.png" alt="Icon 3" className="icon" />
        <span className="text">Custom Designs and Installations</span>
      </div>
      <div className="icon-text">
        <img src="/icon7.png" alt="Icon 7" className="icon" />
        <span className="text">Elegant Finishes & Detailing</span>
      </div>
    </div>
  </div>
</section>

      {/* SERVICES DETAILED SECTION (Alternating image and text) */}
      <section className="services-detailed-section">
        {services.map(({ image, title, description }, i) => (
          <div className={`service-detailed-item ${i % 2 === 1 ? 'reverse' : ''}`} key={i}>
            <img src={image} alt={title} />
            <div className="service-content">
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          </div>
        ))}
      </section>

      {/* CTA SECTION */}
      <section className="cta-section">
        <h1>Alu Lady</h1>
        <h3>Build your dream with elegance and strength</h3>
        <div className="cta-buttons">
          <a href="#" className="btn-outline">Get a Quote</a>
          <a href="#" className="btn-outline">Buy</a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <ul className="footer-nav">
          <li><a href="#">Home</a></li>
          <li><a href="#">Features</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">FAQs</a></li>
          <li><a href="#">About</a></li>
        </ul>
        <p>© 2024 Alu Lady</p>
      </footer>
    </div>
  );
}

export default App;
