import React, { useState } from 'react';
import { MdAlternateEmail } from "react-icons/md";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { Link } from 'react-router-dom';
import axios from 'axios';



const Register = () => {

  const [ passwordVisible, setPasswordVisible ] = useState(true);
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ errorMessage, setErrorMessage ] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();

    try{
      const response = await axios.post('api/login', {username, password});

      if(response.status === 200){
        alert(response.data.message)
      }
    }catch(error){
      if(error.response && error.response.data){
        setErrorMessage(error.response.data.error);
      }else{
        setErrorMessage(' An error accured during a login');
      }
    }
  }

  return <div className='registerContainer'>
      <nav>
        <div><Link to="/" className='logo'>daysig.</Link></div>
      </nav>
      <div className="mainRegister">
        <section>
          <h1>Welcome to daysig.</h1> 
          <p>Anyone can earn their first dollar online. Start with what you know and have. Repeat after our experienced traders and make money. It's that easy.</p>
          {/* <div className="quote">
            <p>"There is really nothing like trading. Once you crack the code it is like having an ATM on your computer." - <span>Paul Tudor Jones</span> </p>
            <img src={PaulImage} alt="" />
          </div> */}
        </section>
        <section>
        <form onSubmit={handleLogin}>
            <label htmlFor="name">Name</label>
            <div>
              <input 
              type="text"
              id='username'
              value={username}
              onChange={(e) => setUsername(e.target.value)} required  />
              < BiUserCircle className='inputIcon' />
            </div>
            
            <label htmlFor="name">E-mail</label>
            <div>
              <input 
              type="email"
              id='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)} required />
              < MdAlternateEmail className='inputIcon' />
            </div>
            
            <label htmlFor="password">Password</label>
            <div>
              <input 
              type={ passwordVisible ? "text" : "password"}
              id='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)} />
              {
                passwordVisible ? < AiOutlineEye className='inputIcon' onClick={() => setPasswordVisible(!passwordVisible)} /> : < AiOutlineEyeInvisible className='inputIcon' onClick={() => setPasswordVisible(!passwordVisible)} />
              }
              
            </div>

            <div className="remember">
             <div>
                <p>Have an acoount? <span> <Link to="/Login" className='loginBtn' >Login</Link></span></p>
             </div>
          </div>

            <button className='loginBtn' type='submit'>Create an account</button>
            
          </form>
          {errorMessage &&  <p id='error-message'>{errorMessage}</p>}
     
        </section>
      </div>
  </div>
}

export default Register