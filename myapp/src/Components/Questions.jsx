import  React from 'react';
import { useState } from 'react';
import {  BsChevronDown, BsChevronUp } from "react-icons/bs";

const Questions = () => {
  const [changeIcon, setChangeIcon] = useState(false);
  console.log(changeIcon);
  return (
    <div className='questionsContainer'>
        <section>
          <h1>Frequently Asked Questions</h1>
          <p>Have a question that is not answered? Contact us at example@gmail.com</p>
        </section>
        <section>
          <div onClick={() => setChangeIcon(!changeIcon)} >
            <section> 1 question 
              {changeIcon ? <BsChevronDown className='downSide'/>  : <BsChevronUp className='downSide'/>}
            </section>
            <section className="answer">
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, pariatur. Reiciendis dignissimos minima ex voluptas earum sapiente cumque consectetur laudantium esse dolorem vero officiis ipsum et, architecto voluptates harum vitae.</p>
            </section>
          </div>
          <div onClick={() => setChangeIcon(!changeIcon)} ><section> 2 question <BsChevronDown className='downSide' /></section> </div>
          <div onClick={() => setChangeIcon(!changeIcon)} ><section> 3 question <BsChevronDown className='downSide' /></section> </div>
          <div onClick={() => setChangeIcon(!changeIcon)} ><section> 4 question <BsChevronDown className='downSide' /></section> </div>
          <div onClick={() => setChangeIcon(!changeIcon)} ><section> 5 question <BsChevronDown className='downSide' /></section> </div>
          <div onClick={() => setChangeIcon(!changeIcon)} ><section> 6 question <BsChevronDown className='downSide' /></section> </div>
        </section>
    </div>
  )
}

export default Questions