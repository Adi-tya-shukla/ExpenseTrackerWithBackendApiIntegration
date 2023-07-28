import React from "react";
import './Skills.css'
import jScript from './java-script.png'
import java from './java.png'
import css from './css-3.png'
import html from './html-5 (1).png'
// import reactIc from './logo192.png'


const Skills= ()=>{
    return (
        <div className="skills" id="skills">
          <h2 className="skill-header">My Skills Set</h2>
          <div className="skills-wrapper">
              <img
                src={jScript}
                alt="JavaScript"
                loading="lazy"
                className="icon icon-card"
              
              />
              <img
                src={java}
                alt="Java"
                loading="lazy"
                className="icon icon-card"
           
              />
              {/* <img
                src={reactIc}
                alt="Reactjs"
                loading="lazy"
                className="icon icon-card"
             
              /> */}
            </div>

              <img
                src={html}
                alt="html"
                loading="lazy"
                className="icon icon-card"
           
              />
              <img
                src={css}
                alt="css"
                loading="lazy"
                className="icon icon-card"
               
              />
              
            </div>

      );
    }
export default Skills;