import React, { useState } from 'react';
import { MdAlternateEmail } from "react-icons/md";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { Link } from 'react-router-dom';
import axios from 'axios';

const Login = () => {

  const [ passwordVisible, setPasswordVisible ] = useState(true);

  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ errorMessage, setErrorMessage ] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();

    try{
      const response = await axios.post('###', {username, email, password});
      console.log(response);

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
                <p>Do not have an acoount? <span> <Link to="/Register" className='registerBtn'>Register</Link> </span></p>
             </div>
          </div>

            <button className='loginBtn' type='submit'>Log In</button>
            
          </form>
          {errorMessage &&  <p id='error-message'>{errorMessage}</p>}
     
        </section>
      </div>
  </div>
}

export default Login