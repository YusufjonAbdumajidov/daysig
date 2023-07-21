import "./index.scss";
import {  Routes, Route } from 'react-router-dom';
import Home from "./Components/Home";
import Register from "./Components/Register";



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home /> } />
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
