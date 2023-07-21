import { useState, useEffect } from "react";
import "./index.scss";
import {  Routes, Route } from 'react-router-dom';
import Home from "./Components/Home";
import Register from "./Components/Register";
import Loading from "./Components/Loading";




function App() {
  const [ loading, setLoading ] = useState(false);

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
