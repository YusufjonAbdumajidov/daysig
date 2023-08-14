import React from 'react';
import Navbar from "./Navbar";
import Main from "./Main";
import About from "./About";
import Quality from "./Quality";
import Questions from "./Questions";
import Info from './Info';
import Testimonials from './Testimonials';

const Home = () => {
  return <>
        <Navbar />
        <Main />
        <About />
        <Quality />
        {/* <Info /> */}
        <Testimonials />
        <Questions />
        
  </>
}

export default Home