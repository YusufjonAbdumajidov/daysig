import  React from 'react';
import { useState } from 'react';
import {  BsChevronDown, BsChevronUp } from "react-icons/bs";

const Questions = () => {
  const [changeIcon, setChangeIcon] = useState(false);
  let questions = {
    firstQuestion: [
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, pariatur. Reiciendis dignissimos minima ex voluptas earum sapiente cumque consectetur laudantium esse dolorem vero officiis ipsum et, architecto voluptates harum vitae." 
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

 

  return (
    <div className='questionsContainer'>
        <section>
          <h1>Frequently Asked Questions</h1>
          <p>Have a question that is not answered? Contact us at example@gmail.com</p>
        </section>
        <section>
          <div onClick={() => { setShowAnswer({...showAnswer, firstAnswer: !showAnswer.firstAnswer}) ; setChangeIcon(!changeIcon)}} >
            <section> <h2>1 question</h2>  
              {showAnswer.firstAnswer ? <BsChevronDown className='downSide'/>  : <BsChevronUp className='downSide'/>}
            </section>
            <section className="answer">
              <p>{showAnswer.firstAnswer ? questions.firstQuestion[0] : ""}</p>
            </section>
          </div>
          <div onClick={() => { setShowAnswer({...showAnswer, secondAnswer: !showAnswer.secondAnswer}) }} >
            <section> <h2>2 question </h2> 
              {showAnswer.secondAnswer ? <BsChevronDown className='downSide'/>  : <BsChevronUp className='downSide'/>}
            </section>
            <section className="answer">
              <p>{showAnswer.secondAnswer ? questions.secondQuestion[0] : ""}</p>
            </section>
          </div>
          <div onClick={() => { setShowAnswer({...showAnswer, thirdAnswer: !showAnswer.thirdAnswer}) }} >
            <section> <h2>3 question</h2>  
              {showAnswer.thirdAnswer ? <BsChevronDown className='downSide'/>  : <BsChevronUp className='downSide'/>}
            </section>
            <section className="answer">
              <p>{showAnswer.thirdAnswer ? questions.thirdQuestion[0] : ""}</p>
            </section>
          </div>
          <div onClick={() => { setShowAnswer({...showAnswer, fourthAnswer: !showAnswer.fourthAnswer}) }} >
            <section> <h2>4 question </h2> 
              {showAnswer.fourthAnswer ? <BsChevronDown className='downSide'/>  : <BsChevronUp className='downSide'/>}
            </section>
            <section className="answer">
              <p>{showAnswer.fourthAnswer ? questions.fourthQuestion[0] : ""}</p>
            </section>
          </div>
          <div onClick={() => { setShowAnswer({...showAnswer, fifthAnswer: !showAnswer.fifthAnswer}) }} >
            <section> <h2>5 question</h2>  
              {showAnswer.fifthAnswer ? <BsChevronDown className='downSide'/>  : <BsChevronUp className='downSide'/>}
            </section>
            <section className="answer">
              <p>{showAnswer.fifthAnswer ? questions.fifthQuestion[0] : ""}</p>
            </section>
          </div>
          <div onClick={() => { setShowAnswer({...showAnswer, sixthAnswer: !showAnswer.sixthAnswer}) }} >
            <section> <h2> 6 question</h2> 
              {showAnswer.sixthAnswer ? <BsChevronDown className='downSide'/>  : <BsChevronUp className='downSide'/>}
            </section>
            <section className="answer">
              <p>{showAnswer.sixthAnswer ? questions.sixthQuestion[0] : ""}</p>
            </section>
          </div>
        </section>
    </div>
  )
}

export default Questions