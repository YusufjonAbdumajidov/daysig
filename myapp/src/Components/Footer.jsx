import React from 'react';
import { BsInstagram } from  "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footerContainer' >
      <section>
        <ul>
        <h1>DAYSIG</h1>
        <p>Our team of seasoned traders and cutting-edge algorithms analyze market trends and indicators to deliver accurate signals in real-time.</p>
        </ul>
        
      </section>
      <section>
        <ul>
        <h2>Useful Links</h2>
          <li>About</li>
          <li>Signals</li>
          <li>Registraion</li>
          <li>Market</li>
          <li>Community</li>
          <li>Resources</li>
        </ul>
      </section>
      <section>
        <ul>
          <h2>Address</h2>
          <li>New York</li>
          <li>Wolf street</li>
          <li>+39 292 292 999</li>
          <li>est@gmail.com</li>
        </ul>
        <ol>
          <li>< BsInstagram /></li>
          <li>< AiOutlineMail /></li>
          <li>< FaFacebook /></li>
        </ol>
      </section>
    </div>
  )
}

export default Footer