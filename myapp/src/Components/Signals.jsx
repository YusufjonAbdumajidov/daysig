import React from 'react';
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";

const Signals = () => {
  return <>
    <div className='signalsContainer'>
        <div>
            <header>
                <section>
                    <h2>Bitcoin</h2>
                    <p>crypto</p>
                </section>
                <section>
                    <button>Long</button>
                    <button>Short</button>
                </section>
            </header>
            <main>
                <section>
                    <p>Entry Date/Time:</p>
                    <span>08-12-21 9:40 AM</span>
                    <p>Position:</p>
                    <span>$200 x 1.200</span>
                </section>
                <section>
                    <p>Exit Date/Time:</p>
                    <span>08-12-21 9:40 AM</span>
                    <p>Profit:</p>
                    <span><AiFillCaretUp className='upIcon' /> $200  <AiFillCaretDown className='downIcon'  />  20%</span>
                </section>
            </main>
        </div>
        <div>
            <header>
                <section>
                    <h2>Etharium</h2>
                    <p>crypto</p>
                </section>
                <section>
                    <button>Long</button>
                    <button>Short</button>
                </section>
            </header>
            <main>
                <section>
                    <p>Entry Date/Time:</p>
                    <span>08-12-21 9:40 AM</span>
                    <p>Position:</p>
                    <span>$200 x 1.200</span>
                </section>
                <section>
                    <p>Exit Date/Time:</p>
                    <span>08-12-21 9:40 AM</span>
                    <p>Profit:</p>
                    <span><AiFillCaretUp className='upIcon' /> $200  <AiFillCaretDown className='downIcon' /> 20%</span>
                </section>
            </main>
        </div>
        <div>
            <header>
                <section>
                    <h2>Snap</h2>
                    <p>Stock</p>
                </section>
                <section>
                    <button>Long</button>
                    <button>Short</button>
                </section>
            </header>
            <main>
                <section>
                    <p>Entry Date/Time:</p>
                    <span>08-12-21 9:40 AM</span>
                    <p>Position:</p>
                    <span>$200 x 1.200</span>
                </section>
                <section>
                    <p>Exit Date/Time:</p>
                    <span>08-12-21 9:40 AM</span>
                    <p>Profit:</p>
                    <span><AiFillCaretUp className='upIcon' /> $200  <AiFillCaretDown className='downIcon'  />  20%</span>
                </section>
            </main>
        </div>
    </div>
    </>
}

export default Signals