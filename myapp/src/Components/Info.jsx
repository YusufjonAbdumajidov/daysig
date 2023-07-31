import React from 'react';
import trader1 from "../assets/trader1.avif";
import trader2 from "../assets/trader2.jpg";
import trader3 from "../assets/trader3.jpg";
import trader4 from "../assets/trader4.jpg";

const Info = () => {
  return (
    <div className='infoContainer'>

   
      
      <section>
        <h2>Experienced</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam rem sint temporibus eaque quae fuga numquam rerum, quas voluptate atque, itaque cupiditate voluptates minus architecto ipsa expedita. Eveniet, quibusdam quisquam!
        </p>
      </section>
      <section>
        <h1>Traders</h1>
        <div>
          <img src={trader1} alt="" />
          <img src={trader2} alt="" />
        </div>
        <div>
          <img src={trader3} alt="" />
          <img src={trader4} alt="" /> 
        </div> 
      </section>
      <section>
        <h2>Dedicated</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam rem sint temporibus eaque quae fuga numquam rerum, quas voluptate atque, itaque cupiditate voluptates minus architecto ipsa expedita. Eveniet, quibusdam quisquam!
        </p>
      </section>
      </div>
  
  )
}

export default Info