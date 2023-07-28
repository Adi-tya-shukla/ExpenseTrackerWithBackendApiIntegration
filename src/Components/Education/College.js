import React from "react";
import clgImg from './1490868335147625398012.webp';
import './College.css'
const College = ()=>{
    return(
<div className="college">
<div className="image">
                <img src={clgImg} alt="College" />
            </div>
            <h3>
                Established in 1999  Oldest & Largest NBA Accredited Educational Group of Central India
                4 Engineering Institutes Approved by AICTE India and Affiliated to RGPV, Bhopal
                <a href="https://technocratsgroup.edu.in/" ><b> Know More....</b></a>
                <hr/>
                    <b>
                        Bachlor's of Engineering
                        <br/>
                      
                      Passout Year - 2020
                       <br/>
                     
                      7.59 CGPA
                      <br/>
                    </b>

                
            </h3>

        </div>
    );

}

export default College;