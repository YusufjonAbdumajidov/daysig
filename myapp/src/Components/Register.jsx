import React from 'react';
import { MdAlternateEmail } from "react-icons/md";

const Register = () => {
  return <div className='registerContainer'>
      <nav>
        <div>daysig.</div>
      </nav>
      <div className="mainRegister">
        <section>
          <h1>Welcome to daysig.</h1> 
          <p>Anyone can earn their first dollar online. Start with what you know and have. Repeat after our experienced traders and make money. It's that easy.</p>
        </section>
        <section>
        <form action="#">
            <label htmlFor="name">Name</label>
            <div>
              <input type="text"  />
            </div>
            
            <label htmlFor="name">E-mail</label>
            <div>
              <input type="email" />
            </div>
            
            <label htmlFor="password">Password</label>
            <input type="password" />
          </form>
        </section>
      </div>
  </div>
}

export default Register