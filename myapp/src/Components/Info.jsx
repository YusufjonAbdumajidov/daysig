import React from 'react';
import trader1 from "../assets/trader1.avif";
import trader2 from "../assets/trader2.jpg";
import trader3 from "../assets/trader3.jpg";
import trader4 from "../assets/trader4.jpg";

const Info = () => {
  return (
    <div className='infoContainer'>
      <section>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam rem sint temporibus eaque quae fuga numquam rerum, quas voluptate atque, itaque cupiditate voluptates minus architecto ipsa expedita. Eveniet, quibusdam quisquam!
      </section>
      <section>
        <div>
          <img src={trader1} alt="" />
        </div>
        <div>
          <img src={trader2} alt="" />
          <img src={trader3} alt="" />
        </div>
        <div>
          <img src={trader4} alt="" />
        </div>
        
      </section>
      <section>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi sequi cumque pariatur consequatur asperiores deleniti illo, reiciendis est sapiente nemo. Non quaerat, fugit animi hic necessitatibus mollitia voluptatem! Nesciunt, provident.
      </section>
    </div>
  )
}

export default Info