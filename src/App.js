import { useEffect, useState } from "react";
import "./App.scss";
import BarMenu from "./components/bar-menu/BarMenu";
import Contact from "./components/contact/Contact";
import Home from "./components/home/Home";
import Navbar from "./components/nav/Navbar";
import Project from "./components/projects/Project";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [isBar, setIsBar] = useState(false);
  useEffect(() => {
    AOS.init();
  }, []);
  const changeIsBarHandler = () => {
    setIsBar((isBar) => !isBar);
  };
  useEffect(() => {
    fetch("https://doan-be.vercel.app/mail", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
    });
  });
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
