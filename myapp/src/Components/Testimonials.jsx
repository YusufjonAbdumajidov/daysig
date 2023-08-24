import React from 'react';
import trader1 from "../assets/trader1.jpg";
import trader2 from "../assets/trader1.jpg";
import trader3 from "../assets/trader1.jpg";
import { LiaStarSolid } from "react-icons/lia";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const Testimonials = () => {
  return (
    <div className='testimonies_container'>
        <h1>Hear from real clients and traders about their experience with our signals</h1>
        <div>
          <section>
            <div>
              <img src={trader1} alt="" />
              <h3>Paul Swinson</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, provident!</p>
              <span className="ratingStars">
                < LiaStarSolid className='star' />
                < LiaStarSolid className='star' />
                < LiaStarSolid className='star' />
                < LiaStarSolid className='star' />
                < LiaStarSolid className='star' />
              </span>
            </div>
            <div>
              <img src={trader2} alt="" />
              <h3>George</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, provident!</p>
              <span className="ratingStars">
                < LiaStarSolid className='star' />
                < LiaStarSolid className='star' />
                < LiaStarSolid className='star' />
                < LiaStarSolid className='star' />
                < LiaStarSolid className='star' />
              </span>
            </div>
            <div>
              <img src={trader3} alt="" />
              <h3>Alexander</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, provident!</p>
              <span className="ratingStars">
                <LiaStarSolid className='star' />
                <LiaStarSolid className='star' />
                < LiaStarSolid className='star' />
                < LiaStarSolid className='star' />
                < LiaStarSolid className='star' />
              </span>
            </div>
          </section>
          <section>
            < BsArrowLeft className='leftArrow' />
            < BsArrowRight className='rightArrow' />
          </section>
        </div>
       
    </div>
  )
}

export default Testimonials