import React,{useState} from 'react'
import Feature from './Feature'
// import Header from '../comman/Header'
// import Footer from '../comman/Footer'
import Fact from './Fact'
import Services from './Services'
import Cars from './Cars'
import Blog from './Blog'
import Banner from "./Banner"
import Team from "./Team"
import Testimonial from './Testimonial'


function Home() {
     const [showModal, setShowModal] = useState(false);

  const handleBookNow = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <div>
        
         {/* Carousel Start */}
                <div className="header-carousel">
                    <div id="carouselId" className="carousel slide"  data-bs-interval="false">
                        <ol className="carousel-indicators">
                            <li data-bs-target="#carouselId" data-bs-slide-to={0} className="active" aria-current="true" aria-label="First slide" />
                            <li data-bs-target="#carouselId" data-bs-slide-to={1} aria-label="Second slide" />
                        </ol>
                        <div className="carousel-inner" role="listbox">
                            <div className="carousel-item active">
                                <img src="img/carousel-2.jpg" className="img-fluid w-100" alt="First slide" />
                                <div className="carousel-caption">
                                    <div className="container py-4">
                                        <div className="row g-5">
                                            <div className="col-lg-6 fadeInLeft animated" data-animation="fadeInLeft" data-delay="1s" style={{ animationDelay: '1s' }}>
                                                <div className="bg-secondary rounded p-5">
                                                    <h4 className="text-white mb-4">CONTINUE CAR RESERVATION</h4>
                                                    <form>
                                                        <div className="row g-3">
                                                            <div className="col-12">
                                                                <select className="form-select" aria-label="Default select example">
                                                                    <option>Select Your Car type</option>
                                                                    <option value={1}>VW Golf VII</option>
                                                                    <option value={2}>Audi A1 S-Line</option>
                                                                    <option value={3}>Toyota Camry</option>
                                                                    <option value={4}>BMW 320 ModernLine</option>
                                                                </select>
                                                            </div>
                                                            <div className="col-12">
                                                                <div className="input-group">
                                                                    <div className="d-flex align-items-center bg-light text-body rounded-start p-2">
                                                                        <span className="fas fa-map-marker-alt" /> <span className="ms-1">Pick Up</span>
                                                                    </div>
                                                                    <input className="form-control" type="text" placeholder="Enter a City or Airport" aria-label="Enter a City or Airport" />
                                                                </div>
                                                            </div>
                                                            <div className="col-12">
                                                                <a href="#" className="text-start text-white d-block mb-2">Need a different drop-off location?</a>
                                                                <div className="input-group">
                                                                    <div className="d-flex align-items-center bg-light text-body rounded-start p-2">
                                                                        <span className="fas fa-map-marker-alt" /><span className="ms-1">Drop off</span>
                                                                    </div>
                                                                    <input className="form-control" type="text" placeholder="Enter a City or Airport" aria-label="Enter a City or Airport" />
                                                                </div>
                                                            </div>
                                                            <div className="col-12">
                                                                <div className="input-group">
                                                                    <div className="d-flex align-items-center bg-light text-body rounded-start p-2">
                                                                        <span className="fas fa-calendar-alt" /><span className="ms-1">Pick Up</span>
                                                                    </div>
                                                                    <input className="form-control" type="date" />
                                                                    <select className="form-select ms-3" aria-label="Default select example">
                                                                        <option >12:00AM</option>
                                                                        <option value={1}>1:00AM</option>
                                                                        <option value={2}>2:00AM</option>
                                                                        <option value={3}>3:00AM</option>
                                                                        <option value={4}>4:00AM</option>
                                                                        <option value={5}>5:00AM</option>
                                                                        <option value={6}>6:00AM</option>
                                                                        <option value={7}>7:00AM</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-12">
                                                                <div className="input-group">
                                                                    <div className="d-flex align-items-center bg-light text-body rounded-start p-2">
                                                                        <span className="fas fa-calendar-alt" /><span className="ms-1">Drop off</span>
                                                                    </div>
                                                                    <input className="form-control" type="date" />
                                                                    <select className="form-select ms-3" aria-label="Default select example">
                                                                        <option >12:00AM</option>
                                                                        <option value={1}>1:00AM</option>
                                                                        <option value={2}>2:00AM</option>
                                                                        <option value={3}>3:00AM</option>
                                                                        <option value={4}>4:00AM</option>
                                                                        <option value={5}>5:00AM</option>
                                                                        <option value={6}>6:00AM</option>
                                                                        <option value={7}>7:00AM</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                           <div className="col-12">
        <button onClick={handleBookNow} className="btn btn-light w-100 py-2">
          Book Now
        </button>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content text-center p-4">
            <h4>✅ Successfully filled the form!</h4>
            <button className="btn btn-primary mt-3" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>)}
                                                        </div>
                                                    </form>
                                                    
                                                    
                                                </div>
                                            </div>
                                            <div className="col-lg-6 d-none d-lg-flex fadeInRight animated" data-animation="fadeInRight" data-delay="1s" style={{ animationDelay: '1s' }}>
                                                <div className="text-start">
                                                    <h1 className="display-5 text-white">Get 15% off your rental Plan your trip now</h1>
                                                    <p>Treat yourself in USA</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src="img/carousel-1.jpg" className="img-fluid w-100" alt="First slide" />
                                <div className="carousel-caption">
                                    <div className="container py-4">
                                        <div className="row g-5">
                                            <div className="col-lg-6 fadeInLeft animated" data-animation="fadeInLeft" data-delay="1s" style={{ animationDelay: '1s' }}>
                                                <div className="bg-secondary rounded p-5">
                                                    <h4 className="text-white mb-4">CONTINUE CAR RESERVATION</h4>
                                                    <form>
                                                        <div className="row g-3">
                                                            <div className="col-12">
                                                                <select className="form-select" aria-label="Default select example">
                                                                    <option >Select Your Car type</option>
                                                                    <option value={1}>VW Golf VII</option>
                                                                    <option value={2}>Audi A1 S-Line</option>
                                                                    <option value={3}>Toyota Camry</option>
                                                                    <option value={4}>BMW 320 ModernLine</option>
                                                                </select>
                                                            </div>
                                                            <div className="col-12">
                                                                <div className="input-group">
                                                                    <div className="d-flex align-items-center bg-light text-body rounded-start p-2">
                                                                        <span className="fas fa-map-marker-alt" /><span className="ms-1">Pick Up</span>
                                                                    </div>
                                                                    <input className="form-control" type="text" placeholder="Enter a City or Airport" aria-label="Enter a City or Airport" />
                                                                </div>
                                                            </div>
                                                            <div className="col-12">
                                                                <a href="#" className="text-start text-white d-block mb-2">Need a different drop-off location?</a>
                                                                <div className="input-group">
                                                                    <div className="d-flex align-items-center bg-light text-body rounded-start p-2">
                                                                        <span className="fas fa-map-marker-alt" /><span className="ms-1">Drop off</span>
                                                                    </div>
                                                                    <input className="form-control" type="text" placeholder="Enter a City or Airport" aria-label="Enter a City or Airport" />
                                                                </div>
                                                            </div>
                                                            <div className="col-12">
                                                                <div className="input-group">
                                                                    <div className="d-flex align-items-center bg-light text-body rounded-start p-2">
                                                                        <span className="fas fa-calendar-alt" /><span className="ms-1">Pick Up</span>
                                                                    </div>
                                                                    <input className="form-control" type="date" />
                                                                    <select className="form-select ms-3" aria-label="Default select example">
                                                                        <option >12:00AM</option>
                                                                        <option value={1}>1:00AM</option>
                                                                        <option value={2}>2:00AM</option>
                                                                        <option value={3}>3:00AM</option>
                                                                        <option value={4}>4:00AM</option>
                                                                        <option value={5}>5:00AM</option>
                                                                        <option value={6}>6:00AM</option>
                                                                        <option value={7}>7:00AM</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-12">
                                                                <div className="input-group">
                                                                    <div className="d-flex align-items-center bg-light text-body rounded-start p-2">
                                                                        <span className="fas fa-calendar-alt" /><span className="ms-1">Drop off</span>
                                                                    </div>
                                                                    <input className="form-control" type="date" />
                                                                    <select className="form-select ms-3" aria-label="Default select example">
                                                                        <option >12:00AM</option>
                                                                        <option value={1}>1:00AM</option>
                                                                        <option value={2}>2:00AM</option>
                                                                        <option value={3}>3:00AM</option>
                                                                        <option value={4}>4:00AM</option>
                                                                        <option value={5}>5:00AM</option>
                                                                        <option value={6}>6:00AM</option>
                                                                        <option value={7}>7:00AM</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-12">
                                                                <button className="btn btn-light w-100 py-2">Book Now</button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 d-none d-lg-flex fadeInRight animated" data-animation="fadeInRight" data-delay="1s" style={{ animationDelay: '1s' }}>
                                                <div className="text-start">
                                                    <h1 className="display-5 text-white">Get 15% off your rental! Choose Your Model </h1>
                                                    <p>Treat yourself in USA</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Feature/>
                <Fact/>
                <Services/>
                <Cars/>
                <Blog/>
                <Banner/>
                <Team/>
                <Testimonial/>
                {/* Carousel End */}
                {/* Features Start */}
                
                {/* Features End */}
                
                {/* About End */}
                {/* Fact Counter */}
               
                {/* Fact Counter */}
                {/* Services Start */}
               
                {/* Services End */}
                {/* Car categories Start */}
               
                {/* Car categories End */}
                {/* Car Steps Start */}
              
                {/* Car Steps End */}
                {/* Blog Start */}
               
                {/* Blog End */}
                {/* Banner Start */}
              
                {/* Banner End */}
                {/* Team Start */}
              
                {/* Team End */}
                {/* Testimonial Start */}
               
                {/* Testimonial End */}
         
            </div>
            
    
  )
}

export default Home
