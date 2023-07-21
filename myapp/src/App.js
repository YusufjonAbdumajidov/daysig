import "./index.scss";
import {  Routes, Route } from 'react-router-dom';
import Home from "./Components/Home";



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home /> } />
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
