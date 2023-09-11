import Navbar from "./Components/Navbar";
import React from "react";
import "./Components/nav.css";
import Intro from "./Components/Intro";
import Skills from "./Components/Skills";
import Works from "./Components/Works";
import Edu_back from "./Components/Edu_back";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="">
      <Navbar />
      <Intro />
      <Skills/>
      <Works/>
      <Edu_back/>
      <Footer/>
    </div>
  );
}

export default App;
