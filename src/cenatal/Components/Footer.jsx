import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <div>
            {/* Footer Start */}
            <div className="container-fluid footer py-5 wow fadeIn" data-wow-delay="0.2s" style={{color:"white",background: "#fcc303"
}}>
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-md-6 col-lg-6 col-xl-3">
                            <div className="footer-item d-flex flex-column">
                                <div className="footer-item">
                                    <h4 className="text-white mb-4">About Us</h4>
                                    <p className="mb-3">Dolor amet sit justo amet elitr clita ipsum elitr est.Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit.</p>
                                </div>
                                <div className="position-relative">
                                    <input className="form-control rounded-pill w-100 py-3 ps-4 pe-5" type="text" placeholder="Enter your email" />
                                    <button type="button" className="btn btn-secondary rounded-pill position-absolute top-0 end-0 py-2 mt-2 me-2">Subscribe</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-3">
                            <div className="footer-item d-flex flex-column">
                                <h4 className="text-white mb-4">Quick Links</h4>
                        <Link to="/about"><i className="fas fa-angle-right me-2"  /> About</Link>
                                <Link to="/cars"><i className="fas fa-angle-right me-2" /> Cars</Link>
                               <Link to="/services"><i className="fas fa-angle-right me-2" /> Services</Link>
                               <Link to="/team"><i className="fas fa-angle-right me-2" /> Team</Link>
                               <Link to="/contact"><i className="fas fa-angle-right me-2" /> Contact us</Link>
                              
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-3">
                            <div className="footer-item d-flex flex-column">
                                <h4 className="text-white mb-4">Business Hours</h4>
                                <div className="mb-3">
                                    <h6 className="text-muted mb-0">Mon - Friday:</h6>
                                    <p className="text-white mb-0">09.00 am to 07.00 pm</p>
                                </div>
                                <div className="mb-3">
                                    <h6 className="text-muted mb-0">Saturday:</h6>
                                    <p className="text-white mb-0">10.00 am to 05.00 pm</p>
                                </div>
                                <div className="mb-3">
                                    <h6 className="text-muted mb-0">Vacation:</h6>
                                    <p className="text-white mb-0">All Sunday is our vacation</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-3">
                            <div className="footer-item d-flex flex-column">
                                <h4 className="text-white mb-4">Contact Info</h4>
                                <a href="#"><i className="fa fa-map-marker-alt me-2" /> 123 Street, New York, USA</a>
                                <a href="mailto:info@example.com"><i className="fas fa-envelope me-2" /> info@example.com</a>
                                <a href="tel:+012 345 67890"><i className="fas fa-phone me-2" /> +012 345 67890</a>
                                <a href="tel:+012 345 67890" className="mb-3"><i className="fas fa-print me-2" /> +012 345 67890</a>
                                <div className="d-flex">
                                    <a className="btn btn-secondary btn-md-square rounded-circle me-3" href="#"><i className="fab fa-facebook-f text-white" /></a>
                                    <a className="btn btn-secondary btn-md-square rounded-circle me-3" href="#"><i className="fab fa-twitter text-white" /></a>
                                    <a className="btn btn-secondary btn-md-square rounded-circle me-3" href="#"><i className="fab fa-instagram text-white" /></a>
                                    <a className="btn btn-secondary btn-md-square rounded-circle me-0" href="#"><i className="fab fa-linkedin-in text-white" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer End */}
            <div>
                {/* Copyright Start */}
                <div className="container-fluid copyright py-4">
                    <div className="container">
                        <div className="row g-4 align-items-center">
                            <div className="col-md-6 text-center text-md-start mb-md-0">
                                <span className="text-body"><a href="/" className=" text-white"><i className="fas fa-copyright text-light me-2" />Cental  </a>, <span style={{color:"white "}}>All right reserved.</span></span>
                            </div>
                            <div className="col-md-6 text-center text-md-end text-body">
                              
                                <span style={{color:"white"}}>Designed and Developed By<a href="https://www.linkedin.com/in/ruchit-patel-7093b4257/" style={{textDecoration:"none"}} target='_blank'> Ruchit Patel</a> </span>
                            </div>
                        </div>
                    </div>
                </div>
               
                <a href="/" className="btn btn-secondary btn-lg-square rounded-circle back-to-top"><i className="fa fa-arrow-up" /></a>
            </div>


        </div>
    );
}

