import React from "react";
// import './nav.css'

export default function Navbar() {
  return (
    <div className="position-sticky start-0 top-0 bluring" style={{zIndex:'2'}}>
      {/* <div className="bluring"></div> */}
      <nav className="navbar navbar-expand-lg shadow fs-bold" >
        <div className="container-fluid container">
          <a className="navbar-brand" href="#">
            <span className="fs-1 content">
              <h1>Portfolio</h1>
              <h1>Portfolio</h1>
            </span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="fs-5 collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="mx-4 nav-item">
                <a className="navigate nav-link active " aria-current="page" href="#">
                  <span className="navigate">Home</span>
                </a>
              </li>
              <li className="mx-4 nav-item">
                <a className="nav-link active navigate" href="#">
                  <span className="navigate">Services</span>
                </a>
              </li>
              <li className="mx-4 nav-item">
                <a className="nav-link active navigate" href="#">
                  <span className="navigate">Work</span>
                </a>
              </li>
              <li className="mx-4 nav-item">
                <a className="nav-link active navigate" href="#">
                  <span className="navigate">Contact</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
