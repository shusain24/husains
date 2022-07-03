import React from 'react'
import { CircularProgressbarWithChildren,buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { easeQuadInOut } from "d3-ease";
import './Progresscss.css'
import AnimatedProgressProvider from "./AnimatedProgressProvider";


import aws from  './images/aws.png'
import awsa from  './images/awsa.png'
import docker from  './images/docker.png'
import git from  './images/git.png'
import jenkins from  './images/jenkins.png'
import kubernates from  './images/Kubernates.png'
import postman from  './images/postman.png'

export default function ToolsBar() {
  return (
     <div className="container">
        <div className="row">
            
          {/* <img className='imageStyle' src={sql} alt="sql"/>
          <img className='imageStyle' src={awsa} alt="awsa"/>
          <img className='imageStyle' src={docker} alt="docker"/>
          <img className='imageStyle' src={git} alt="git"/>
          <img className='imageStyle' src={jenkins} alt="jenkins"/>
          <img className='imageStyle' src={kubernates} alt="kubaernates"/>
          <img className='imageStyle' src={postman} alt="postman"/>
          <img className='imageStyle' src={aws} alt="aws"/> */}
                
        <div className='barStyle'>
            <AnimatedProgressProvider
            valueStart={0}
            valueEnd={85}
            duration={1.4}
            easingFunction={easeQuadInOut}
            repeat
        >
            {value => {
            const roundedValue = Math.round(value);
            return (

                <CircularProgressbarWithChildren 
                value={value}
                text={`${roundedValue}%`}
                //  background
                //  backgroundPadding={6}
                styles={buildStyles({
                    textColor: "lightred",
                    zIndex:1,
                    pathColor: "blue",
                    trailColor: "lightcyan", 
                    // backgroundColor: "#3e98c7"
                })}
                
                >
                    <img
                    className='imageStyle'
                    src ={aws}
                    alt="aws"
                    />  
                    </CircularProgressbarWithChildren>
                    );
                    }}
                </AnimatedProgressProvider> 
                <p className='titleStyle'>Aws</p>
    </div> 
        
    <div className='barStyle'>
            <AnimatedProgressProvider
            valueStart={0}
            valueEnd={85}
            duration={1.4}
            easingFunction={easeQuadInOut}
            repeat
        >
            {value => {
            const roundedValue = Math.round(value);
            return (

                <CircularProgressbarWithChildren 
                value={value}
                text={`${roundedValue}%`}
                //  background
                //  backgroundPadding={6}
                styles={buildStyles({
                    textColor: "white",
                    zIndex:1,
                    pathColor: "red",
                    trailColor: "lightcyan", 
                    // backgroundColor: "#3e98c7"
                })}
                
                >
                   <img
                    className='imageStyle'
                    src ={jenkins}
                    alt="jenkins"
                    /> 
                </CircularProgressbarWithChildren>
                );
                }}
            </AnimatedProgressProvider>
                <p className='titleStyle'>Jenkins</p>
    </div> 
    <div className='barStyle'>
            <AnimatedProgressProvider
            valueStart={0}
            valueEnd={85}
            duration={1.4}
            easingFunction={easeQuadInOut}
            repeat
        >
            {value => {
            const roundedValue = Math.round(value);
            return (

                <CircularProgressbarWithChildren 
                value={value}
                text={`${roundedValue}%`}
                //  background
                //  backgroundPadding={6}
                styles={buildStyles({
                    textColor: "white",
                    zIndex:1,
                    pathColor: "green",
                    trailColor: "lightcyan", 
                    // backgroundColor: "#3e98c7"
                })}
                
                >
                    <img
                    className='imageStyle'
                    src ={docker}
                    alt="docker"
                    /> 
                </CircularProgressbarWithChildren>
                );
                }}
            </AnimatedProgressProvider>
                <p className='titleStyle'>Docker</p>
    </div> 
    <div className='barStyle'>
            <AnimatedProgressProvider
            valueStart={0}
            valueEnd={85}
            duration={1.4}
            easingFunction={easeQuadInOut}
            repeat
        >
            {value => {
            const roundedValue = Math.round(value);
            return (

                <CircularProgressbarWithChildren 
                value={value}
                text={`${roundedValue}%`}
                //  background
                //  backgroundPadding={6}
                styles={buildStyles({
                    textColor: "white",
                    zIndex:1,
                    pathColor: "yellow",
                    trailColor: "lightcyan", 
                    // backgroundColor: "#3e98c7"
                })}
                
                >
                   <img
                    className='imageStyle'
                    src ={postman}
                    alt="postman"
                    /> 
                </CircularProgressbarWithChildren>
                );
                }}
            </AnimatedProgressProvider>
                <p className='titleStyle'>Postman</p>
    </div> 
    
    <div className='barStyle'>
            <AnimatedProgressProvider
            valueStart={0}
            valueEnd={85}
            duration={1.4}
            easingFunction={easeQuadInOut}
            repeat
        >
            {value => {
            const roundedValue = Math.round(value);
            return (

                <CircularProgressbarWithChildren 
                value={value}
                text={`${roundedValue}%`}
                //  background
                //  backgroundPadding={6}
                styles={buildStyles({
                    textColor: "white",
                    zIndex:1,
                    pathColor: "Pink",
                    trailColor: "lightcyan", 
                    // backgroundColor: "#3e98c7"
                })}
                
                >
                   <img
                    className='imageStyle'
                    src ={awsa}
                    alt="awsa"
                    /> 
                </CircularProgressbarWithChildren>
                );
                }}
            </AnimatedProgressProvider>
                <p className='titleStyle'>Awsa</p>
    </div> 
    <div className='barStyle'>
            <AnimatedProgressProvider
            valueStart={0}
            valueEnd={85}
            duration={1.4}
            easingFunction={easeQuadInOut}
            repeat
        >
            {value => {
            const roundedValue = Math.round(value);
            return (

                <CircularProgressbarWithChildren 
                value={value}
                text={`${roundedValue}%`}
                //  background
                //  backgroundPadding={6}
                styles={buildStyles({
                    textColor: "white",
                    zIndex:1,
                    pathColor: "Cyan",
                    trailColor: "lightred", 
                    // backgroundColor: "#3e98c7"
                })}
                
                >
                   <img
                    className='imageStyle'
                    src ={git}
                    alt="git"
                    /> 
                </CircularProgressbarWithChildren>
                );
                }}
            </AnimatedProgressProvider>
                <p className='titleStyle'>Git</p>
    </div> 
    <div className='barStyle'>
            <AnimatedProgressProvider
            valueStart={0}
            valueEnd={85}
            duration={1.4}
            easingFunction={easeQuadInOut}
            repeat
        >
            {value => {
            const roundedValue = Math.round(value);
            return (

                <CircularProgressbarWithChildren 
                value={value}
                text={`${roundedValue}%`}
                //  background
                //  backgroundPadding={6}
                styles={buildStyles({
                    textColor: "white",
                    zIndex:1,
                    pathColor: "Oral",
                    trailColor: "lightcyan", 
                    // backgroundColor: "#3e98c7"
                })}
                
                >
                    <img
                    className='imageStyle'
                    src ={kubernates}
                    alt="kubernates"
                    /> 
                </CircularProgressbarWithChildren>
                );
                }}
            </AnimatedProgressProvider>
                <p className='titleStyle'>Kubernates</p>
    </div> 
    <div className='barStyle'>
            <AnimatedProgressProvider
            valueStart={0}
            valueEnd={85}
            duration={1.4}
            easingFunction={easeQuadInOut}
            repeat
        >
            {value => {
            const roundedValue = Math.round(value);
            return (

                <CircularProgressbarWithChildren 
                value={value}
                text={`${roundedValue}%`}
                //  background
                //  backgroundPadding={6}
                styles={buildStyles({
                    textColor: "white",
                    zIndex:1,
                    pathColor: "Pink",
                    trailColor: "lightcyan", 
                    // backgroundColor: "#3e98c7"
                })}
                
                >
                    {/* <img
                    className='imageStyle'
                    src ={intellij}
                    alt="intillij"
                    />   */}
                </CircularProgressbarWithChildren>
                );
                }}
            </AnimatedProgressProvider>
                <p className='titleStyle'>Intellij</p>
    </div> 
        </div>
     </div>
  )
}
