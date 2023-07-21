import React from 'react';
import Navbar from "./Navbar";
import Main from "./Main";
import About from "./About";
import Quality from "./Quality";
import Questions from "./Questions";

const Home = () => {
  return <>
        <Navbar />
        <Main />
        <About />
        <Quality />
        <Questions />
  </>
}

export default Home