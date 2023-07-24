import React from 'react'

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
            <input type="text" />
            <label htmlFor="name">E-mail</label>
            <input type="email" />
            <label htmlFor="password">Password</label>
            <input type="password" />
          </form>
        </section>
      </div>
  </div>
}

export default Register