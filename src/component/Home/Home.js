import React from 'react';
import { useTypewriter } from 'react-simple-typewriter';
import Greetingmsg from '../Greetings/Greetingmsg';
import Homecode from './Code/Homecode/Homecode';
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
        <div className="col-sm-4"> 
          <div className="card cardStyle">
            <img className='imageStyle1' src={logo} alt='myLogo'/>
            <div className="card-body">
              <p className='headingStyle'>Hey  folks, <span><Greetingmsg /></span></p>
              <p className='headingStyle1'>{text}</p>
              {/* <Link to="#" className="btn btn-primary">Go somewhere</Link> */}
            </div>
          </div>
        </div>
      <div className="col-sm-8">
        
      <div className="card cardA" >
             <Homecode/>
        </div>
      </div>
  </div>
   </div>
    
    
  )
}
