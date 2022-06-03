import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
  
  return (
    <>
   <div className=''>
      <nav className="navbar navbar-expand-lg navbar-light p-md-3 ">
        <div className="container" >
          <Link className="navbar-brand testStyle" to="/">Husains</Link>
          <button className="navbar-toggler" 
		        type="button" 
		        data-bs-toggle="collapse" 
            data-bs-target="#navbarNav" 
            aria-controls="navbarNav" 
            aria-expanded="false" 
            aria-label="Toggle navigation">
            <span className=" testStyle">=</span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav" >
          <div className="mx-auto"></div>
            <ul className="navbar-nav ">
              <li className="nav-item">
                <Link className="nav-link  testStyle" aria-current="page" to="/home">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  testStyle" to="/skill">Skill</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  testStyle" to="/gallery">Gallery</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  testStyle" to="/about" >About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  testStyle" to="/contact" >Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
</div>

   </>
  )
}

export default Navbar
