import React from "react";
import { FaLinkedin, FaEnvelope, FaWhatsapp, FaPhone } from "react-icons/fa";
import "./Navigation.css";

const Navigation = () => {
  return (
    <>
    <nav>
      <ul>
      {/* <li>
          <p className="contact-text">Contact Me </p>
        </li> */}
        <li>
          <a href="https://www.linkedin.com/in/shukla-adityaa/" target="_blank"  rel="noreferrer" 
          >
            <FaLinkedin className="fa-icon" />
          </a>
        </li>
        <li>
          <a href="mailto:shuklaji247@gmail.com"  target="_blank"  rel="noreferrer">
            <FaEnvelope  className="fa-icon"/>
          </a>
        </li>
        <li>
          <a href="https://wa.me/8827340717" target="_blank"  rel="noreferrer">
            <FaWhatsapp  className="fa-icon"/>
          </a>
        </li>
        <li>
          <a href="tel:+91-8827340717" target="_blank"  rel="noreferrer">
            <FaPhone  className="fa-icon"/>
          </a>
        </li>
      </ul>
    </nav>
    </>
    
  );
};

export default Navigation;
