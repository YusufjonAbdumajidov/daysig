import React from 'react';
import mapImage from "../assets/map4.png"

const About = () => {
  return (
    <div className='aboutContainer'>
        <section>
          <h1>Our best users are all over the world with full pocket of money</h1>
          <p>Our platfrom reaches people all over the world, hereby we are trusted as the best platfrom for binary trading!</p>
        </section>
        <section>
          <img src={mapImage} alt="" />
        </section>
    </div>
  )
}

export default About
