import React from 'react';
import {  BsChevronDown, BsChevronUp } from "react-icons/bs";

const Questions = () => {
  return (
    <div className='questionsContainer'>
        <section>
          <h1>Frequently Asked Questions</h1>
          <p>Have a question that is not answered? Contact us at example@gmail.com</p>
        </section>
        <section>
          <div>1 question <BsChevronDown className='downSide' /> </div>
          <div>2 question <BsChevronDown className='downSide' /></div>
          <div>3 question <BsChevronDown className='downSide' /></div>
          <div>4 question <BsChevronDown className='downSide' /></div>
          <div>5 question <BsChevronDown className='downSide' /></div>
          <div>6 question <BsChevronDown className='downSide' /></div>
        </section>
    </div>
  )
}

export default Questions