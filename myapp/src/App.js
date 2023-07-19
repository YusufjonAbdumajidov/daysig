import "./index.scss";
import Navbar from "./Components/Navbar";
import Main from "./Components/Main";
import About from "./Components/About";
import Quality from "./Components/Quality";
import Questions from "./Components/Questions";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <About />
      <Quality />
      <Questions />
    </div>
  );
}

export default App;
