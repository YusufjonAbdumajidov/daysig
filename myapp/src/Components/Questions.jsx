import  React from 'react';
import { useState } from 'react';
import {  BsChevronDown, BsChevronUp } from "react-icons/bs";

const Questions = () => {
  const [changeIcon, setChangeIcon] = useState(false);
  let questions = {
    firstQuestion: [
      "What does your trading company specialize in trading?",
      "Our trading company specializes in various commodities, including metals, agricultural products, and energy resources." 
    ],
    secondQuestion: [
      "How do you manage trading risks?",
      "We manage trading risks through diversification, hedging, and constant market monitoring." 
    ],
    thirdQuestion: [
      "What are your trading strategies for profitability?",
      "Our strategies include arbitrage, trend following, and value investing to maximize profitability." 
    ],
    fourthQuestion: [
      "In which markets or regions do you operate?",
      "We primarily operate in North America and Europe, with plans to expand into Asian markets." 
    ],
    fifthQuestion: [
      "How do you maintain strong supplier and customer relationships?",
      "Strong relationships are maintained through open communication, fair negotiations, and timely deliveries."
    ],
    sixthQuestion: [
      "What technology do you use for efficient trading operations?",
      "We use advanced trading software and data analytics tools for efficient order execution and risk management." 
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
          <p>Have a question that is not answered? Contact us at: <span>example@gmail.com</span> </p>
        </section>
        <section>
          <div onClick={() => { setShowAnswer({...showAnswer, firstAnswer: !showAnswer.firstAnswer}) ; setChangeIcon(!changeIcon)}} >
            <section> <h2>{questions.firstQuestion[0]}</h2>  
              {showAnswer.firstAnswer ? <BsChevronDown className='downSide'/>  : <BsChevronUp className='downSide'/>}
            </section>
            <section className="answer">
              <p>{showAnswer.firstAnswer ? questions.firstQuestion[1] : ""}</p>
            </section>
          </div>
          <div onClick={() => { setShowAnswer({...showAnswer, secondAnswer: !showAnswer.secondAnswer}) }} >
            <section> <h2>{questions.secondQuestion[0]}</h2> 
              {showAnswer.secondAnswer ? <BsChevronDown className='downSide'/>  : <BsChevronUp className='downSide'/>}
            </section>
            <section className="answer">
              <p>{showAnswer.secondAnswer ? questions.secondQuestion[1] : ""}</p>
            </section>
          </div>
          <div onClick={() => { setShowAnswer({...showAnswer, thirdAnswer: !showAnswer.thirdAnswer}) }} >
            <section> <h2>{questions.thirdQuestion[0]}</h2>  
              {showAnswer.thirdAnswer ? <BsChevronDown className='downSide'/>  : <BsChevronUp className='downSide'/>}
            </section>
            <section className="answer">
              <p>{showAnswer.thirdAnswer ? questions.thirdQuestion[1] : ""}</p>
            </section>
          </div>
          <div onClick={() => { setShowAnswer({...showAnswer, fourthAnswer: !showAnswer.fourthAnswer}) }} >
            <section> <h2>{questions.fourthQuestion[0]}</h2> 
              {showAnswer.fourthAnswer ? <BsChevronDown className='downSide'/>  : <BsChevronUp className='downSide'/>}
            </section>
            <section className="answer">
              <p>{showAnswer.fourthAnswer ? questions.fourthQuestion[1] : ""}</p>
            </section>
          </div>
          <div onClick={() => { setShowAnswer({...showAnswer, fifthAnswer: !showAnswer.fifthAnswer}) }} >
            <section> <h2>{questions.fifthQuestion[0]}</h2>  
              {showAnswer.fifthAnswer ? <BsChevronDown className='downSide'/>  : <BsChevronUp className='downSide'/>}
            </section>
            <section className="answer">
              <p>{showAnswer.fifthAnswer ? questions.fifthQuestion[1] : ""}</p>
            </section>
          </div>
          <div onClick={() => { setShowAnswer({...showAnswer, sixthAnswer: !showAnswer.sixthAnswer}) }} >
            <section> <h2>{questions.sixthQuestion[0]}</h2> 
              {showAnswer.sixthAnswer ? <BsChevronDown className='downSide'/>  : <BsChevronUp className='downSide'/>}
            </section>
            <section className="answer">
              <p>{showAnswer.sixthAnswer ? questions.sixthQuestion[1] : ""}</p>
            </section>
          </div>
        </section>
    </div>
  )
}

export default Questions