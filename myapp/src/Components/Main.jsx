import React from 'react';
import mainImage from "../assets/3.png";
import { HiArrowLongRight } from "react-icons/hi";

const Main = () => {
  return (
    <main>
        <div className="info">
            <h1>Expert Signals for Profitable Trading</h1>
            <p>Our team of seasoned traders and cutting-edge algorithms analyze market trends and indicators to deliver accurate signals in real-time.</p>
            <button>Get free signals <HiArrowLongRight /> </button>
        </div>
        <div className="showcase">
            <img src={mainImage} alt="" />
        </div>
    </main>
  )
}

export default Main