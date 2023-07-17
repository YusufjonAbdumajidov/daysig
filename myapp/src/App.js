import "./index.scss";
import Navbar from "./Components/Navbar";
import Main from "./Components/Main";
import About from "./Components/About";
import Quality from "./Components/Quality";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <About />
      <Quality />
    </div>
  );
}

export default App;
