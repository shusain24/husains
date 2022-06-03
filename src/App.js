import React from 'react'
import './App.css';
import Navbar from './component/Navbar/Navbar';
import {
  BrowserRouter as Router,
  Route,
  Routes

} from "react-router-dom";

import ParticleBackground from './component/particle/ParticleBackground';
import Home from './component/Home/Home';
import About from './component/About/About';
import Skills from './component/Skills/Skills';
import Gallery from './component/Gallery/Gallery';
import Contact from './component/contact/Contact';

function App() {
  
  return (
    <>
    <ParticleBackground/>
      <Router>
       <Navbar/>

    
       <div className="container">
       <Routes>
         
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element= {<About />} />
          <Route exact path="/skill" element= {<Skills />} />
          <Route exact path="/home" element= {<Home/>} />
          <Route exact path="/gallery" element= {<Gallery />} />
          <Route exact path="/contact" element= {<Contact />} />
        </Routes>
    </div>
     </Router>
   </>
  );
}

export default App;
