import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

export default function Home() {
   
  return (
   <div className="container">
     <div className="row">
        <div className="col-sm-4">
          <div className="card cardStyle">
            <div className="card-body">
              <p className='headingStyle'>Hi,</p>
              <p>I'm  </p>
              {/* <Link to="#" className="btn btn-primary">Go somewhere</Link> */}
            </div>
          </div>
        </div>
      <div className="col-sm-8">
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
