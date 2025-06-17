import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './cenatal/pages/Home';
import AboutUs from './cenatal/pages/About';
import Contact from './cenatal/pages/Contact';
import Blog from './cenatal/pages/Blog';
import Testimonial from './cenatal/pages/Testimonial';
import Services from './cenatal/pages/Services';
import Cars from './cenatal/pages/Cars';
import Feature from './cenatal/pages/Feature';

import Navbar from './cenatal/Components/Navbar';
import Footer from './cenatal/Components/Footer';

import "./style.css";
import Team from './cenatal/pages/Team';

export default function App() {
  return (
   
      <div className='App'>
        <Navbar />
        
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/testimonial' element={<Testimonial />} />
          <Route path='/services' element={<Services />} />
          <Route path='/cars' element={<Cars />} />
          <Route path='/feature' element={<Feature />} />
          <Route path="/team" element={<Team/>}/>
           <Route path="/testimonial" element={<Testimonial/>}/>
            <Route path="/contact" element={<Contact/>}/>
        </Routes>
        
        <Footer />
      </div>

  );
}
