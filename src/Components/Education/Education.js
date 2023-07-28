import React from "react";
import "./Education.css";

import School from "./School";
import College from "./College";

const Education = () => {
  return (
    <div className="education">
      <h2>Education Background</h2>
      <hr />
      
      <div className="content-boxes">
        
      <div className="clg-box">
          <h4>College  -   Technocrats Institute of Technology, Bhopal</h4>
          <College />
        </div>
        <div className="scl-box">
          <h4>School - Jawahar Navodaya Vidyalaya, Korea(C.G.)</h4>
          <School />
        </div>

      </div>
    </div>
  );
};

export default Education;
