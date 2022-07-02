import React from 'react'
import './Skills.css'
import sql from  './image/sql.png'
import Angular from  './image/Angular.png'
import aws from  './image/aws.png'
import awsa from  './image/awsa.png'
import bootstrap from  './image/Bootstrap.png'
import css from  './image/Css.png'
import docker from  './image/docker.png'
import git from  './image/git.png'
import go from  './image/Go.png'
import html from  './image/Html.png'
import java from  './image/java.png'
import jenkins from  './image/jenkins.png'
import jquery from  './image/jqery.png'
import js from  './image/js.png'
import kubernates from  './image/Kubernates.png'
import node from  './image/Node.png'
import postman from  './image/postman.png'
import react from  './image/react.png'
import spring from  './image/spring.png'

export default function Skills() {
  
return (
  <div className="container">
    <div className="row">
      <div className="col-sm-4">
        <p className='borderStyle'>Front End Skills....!!!</p>
         <img className='imageStyle' src={js} alt="js"/>
          <img className='imageStyle' src={react} alt="react"/>
          <img className='imageStyle' src={html} alt="html"/>
          <img className='imageStyle' src={node} alt="node"/>
          <img className='imageStyle' src={jquery} alt="jquery"/>
          <img className='imageStyle' src={Angular} alt="Angular"/>
          <img className='imageStyle' src={bootstrap} alt="bootstrap"/>
          <img className='imageStyle' src={css} alt="css"/>

      </div>
      <div className="col-sm-4">
        <p className='borderStyle1'>Back-End Skills....!!</p>
         <img className='imageStyle' src={java} alt="java"/>
    <img className='imageStyle' src={spring} alt="spring"/>
         <img className='imageStyle' src={go} alt="go"/>

      </div>
      <div className="col-sm-4">
        <p className='borderStyle2'>Tools....!!</p>
          <img className='imageStyle' src={sql} alt="sql"/>
          <img className='imageStyle' src={awsa} alt="awsa"/>
          <img className='imageStyle' src={docker} alt="docker"/>
          <img className='imageStyle' src={git} alt="git"/>
          <img className='imageStyle' src={jenkins} alt="jenkins"/>
          <img className='imageStyle' src={kubernates} alt="kubaernates"/>
          <img className='imageStyle' src={postman} alt="postman"/>
          <img className='imageStyle' src={aws} alt="aws"/>

      </div>
    </div>
  </div>
  )
}
