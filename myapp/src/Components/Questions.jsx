import  React from 'react';
import { useState } from 'react';
import {  BsChevronDown, BsChevronUp } from "react-icons/bs";

const Questions = () => {
  const [changeIcon, setChangeIcon] = useState(false);
  let questions = {
    firstQuestion: [
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, pariatur. Reiciendis dignissimos minima ex voluptas earum sapiente cumque consectetur laudantium esse dolorem vero officiis ipsum et, architecto voluptates harum vitae." , false
    ],
    secondQuestion: [
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, pariatur. Reiciendis dignissimos minima ex voluptas earum sapiente cumque consectetur laudantium esse dolorem vero officiis ipsum et, architecto voluptates harum vitae." 
    ],
    thirdQuestion: [
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, pariatur. Reiciendis dignissimos minima ex voluptas earum sapiente cumque consectetur laudantium esse dolorem vero officiis ipsum et, architecto voluptates harum vitae." 
    ],
    fourthQuestion: [
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, pariatur. Reiciendis dignissimos minima ex voluptas earum sapiente cumque consectetur laudantium esse dolorem vero officiis ipsum et, architecto voluptates harum vitae." 
    ],
    fifthQuestion: [
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, pariatur. Reiciendis dignissimos minima ex voluptas earum sapiente cumque consectetur laudantium esse dolorem vero officiis ipsum et, architecto voluptates harum vitae."
    ],
    sixthQuestion: [
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, pariatur. Reiciendis dignissimos minima ex voluptas earum sapiente cumque consectetur laudantium esse dolorem vero officiis ipsum et, architecto voluptates harum vitae." 
    ]
  }

  const [ showAnswer, setShowAnswer ] = useState({
    firstAnswer: false,
    secondAnswer: false,
    thirdAnswer: false,
    fourthAnswer: false,
    fifthAnswer: false,
    sixthAnswer: false,
  });

  console.log(showAnswer.firstAnswer)

  return (
    <div className='questionsContainer'>
        <section>
          <h1>Frequently Asked Questions</h1>
          <p>Have a question that is not answered? Contact us at example@gmail.com</p>
        </section>
        <section>
          <div onClick={() => { setShowAnswer({...showAnswer, firstAnswer: !showAnswer.firstAnswer}) ; setChangeIcon(!changeIcon)}} >

            <section> 1 question 
              {changeIcon ? <BsChevronDown className='downSide'/>  : <BsChevronUp className='downSide'/>}
            </section>
           
            <section className="answer">
              <p>{showAnswer.firstAnswer ? questions.firstQuestion[0] : ""}</p>
            </section>

          </div>
          <div onClick={() => { setChangeIcon(!changeIcon)}} >
            <section> 2 question <BsChevronDown className='downSide' /></section>
            
            <section className="answer">
              <p></p>
            </section>
          </div>
          <div onClick={() => setChangeIcon(!changeIcon)} ><section> 3 question <BsChevronDown className='downSide' /></section></div>
          <div onClick={() => setChangeIcon(!changeIcon)} ><section> 4 question <BsChevronDown className='downSide' /></section> </div>
          <div onClick={() => setChangeIcon(!changeIcon)} ><section> 5 question <BsChevronDown className='downSide' /></section> </div>
          <div onClick={() => setChangeIcon(!changeIcon)} ><section> 6 question <BsChevronDown className='downSide' /></section> </div>
        </section>
    </div>
  )
}

export default Questions