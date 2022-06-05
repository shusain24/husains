import React from 'react';
import { Link } from 'react-router-dom';
import { useTypewriter } from 'react-simple-typewriter';
import Greetingmsg from '../Greetings/Greetingmsg';
import './Home.css';
import logo from './loga.png';


export default function Home() {
  const {text} = useTypewriter({
    words: [ "I am Saddam Husain.","I am a Software Engineer(Full Stack Developer).","have an one year of exprience .",],
    loop: 0, 
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 1000
    })
   
  return (
   <div className="container">
     <div className="row">
        <div className="col-sm-5"> 
          <div className="card cardStyle">
            <img className='imageStyle' src={logo} alt='myLogo'/>
            <div className="card-body">
              <p className='headingStyle'>Hey  folks, <span><Greetingmsg /></span></p>
              <p className='headingStyle1'>{text}</p>
              {/* <Link to="#" className="btn btn-primary">Go somewhere</Link> */}
            </div>
          </div>
        </div>
      <div className="col-sm-7">
        <div className="card ">
          <div className="card-body">
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <Link to="#" className="btn btn-primary">Go somewhere</Link>
          </div>
        </div>
      </div>
  </div>
   </div>
    
    
  )
}
