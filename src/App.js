import "./App.scss";
import Contact from "./components/contact/Contact";
import Home from "./components/home/Home";
import Navbar from "./components/nav/Navbar";
import Project from "./components/projects/Project";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
