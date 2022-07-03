import React from 'react'
import { CircularProgressbarWithChildren,buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { easeQuadInOut } from "d3-ease";
import './Progresscss.css'
import AnimatedProgressProvider from "./AnimatedProgressProvider";
import go from  './images/Go.png'
import java from  './images/java.png'
import spring from  './images/spring.png'
import sql from  './images/sql.png'

export default function BackEndBar() {
  return (
    <div className="containr">
        <div className="row">
        <div className='barStyle'> 
            <AnimatedProgressProvider
            valueStart={95}
            valueEnd={0}
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
                    textColor: "lightred",
                    zIndex:1,
                    pathColor: "red",
                    trailColor: "#fca7a9", 
                    // backgroundColor: "#3e98c7"
                })}
                
                >
                    <img
                    className='imageStyle'
                    src ={java}
                    alt="java"
                    />  
                    </CircularProgressbarWithChildren>
                    );
                    }}
                </AnimatedProgressProvider> 
                <p className='titleStyle'>Java</p>
    </div> 
        
    <div className='barStyle'> 
            <AnimatedProgressProvider
            valueStart={85}
            valueEnd={0}
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
                    textColor: "lightred",
                    zIndex:1,
                    pathColor: "#3424e0",
                    trailColor: "#fca7a9", 
                    // backgroundColor: "#3e98c7"
                })}
                
                >
                    <img
                    className='imageStyle'
                    src ={java}
                    alt="java"
                    />  
                    </CircularProgressbarWithChildren>
                    );
                    }}
                </AnimatedProgressProvider> 
                <p className='titleStyle'>AdvancedJava</p>
    </div> 
    <div className='barStyle'>
            <AnimatedProgressProvider
            valueStart={95}
            valueEnd={0}
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
                    pathColor: "#17ebeb",
                    trailColor: "#fca7a9", 
                    // backgroundColor: "#3e98c7"
                })}
                
                >
                   <img
                    className='imageStyle'
                    src ={spring}
                    alt="spring"
                    /> 
                </CircularProgressbarWithChildren>
                );
                }}
            </AnimatedProgressProvider>
                <p className='titleStyle'>Spring</p>
    </div> 
    <div className='barStyle'>
            <AnimatedProgressProvider
            valueStart={100}
            valueEnd={0}
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
                    pathColor: "#f70ad4",
                    trailColor: "#fca7a9", 
                    // backgroundColor: "#3e98c7"
                })}
                
                >
                    <img
                    className='imageStyle'
                    src ={sql}
                    alt="sql"
                    /> 
                </CircularProgressbarWithChildren>
                );
                }}
            </AnimatedProgressProvider>
                <p className='titleStyle'>Sql</p>
    </div> 
    <div className='barStyle'>
            <AnimatedProgressProvider
            valueStart={70}
            valueEnd={0}
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
                    pathColor: "green",
                    trailColor: "#fca7a9", 
                    // backgroundColor: "#3e98c7"
                })}
                
                >
                    <img
                    className='imageStyle'
                    src ={go}
                    alt="go"
                    /> 
                </CircularProgressbarWithChildren>
                );
                }}
            </AnimatedProgressProvider>
                <p className='titleStyle'>Go</p>
    </div> 
        </div>
    </div>
  )
}
