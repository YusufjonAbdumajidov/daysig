import React from 'react';
import mainImage from "../assets/3.png";
import { BsArrowRight } from "react-icons/bs";
import { SiBinance, SiCoinmarketcap } from "react-icons/si";


const Main = () => {
  return (
    <main>

        <div className="info">
            <h1>Expert Signals for Profitable Trading</h1>
            <p>Our team of seasoned traders and cutting-edge algorithms analyze market trends and indicators to deliver accurate signals in real-time.</p>
            <button>Get free signals  <BsArrowRight className='rightArrow' /> </button>
            <div className="sponsors">
              <div>
                <p className="binance"><SiBinance className='sponsorIcon' />Binance</p>
                <p>Blockchain</p>
              </div>
              <div>
                <p> <SiCoinmarketcap className='sponsorIcon' />Coinmarket</p>
                <p>Principal</p>
              </div>
              <div>
                <p>Coinbase</p>
                <p><span>ECN</span>capital</p>
              </div>
              
            </div>
        </div>
        <div className="showcase">
          <img src={mainImage} alt="" />
        </div>
    </main>
  )
}

export default Main