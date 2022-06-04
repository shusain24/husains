import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import { SiSkillshare } from "react-icons/si";
import { FcList, FcCallback, FcGallery, FcLike, FcHome, FcAbout  } from "react-icons/fc";

const Navbar = () => {
  
  return (
    <>
   <div className=''>
      <nav className="navbar navbar-expand-lg navbar-light p-md-3 ">
        <div className="container" >
          <Link className="navTextStyleHeading" to="/"><FcLike/>Husains</Link>
          <button
           className="navbar-toggler" 
		        type="button" 
		        data-bs-toggle="collapse" 
            data-bs-target="#navbarNav" 
            aria-controls="navbarNav" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
            
            >
            <span className="navTextStyle"><FcList/></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav" >
          <div className="mx-auto"></div>
            <ul className="navbar-nav ">
              <li className="nav-item">
                <Link className="navTextStyle" aria-current="page" to="/home"><FcHome/>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="navTextStyle" to="/skill"><SiSkillshare style={{color:'red'}}/>Skill</Link>
              </li>
              <li className="nav-item">
                <Link className="navTextStyle" to="/gallery"><FcGallery/>Gallery</Link>
              </li>
              <li className="nav-item">
                <Link className=" navTextStyle" to="/about" ><FcAbout/>About</Link>
              </li>
              <li className="nav-item">
                <Link className=" navTextStyle" to="/contact" ><FcCallback/>Contact</Link>
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
