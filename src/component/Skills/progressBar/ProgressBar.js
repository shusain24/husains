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


function progressBar() {
  return (
    <div className="container">
        <div className="row">  
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
                    src ={html}
                    alt="html"
                    />  
                    </CircularProgressbarWithChildren>
                    );
                    }}
                </AnimatedProgressProvider> 
                <p className='titleStyle'>HTML</p>
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
