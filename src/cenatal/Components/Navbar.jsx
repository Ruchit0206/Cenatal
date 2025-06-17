import React from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


function Navbar() {
  return (
    <div>
      <div>
        {/* Topbar Start */}
        <div className="container-fluid topbar bg-secondary d-none d-xl-block w-100">
          <div className="container">
            <div className="row gx-0 align-items-center" style={{ height: 45 }}>
              <div className="col-lg-6 text-center text-lg-start mb-lg-0">
                <div className="d-flex flex-wrap">
                  <a href="#" className="text-muted me-4"><i className="fas fa-map-marker-alt text-primary me-2" />Find A Location</a>
                  <a href="tel:+01234567890" className="text-muted me-4"><i className="fas fa-phone-alt text-primary me-2" />+91 987543210</a>
                  <a href="mailto:example@gmail.com" className="text-muted me-0"><i className="fas fa-envelope text-primary me-2" />cental@gmail.com</a>
                </div>
              </div>
              <div className="col-lg-6 text-center text-lg-end">
                <div className="d-flex align-items-center justify-content-end">
                <a href="#" className="btn btn-light btn-sm-square rounded-circle me-3">
  <i className="fab fa-facebook"></i>
</a>
<a href="#" className="btn btn-light btn-sm-square rounded-circle me-3">
  <i className="fab fa-instagram"></i>
</a>
<a href="#" className="btn btn-light btn-sm-square rounded-circle me-3">
  <i className="fab fa-twitter"></i>
</a>
<a href="#" className="btn btn-light btn-sm-square rounded-circle me-3">
  <i className="fab fa-linkedin"></i>
</a>

                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Topbar End */}
        {/* Navbar & Hero Start */}
        <div className="container-fluid nav-bar sticky-top px-0 px-lg-4 py-2 py-lg-0">
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
              <Link to="/" className="navbar-brand p-0">
                <h1 className="display-6 text-primary"><i className="fas fa-car-alt me-3" />Cental</h1>
                {/* <img src="img/logo.png" alt="Logo"> */}
              </Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="fa fa-bars" />
              </button>
              <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav mx-auto py-0">
                  <Link to="/" className="nav-item nav-link">Home</Link>
                 
                  <Link to ="/about" className="nav-item nav-link">About</Link>
               
                  <Link to="/Services" className="nav-item nav-link">Service</Link>
                  <Link to ="Blog" className="nav-item nav-link">Blog</Link>
                  <div className="nav-item dropdown">
                    <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</Link>
                    <div className="dropdown-menu m-0">
                      <Link to="/feature" className="dropdown-item">Our Feature</Link>
                      <Link to="/cars" className="dropdown-item">Our Cars</Link>
                      <Link to="/team" className="dropdown-item">Our Team</Link>
                      <Link to ="/testimonial" className="dropdown-item">Testimonial</Link>
                     
                    </div>
                  </div>
                 <Link to="/contact" className="nav-item nav-link">Contact</Link>
                </div>
                <Link to="/" className="btn btn-primary rounded-pill py-2 px-4">Get Started</Link>
              </div>
            </nav>
          </div>
        </div>
        
      </div>


    </div>
  )
}

export default Navbar
