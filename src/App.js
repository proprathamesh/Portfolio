import Navbar from "./Components/Navbar";
import React from "react";
import "./Components/nav.css";
import Intro from "./Components/Intro";
import Skills from "./Components/Skills";
import Works from "./Components/Works";
import EduBack from "./Components/Edu_back";
import Footer from "./Components/Footer";

function App() {
  // window.addEventListener('scroll', checkTop);
  function checkTop(element) {
    let rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    let trigger = rect.top - windowHeight + rect.height/2;
    if(trigger <= 0){
      return true;
    }
  }
  function fadeLeft(elements) {
    for (let i = 0; i < elements.length; i++) {
      let element = elements[i];
      if (checkTop(element)) {    
        element.classList.add('fading-left')
      }
    }
  }
  function zoomIn(elements) {
    for (let i = 0; i < elements.length; i++) {
      let element = elements[i];
      if (checkTop(element)) {
        element.classList.add('zoomIn')
      }
    }
  }
  return (
    <div className="">
      <Navbar />
      <Intro />
      <Skills fadeLeft={fadeLeft} zoomIn={zoomIn}/>
      <Works/>
      <EduBack/>
      <Footer/>
    </div>
  );
}

export default App;
