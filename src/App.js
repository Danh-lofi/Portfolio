import { useState } from "react";
import "./App.scss";
import BarMenu from "./components/bar-menu/BarMenu";
import Contact from "./components/contact/Contact";
import Home from "./components/home/Home";
import Navbar from "./components/nav/Navbar";
import Project from "./components/projects/Project";

function App() {
  const [isBar, setIsBar] = useState(false);
  const changeIsBarHandler = () => {
    setIsBar((isBar) => !isBar);
  };
  return (
    <div className="App">
      <Navbar onClick={changeIsBarHandler} />
      <Home />
      <Project />
      <Contact />
      <BarMenu isBar={isBar} onClick={changeIsBarHandler} />
    </div>
  );
}

export default App;
