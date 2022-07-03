import React from 'react' 
import { CircularProgressbarWithChildren,buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { easeQuadInOut } from "d3-ease";
import './Progresscss.css'
import AnimatedProgressProvider from "./AnimatedProgressProvider";
import html from  './images/Html.png'
import css from  './images/Css.png'
import js from  './images/js.png'
import react from  './images/react.png'
import angular from  './images/Angular.png'
import jquery from  './images/jqery.png'
import bootstrap from  './images/Bootstrap.png'
import node from  './images/Node.png'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional


function progressBar() {
  return (
    <div className="container">
        <div className="row">  
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
                    pathColor: "#1100ff",
                    trailColor: "lightcyan",  
                })}
                
                >
                    <img
                    className='imageStyle'
                    src ={html}
                    alt="html"
                    />  
                    </CircularProgressbarWithChildren>
                    );
                    }}
                </AnimatedProgressProvider> 
                <Tippy className='hoverStyle' content="Hello HTML">
                <p className='titleStyle'>HTML</p> 
                </Tippy>
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
                    pathColor: "red",
                    trailColor: "lightcyan", 
                    // backgroundColor: "#3e98c7"
                })}
                
                >
                   <img
                    className='imageStyle'
                    src ={css}
                    alt="css"
                    /> 
                </CircularProgressbarWithChildren>
                );
                }}
            </AnimatedProgressProvider>
                <p className='titleStyle'>CSS</p>
    </div> 
    <div className='barStyle'>
            <AnimatedProgressProvider
            valueStart={0}
            valueEnd={85}
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
                    trailColor: "lightcyan",  
                })}
                
                >
                    <img
                    className='imageStyle'
                    src ={js}
                    alt="js"
                    /> 
                </CircularProgressbarWithChildren>
                );
                }}
            </AnimatedProgressProvider>
                <p className='titleStyle'>JS</p>
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
                //  background
                //  backgroundPadding={6}
                styles={buildStyles({
                    textColor: "white",
                    zIndex:1,
                    pathColor: "#00f7ff",
                    trailColor: "lightcyan", 
                    // backgroundColor: "#3e98c7"
                })}
                
                >
                   <img
                    className='imageStyle'
                    src ={react}
                    alt="react"
                    /> 
                </CircularProgressbarWithChildren>
                );
                }}
            </AnimatedProgressProvider>
                <p className='titleStyle'>React</p>
    </div> 
    
    <div className='barStyle'>
            <AnimatedProgressProvider
            valueStart={0}
            valueEnd={70}
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
                    pathColor: "#fffb00",
                    trailColor: "lightcyan",  
                })}
                
                >
                   <img
                    className='imageStyle'
                    src ={angular}
                    alt="angular"
                    /> 
                </CircularProgressbarWithChildren>
                );
                }}
            </AnimatedProgressProvider>
                <p className='titleStyle'>Angular</p>
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
                    pathColor: "#00ff00",
                    trailColor: "lightred",  
                })}
                
                >
                   <img
                    className='imageStyle'
                    src ={bootstrap}
                    alt="bootstarp"
                    /> 
                </CircularProgressbarWithChildren>
                );
                }}
            </AnimatedProgressProvider>
                <p className='titleStyle'>Bootstrap</p>
    </div> 
    <div className='barStyle'>
            <AnimatedProgressProvider
            valueStart={0}
            valueEnd={95}
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
                    trailColor: "lightcyan",  
                })}
                
                >
                    <img
                    className='imageStyle'
                    src ={jquery}
                    alt="jquery"
                    /> 
                </CircularProgressbarWithChildren>
                );
                }}
            </AnimatedProgressProvider>
                <p className='titleStyle'>Jquery</p>
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
                    pathColor: "#ff00b3",
                    trailColor: "lightcyan", 
                    // backgroundColor: "#3e98c7"
                })}
                
                >
                    <img
                    className='imageStyle'
                    src ={node}
                    alt="node"
                    />  
                </CircularProgressbarWithChildren>
                );
                }}
            </AnimatedProgressProvider>
                <p className='titleStyle'>NodeJs</p>
    </div> 
    </div>
    
    </div>
  )
}
 

export default progressBar
