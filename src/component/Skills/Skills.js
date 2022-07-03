import React from 'react'
import './Skills.css'
import ProgressBar from './progressBar/ProgressBar'
import BackEndBar from './progressBar/BackEndBar'
import ToolsBar from './progressBar/ToolsBar'

export default function Skills() {
  
return (
  <div className="container">
    <div className="row">
      <div className="col-sm-4">
        <p className='borderStyle'>Front End Skills....!!!</p>
        <ProgressBar/>

      </div>
      <div className="col-sm-4">
        <p className='borderStyle1'>Back-End Skills....!!</p>
        <BackEndBar/>

      </div>
      <div className="col-sm-4">
        <p className='borderStyle2'>Tools....!!</p>
        <ToolsBar/>

      </div>
    </div>
  </div>
  )
}
