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
                
        <div className='barStyle'>
            <AnimatedProgressProvider
            valueStart={0}
            valueEnd={60}
            duration={5}
            easingFunction={easeQuadInOut}
            repeat
        >
            {value => {
            const roundedValue = Math.round(value);
            return (

                <CircularProgressbarWithChildren 
                value={value}
                text={`${roundedValue}%`} 
                styles={buildStyles({
                    textColor: "lightred",
                    zIndex:1,
                    pathColor: "blue",
                    trailColor: "#ccc6bc",  
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
                <p className='titleStyle'>Aws-Cloud</p>
    </div> 
        
    <div className='barStyle'>
            <AnimatedProgressProvider
            valueStart={0}
            valueEnd={90}
            duration={5}
            easingFunction={easeQuadInOut}
            repeat
        >
            {value => {
            const roundedValue = Math.round(value);
            return (

                <CircularProgressbarWithChildren 
                value={value}
                text={`${roundedValue}%`} 
                styles={buildStyles({
                    textColor: "white",
                    zIndex:1,
                    pathColor: "red",
                    trailColor: "#ccc6bc",  
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
            valueEnd={90}
            duration={5}
            easingFunction={easeQuadInOut}
            repeat
        >
            {value => {
            const roundedValue = Math.round(value);
            return (

                <CircularProgressbarWithChildren 
                value={value}
                text={`${roundedValue}%`} 
                styles={buildStyles({
                    textColor: "white",
                    zIndex:1,
                    pathColor: "green",
                    trailColor: "#ccc6bc",  
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
            valueEnd={100}
            duration={5}
            easingFunction={easeQuadInOut}
            repeat
        >
            {value => {
            const roundedValue = Math.round(value);
            return (

                <CircularProgressbarWithChildren 
                value={value}
                text={`${roundedValue}%`} 
                styles={buildStyles({
                    textColor: "white",
                    zIndex:1,
                    pathColor: "yellow",
                    trailColor: "#ccc6bc",  
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
            valueEnd={75}
            duration={5}
            easingFunction={easeQuadInOut}
            repeat
        >
            {value => {
            const roundedValue = Math.round(value);
            return (

                <CircularProgressbarWithChildren 
                value={value}
                text={`${roundedValue}%`} 
                styles={buildStyles({
                    textColor: "white",
                    zIndex:1,
                    pathColor: "#1fed4c",
                    trailColor: "#ccc6bc",  
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
                <p className='titleStyle'>AWS </p>
    </div> 
    <div className='barStyle'>
            <AnimatedProgressProvider
            valueStart={0}
            valueEnd={100}
            duration={5}
            easingFunction={easeQuadInOut}
            repeat
        >
            {value => {
            const roundedValue = Math.round(value);
            return (

                <CircularProgressbarWithChildren 
                value={value}
                text={`${roundedValue}%`} 
                styles={buildStyles({
                    textColor: "white",
                    zIndex:1,
                    pathColor: "Cyan",
                    trailColor: "#ccc6bc",  
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
            valueEnd={50}
            duration={5}
            easingFunction={easeQuadInOut}
            repeat
        >
            {value => {
            const roundedValue = Math.round(value);
            return (

                <CircularProgressbarWithChildren 
                value={value}
                text={`${roundedValue}%`} 
                styles={buildStyles({
                    textColor: "white",
                    zIndex:1,
                    pathColor: "#ed9c11",
                    trailColor: "#ccc6bc",  
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
            valueEnd={100}
            duration={5}
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
