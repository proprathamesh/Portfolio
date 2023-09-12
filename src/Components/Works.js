import React from "react";
import billgenie from "./billgenie.png";
import foodOrder from "./foodOrder.png";
import companyWeb from "./companyWeb.png";
import textspy from "./textspy.png";
import guessing from "./guessing.png";
import './carousel.css'


var currentSlide = 0;
const carouseltems = document.getElementsByClassName('carousel-items');
const carouseInfo = document.getElementsByClassName('carousel-info px-3');



// previous sliding
let goPrevious = () => {
  if (currentSlide === 1) {
    let preSlide = document.getElementById('preSlide');
    preSlide.classList.add('disabled')
  }
  else if(currentSlide === 4){
    let nextSlide = document.getElementById('nextSlide');
    nextSlide.classList.remove('disabled')
  }
  carouseltems[currentSlide].classList.remove('current');
  carouseInfo[currentSlide].style.display = 'none'
  currentSlide--;
  carouseInfo[currentSlide].style.display = 'block'
  carouseltems[currentSlide].classList.add('current');
  currentSlide = currentSlide%(carouseltems.length);
  for (let i = 0; i < carouseltems.length; i++) {
    carouseltems[i].style.transform = `translateX(${(-currentSlide*300)}px)`;
  }
}


// next sliding
let goNext = () => {
  if (currentSlide === 3) {
    let nextSlide = document.getElementById('nextSlide');
    nextSlide.classList.add('disabled')
  }
  else if(currentSlide === 0){
    let preSlide = document.getElementById('preSlide');
    preSlide.classList.remove('disabled')
  }
  carouseltems[currentSlide].classList.remove('current');
  carouseInfo[currentSlide].style.display = 'none'
  currentSlide++;
  carouseInfo[currentSlide].style.display = 'block'
  carouseltems[currentSlide].classList.add('current');
  currentSlide = currentSlide%(carouseltems.length);
  for (let i = 0; i < carouseltems.length; i++) {
    carouseltems[i].style.transform = `translateX(${(-currentSlide*300)}px)`;
  }
}


export default function Works() {
  return (
    <div className="bg-body-tertiary pb-5">
      <h1 className="text-secondary mx-5">
        <strong>My Projects</strong>
      </h1>
      <div className="d-flex flex-row flex-wrap justify-content-evenly align-items-center">
        <div className="d-flex flex-row justify-content-center align-items-center">
          <button type="button" id="preSlide" onClick={goPrevious} className="btn rounded-pill text-light bg-black me-4 disabled" style={{height:'12%', zIndex:1}}>&lt;</button>
          <div className="container-carousel d-flex flex-row align-items-center">
              <img className="carousel-items current" src={billgenie} alt="" />
              <img className="carousel-items " src={guessing} alt=""/>
              <img className="carousel-items " src={textspy} alt=""/>
              <img className="carousel-items " src={companyWeb} alt="" />
              <img className="carousel-items " src={foodOrder} alt=""/>
          </div>
          <button type="button" id="nextSlide" onClick={goNext} className="btn rounded-pill text-light bg-black ms-4" style={{height:'12%', zIndex:1}}>&gt;</button>
        </div>
        <div style={{width:'400px'}}>
          <div className="carousel-info px-3">
            <h2>Billing Website</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni eveniet voluptatum iure a sequi, porro non quia odio eligendi, amet dolor tempore voluptatibus? Dicta ipsum eius saepe deserunt, vero ratione.</p>
            <a className="btn btn-info border border-black" target="_blank" href="https://billgenie.in/" role="button">Visit Website</a>
          </div>
          <div className="carousel-info px-3" style={{display:'none'}}>
            <h2>Guess the Number</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni eveniet voluptatum iure a sequi, porro non quia odio eligendi, amet dolor tempore voluptatibus? Dicta ipsum eius saepe deserunt, vero ratione.</p>
            <a className="btn btn-info border border-black" target="_blank" href="https://github.com/prathamesh17122003/Guess-game" role="button">Github Link</a>
          </div>
          <div className="carousel-info px-3" style={{display:'none'}}>
            <h2>TextSpy</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni eveniet voluptatum iure a sequi, porro non quia odio eligendi, amet dolor tempore voluptatibus? Dicta ipsum eius saepe deserunt, vero ratione.</p>
            <a className="btn btn-info border border-black" target="_blank" href="#" role="button">Github Link</a>
          </div>
          <div className="carousel-info px-3" style={{display:'none'}}>
            <h2>Travels website</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni eveniet voluptatum iure a sequi, porro non quia odio eligendi, amet dolor tempore voluptatibus? Dicta ipsum eius saepe deserunt, vero ratione.</p>
            <a className="btn btn-info border border-black" target="_blank" href="https://proprathamesh.github.io/TravelsWebsite/" role="button">Visit Website</a>
          </div>
          <div className="carousel-info px-3" style={{display:'none'}}>
            <h2>Restaurent Website</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni eveniet voluptatum iure a sequi, porro non quia odio eligendi, amet dolor tempore voluptatibus? Dicta ipsum eius saepe deserunt, vero ratione.</p>
            <a className="btn btn-info border border-black" target="_blank" href="#" role="button">Github Link</a>
          </div>
          
        </div>
      </div>
    </div>
  );
}
