import React from "react";
import schlImg from './sp-485375168-voi19c-thumbnail.jpg';
import './School.css'
const School = () => {
    return (
        <div className="schoolDisc">
          <div className="image">
        <img src={schlImg} alt="School" />
      </div>

            <h3>
            Jawahar Navodaya Vidyalaya are fully residential, co-educational schools affiliated to CBSE, New Delhi having classes up to 12 standard.
            Navodaya Vidyalaya Samiti, an autonomous Organization under the ministry of HRD, Government of India, manages these Vidyalayas.
           <br/>
            <a href="https://navodaya.gov.in/nvs/en/Home1"><b> Know More....</b></a>
            </h3>
            <h3>
                I was honored to be part of this prestiges organization.
                There I complete my schooling from 6th class to 12th class.
                There I got comprehensive education that combines academics,
                personality development, sports, and cultural activities.
                Living together with many friends who came from different family background
                fosters adaptability and teamwork skills.
                <br/>
                <p>
               2014- 10th -   CBSE   - 9.0 CGPA
               <br/>
               2016- 12th - PCM - CBSE - 69.4%
            </p>
           </h3>
        
           
        
        </div>
    )
}

export default School;