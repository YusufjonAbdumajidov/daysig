import React from 'react';
import { MdAlternateEmail } from "react-icons/md";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import PaulImage from "../assets/paul.webp"

const Register = () => {
  return <div className='registerContainer'>
      <nav>
        <div>daysig.</div>
      </nav>
      <div className="mainRegister">
        <section>
          <h1>Welcome to daysig.</h1> 
          <p>Anyone can earn their first dollar online. Start with what you know and have. Repeat after our experienced traders and make money. It's that easy.</p>
          <div className="quote">
            <p>"There is really nothing like trading. Once you crack the code it is like having an ATM on your computer." - <span>Paul Tudor Jones</span> </p>
            <img src={PaulImage} alt="" />
          </div>
        </section>
        <section>
        <form action="#">
            <label htmlFor="name">Name</label>
            <div>
              <input type="text"  />
              < BiUserCircle className='inputIcon' />
            </div>
            
            <label htmlFor="name">E-mail</label>
            <div>
              <input type="email" />
              < MdAlternateEmail className='inputIcon' />
            </div>
            
            <label htmlFor="password">Password</label>
            <div>
              <input type="password" />
              < AiOutlineEyeInvisible className='inputIcon' />
            </div>
            
          </form>
          <div className="remember">
             <div>
                <input type="checkbox" id="remember" name="remember" />
                <p>Remeber for 30 days</p>
             </div>
             <p>Forgot Password?</p>
          </div>
        </section>
      </div>
  </div>
}

export default Register