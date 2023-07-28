import React from "react";
import img from './IMG-20220717-WA0037_auto_x2_colored_toned_light_ai.jpg'
import './About.css';
const About = ()=>{
return<div className="about">
   <div className="image">
    <img src={img} alt='Profile'/>
    </div>
    <div>
    <h2>
        ADITYA SHUKLA
    </h2>
    
    <p>
        Highly motivated front-end developer with a strong passion for creating engaging and intuitive user experiences. Seeking
        an opportunity to leverage my skills to contribute to the development of innovative web applications. Committed to
        staying up-to-date with emerging technologies and best practices in front-end development to deliver high-quality, pixel-perfect designs. 
        Dedicated team player with excellent problem-solving abilities and a keen eye for detail.
    </p>
    </div>
   
</div>
}
export default About;
