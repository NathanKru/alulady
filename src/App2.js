import './App2.css';

function App2() {
  return (
    <div className="App">
      <div class="own-nav">
        <div class="container">
          <div class="container">
            <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3">
              <div class="col-md-3 mb-2 mb-md-0">
                <a href="/" class="d-inline-flex link-body-emphasis text-decoration-none"></a>
              </div>
              
              <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                <li><a href="#" class="nav-link px-2 link-secondary white">Home</a></li>
                <li><a href="#" class="nav-link px-2 white">About</a></li>
                <li><a href="#" class="nav-link px-2 white">Contact Us</a></li>
              </ul>

              <div class="col-md-3 text-end">
                <button type="button" class="btn btn-outline-primary me-2">Request a Quote</button>
              </div>
            </header>
          </div>
        </div>
      </div>
      <div>
        <div class="image-container">
          <img src="bg1.jpg" alt="Moving Image" class="moving-image"></img>
          <div class="banner-text">
          <p> Place holder for alot of content we are the leaders</p>
              {/* <h1>Your Text Here</h1> */}
              <button>REQUEST A QUOTE</button>
              <h4>OR</h4>
              <button>ARRANGE A CALL OUT</button>
          </div>
          </div>
        </div>


        <div class="center-text">
        <h1 class="pink">Get to Know Us  </h1>
        <br></br>
          <p class="text2">Alu Lady is committed to empowering women 
              and elevating home aesthetics. We specialize in 
              high-quality aluminum products and offer a 
              comprehensive range of solutions including 
              doors, windows, and commercial shopfronts.
              </p>
            <p class="text2">Our team of skilled artisans and experienced 
              installers ensures meticulous craftsmanship 
              and seamless installation. We pride ourselves 
              on delivering exceptional customer service and 
              exceeding client expectations.
              </p>
            <p class="text2">
              By combining affordability with premium 
              quality, we provide tailored solutions to 
              enhance your home. Experience the Alu Lady 
              difference: a perfect blend of elegance, 
              durability, and customer satisfaction </p>
        </div>
        {/* Add thin border to split the content white */}
        <div class="background-container">
      <div class="overlay">
        <div class="icon-text-container">
            <div class="icon-text">
              <img src="door.png" alt="Icon 1" class="icon"/>
              <span class="text">Steel To Aluminium Conversions</span>
            </div>
            <div class="icon-text">
              <img src="main.png" alt="Icon 2" class="icon"/>
              <span class="text">Sliding and Stacking 
              Door Maintenance</span>
            </div>
            <div class="icon-text">
              <img src="icon3.png" alt="Icon 3" class="icon"/>
              <span class="text">Custom Designs and Installations</span>
            </div>
          </div>
          <div class="icon-text-container">
          <div class="icon-text">
              <img src="door.png" alt="Icon 1" class="icon"/>
              <span class="text">Steel To Aluminium Conversions</span>
            </div>
            <div class="icon-text">
              <img src="main.png" alt="Icon 2" class="icon"/>
              <span class="text">Sliding and Stacking 
              Door Maintenance</span>
            </div>
            <div class="icon-text">
              <img src="icon3.png" alt="Icon 3" class="icon"/>
              <span class="text">Custom Designs and Installations</span>
            </div>
          <div class="icon-text">
            <img src="icon7.png" alt="Icon 7" class="icon"/>
            <span class="text">Text for Icon 7</span>
          </div>
        </div>
      </div>
    </div>



      <div>
        <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-body-tertiary own-nav2">
          <div class="col-md-6 p-lg-5 mx-auto my-5">
            <h1 class="display-3 fw-bold">Alu Lady</h1>
            <h3 class="fw-normal text-muted mb-3">Build anything you want with Aperture</h3>
            <div class="d-flex gap-3 justify-content-center lead fw-normal">
              <a class="icon-link" href="#">
                Get a Quote
              </a>
              <a class="icon-link" href="#">
                Buy
                <svg class="bi"></svg>
              </a>
            </div>
          </div>
          <div class="product-device shadow-sm d-none d-md-block"></div>
          <div class="product-device product-device-2 shadow-sm d-none d-md-block"></div>
        </div>
      </div>

<div class="black-bg row align-items-center my-5 p-4 rounded">
  <div class="col-md-7 grey-bg p-4 rounded shadow-sm">
    <h2 class="featurette-heading fw-bold pink">
      Aluminum Solutions Reimagined. <span class="text-muted fst-italic">Built to Last, Designed to Impress.</span>
    </h2>
    <p class="lead mt-3">
      At Alu Lady, we don’t just install aluminum fixtures — we craft lasting impressions with precision and passion. 
      Discover a new standard in durability, style, and innovation that transforms your space into a masterpiece.
    </p>
    <a href="#" class="btn btn-outline-light mt-3">Discover More</a>
  </div>
  <div class="col-md-5 text-center">
    <img src="logo1.png" alt="Alu Lady Logo" class="img-fluid rounded shadow-lg" />
  </div>
</div>

     <div class="container px-4 py-5">
  <h2 class="pb-2 border-bottom">Explore Our Core Strengths</h2>

  <div class="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5">
    <div class="col d-flex flex-column align-items-start gap-3">
      <h2 class="fw-bold text-body-emphasis">
        Precision Aluminum Craftsmanship at Your Service
      </h2>
      <p class="text-body-secondary">
        We bring decades of experience transforming aluminum into stunning doors, windows, and storefronts that combine durability and style.
      </p>
      <a href="#" class="btn btn-primary btn-lg">Request Your Quote</a>
    </div>

    <div class="col">
      <div class="row row-cols-1 row-cols-sm-2 g-4">
        <div class="col d-flex flex-column gap-2">
          <div class="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
            <svg class="bi" width="1em" height="1em"></svg>
          </div>
          <h4 class="fw-semibold mb-0 text-body-emphasis">Tailored Design Solutions</h4>
          <p class="text-body-secondary">
            Every project is custom-crafted to perfectly fit your style and needs.
          </p>
        </div>

        <div class="col d-flex flex-column gap-2">
          <div class="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
            <svg class="bi" width="1em" height="1em"></svg>
          </div>
          <h4 class="fw-semibold mb-0 text-body-emphasis">Durability Guaranteed</h4>
          <p class="text-body-secondary">
            Our aluminum products withstand harsh weather while maintaining sleek aesthetics.
          </p>
        </div>

        <div class="col d-flex flex-column gap-2">
          <div class="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
            <svg class="bi" width="1em" height="1em"></svg>
          </div>
          <h4 class="fw-semibold mb-0 text-body-emphasis">Expert Installation Team</h4>
          <p class="text-body-secondary">
            Certified installers ensure a smooth, hassle-free fit every time.
          </p>
        </div>

        <div class="col d-flex flex-column gap-2">
          <div class="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
            <svg class="bi" width="1em" height="1em"></svg>
          </div>
          <h4 class="fw-semibold mb-0 text-body-emphasis">Eco-Friendly Practices</h4>
          <p class="text-body-secondary">
            Sustainability is at our core, using recyclable materials and processes.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
  <div class="b-example-divider"></div>
  
  <div class="container px-4 py-5">
  <h2 class="pb-2 border-bottom">Advanced Services Tailored for You</h2>

  <div class="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5 flex-md-row-reverse">
    <div class="col d-flex flex-column align-items-start gap-3">
      <h2 class="fw-bold text-body-emphasis">
        From Design to Maintenance — Your Full Aluminum Partner
      </h2>
      <p class="text-body-secondary">
        Our expertise extends beyond installation, offering repairs, custom modifications, and maintenance packages tailored to your property's lifecycle.
      </p>
      <a href="#" class="btn btn-primary btn-lg">Schedule a Consultation</a>
    </div>

    <div class="col">
      <div class="row row-cols-1 row-cols-sm-2 g-4">
        <div class="col d-flex flex-column gap-2">
          <div class="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
            <svg class="bi" width="1em" height="1em"></svg>
          </div>
          <h4 class="fw-semibold mb-0 text-body-emphasis">Custom Shopfront Fabrication</h4>
          <p class="text-body-secondary">
            Boost your business curb appeal with unique storefront designs.
          </p>
        </div>

        <div class="col d-flex flex-column gap-2">
          <div class="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
            <svg class="bi" width="1em" height="1em"></svg>
          </div>
          <h4 class="fw-semibold mb-0 text-body-emphasis">Window & Door Restoration</h4>
          <p class="text-body-secondary">
            Bring your old aluminum fixtures back to life with expert repair and restoration.
          </p>
        </div>

        <div class="col d-flex flex-column gap-2">
          <div class="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
            <svg class="bi" width="1em" height="1em"></svg>
          </div>
          <h4 class="fw-semibold mb-0 text-body-emphasis">Energy-Efficient Upgrades</h4>
          <p class="text-body-secondary">
            Improve insulation and save energy with the latest aluminum technology.
          </p>
        </div>

        <div class="col d-flex flex-column gap-2">
          <div class="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
            <svg class="bi" width="1em" height="1em"></svg>
          </div>
          <h4 class="fw-semibold mb-0 text-body-emphasis">Emergency Repair Services</h4>
          <p class="text-body-secondary">
            Fast and reliable fixes when accidents or weather strike.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
  <div class="container">
  <footer class="py-3 my-4">
    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
      <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Home</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Features</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Pricing</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">FAQs</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">About</a></li>
    </ul>
    <p class="text-center text-body-secondary">© 2024 Alu Lady</p>
  </footer>
</div>
      
    </div>
  );
}

export default App2;
