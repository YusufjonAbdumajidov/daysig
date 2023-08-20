import React from 'react';
import trader1 from "../assets/trader1.jpg";
import trader2 from "../assets/trader1.jpg";
import trader3 from "../assets/trader1.jpg";

const Testimonials = () => {
  return (
    <div className='testimonies_container'>
        <h1>Hear from real clients and traders about their experience with our signals</h1>
        <div>
          <section>
            <div>
              <img src={trader1} alt="" />
            </div>
            <div>
              <img src={trader2} alt="" />
            </div>
            <div>
              <img src={trader3} alt="" />
            </div>
          </section>
          <section></section>
        </div>
       
    </div>
  )
}

export default Testimonials