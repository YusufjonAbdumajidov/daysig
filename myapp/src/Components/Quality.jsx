import React from 'react';
import { FiStar } from 'react-icons/fi';
import { AiOutlineSecurityScan, AiOutlinePercentage } from 'react-icons/ai';
import { BiMoneyWithdraw } from 'react-icons/bi';

const Quality = () => {
  return (
    <div className='qualityContainer'>
        <h1>We take care of our quality</h1>
        <p>You can find the best quality and profitable dayly trading signals in DAYSIG</p>
        <div className="qualities">
            <section>
              <FiStar />
            </section>
            <section>
              <AiOutlineSecurityScan />
            </section>
            <section>
              <AiOutlinePercentage />
            </section>
            <section>
              <BiMoneyWithdraw />
            </section>
        </div>
    </div>
  )
}

export default Quality