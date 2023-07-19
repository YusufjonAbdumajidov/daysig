import React from 'react';
import { FiStar } from 'react-icons/fi';
import { AiOutlineSecurityScan, AiOutlinePercentage } from 'react-icons/ai';
import { BiMoneyWithdraw } from 'react-icons/bi';

const Quality = () => {
  return (
    <div className='qualityContainer'>
      <div className="qualityIntro">
        <h1>We take care of our quality</h1>
        <p>You can find the best quality and profitable dayly trading signals in DAYSIG</p>
      </div>
        
        <div className="qualities">
       
            <section>
              <FiStar className='qualityIcon' />
              <h2>Best Quality</h2>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate dicta adipisci vitae, quas totam dolore distinctio accusantium?</p>
            </section>
            <section>
              <AiOutlineSecurityScan className='qualityIcon' />
              <h2>Secure</h2>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate dicta adipisci vitae, quas totam dolore distinctio accusantium?</p>
            </section>
            <section>
              <AiOutlinePercentage className='qualityIcon' />
              <h2>85% Winning Rate</h2>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate dicta adipisci vitae, quas totam dolore distinctio accusantium?</p>
            </section>
            <section>
              <BiMoneyWithdraw className='qualityIcon' />
              <h2>Profitable Trades</h2>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate dicta adipisci vitae, quas totam dolore distinctio accusantium?</p>
            </section>
        </div>
    </div>
  )
}

export default Quality