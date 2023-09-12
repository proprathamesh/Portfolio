import React from 'react'
import WebPic from "./development-4536630_640.webp"
import Typed from 'typed.js';
import Resume from './Resume.pdf'

export default function Intro() {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Frontend Developer', 'Backend Developer', 'Competitive Coder'],
      typeSpeed: 40,
      loop:true,
      backDelay:2000,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const downloadRes = () => {
    let url = 'file:///D:/Coding%20practice/Web%20Development/React/portfolio/src/Components/Resume.pdf'
    // window.location.href = 'http://localhost:3000/Components/Resume.pdf'
    let downloadLink = document.createElement('a');
    downloadLink.href = url;

    // Set the download attribute to specify the file name
    downloadLink.download = 'Resume.pdf';
    downloadLink.click();
  }


  return (
    <div>
<<<<<<< HEAD
      <div className="App intro px-5">
        <div className="w-100 d-flex flex-column px-4 profilePhoto">
          <span className="my-4 fs-2">Hi! My name is<span style={{color:'rgb(255 155 0)',fontFamily: 'Great Vibes, cursive'}} className="naming" ><br/>Prathamesh Yadav</span><br/> and I am a passionate<br/><span ref={el} style={{color:'rgb(255 155 0)', fontWeight:'bold'}} className='fs-1' id="expertise"></span></span>
=======
      <div className="App intro">
        <div className="w-100 d-flex flex-column px-4 profilePhoto">
          <span className="my-4 fs-2">Hi! My name is<span style={{color:'rgb(255 155 0)',fontFamily: 'Great Vibes, cursive'}} className="naming" ><br/>Prathamesh Yadav</span><br/> and I am a passionate<br/><span ref={el} style={{color:'rgb(255 155 0)', fontWeight:'bold'}} className='field-shower' id="expertise"></span></span>
>>>>>>> 666cb94eb49cdc86815ce502ccedb1096755f066
          <div className="opt">
            <button type="button" className="btn btn-dark mx-4 col-2 shadow" style={{minWidth:'111px'}}>Hire me</button>
            <button type="button" onClick={downloadRes} className="btn btn-light mx-4 col-2 border shadow border-black" style={{minWidth:'111px'}}>
              Resume
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-download" viewBox="0 0 16 16">
                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
              </svg>
            </button>
          </div>
        </div>
        <div className="setDev my-5 d-flex flex-row align-items-center justify-content-center">
          <img className="profilePhoto" src={WebPic} alt="" style={{width:'100%'}}/>
        </div>
      </div>
      
    </div>
  )
}
