import "./App.scss";
import Home from "./components/home/Home";
import Navbar from "./components/nav/Navbar";
import Project from "./components/projects/Project";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Project />
    </div>
  );
}

export default App;
