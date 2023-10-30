import { useState, useEffect } from "react";
import "./index.scss";
import {  Routes, Route } from 'react-router-dom';
import Home from "./Components/Home";
import Register from "./Components/Register";
import Loading from "./Components/Loading";
import Login from "./Components/Login";
import Signals from "./Components/Signals";




function App() {
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2500)
  }, []);


  return (
    <div className="App">
      <Routes>
        {
          loading ? <Route path="/" element={ <Loading /> } /> : <Route path="/" element={ <Home /> } />
        }
        
        <Route path="/Register" element={ <Register /> }  />
        <Route path="/Signals" element={ <Signals /> }  />
        <Route path="/Login" element={ <Login /> } />
      </Routes>


      {/* <Navbar />
      <Main />
      <About />
      <Quality />
      <Questions /> */}
    </div>
  );
}

export default App;
