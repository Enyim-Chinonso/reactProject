
import React from "react";
import "./Hero.css";
import Chinonso from "/public/chinonso-photo.jpg";

const Hero = () => {
  return (
//  <div className="hero-section d-flex"> 

    <div id="home" className="container py-5 mt-5 hero-background    ">
      <div className="row align-items-center">
        <div className="col-md-6 text-center text-md-start">
          <h1 className="display-4 "> Hi, I'm Enyim Chinonso <br />(Frontend Developer) <br /> Welcome to my Online Portfolio website <br /></h1>
          <p className="lead">I build, design and maintain scalable and secured web applications using HTML, CSS, BOOTSTRAP, JAVASCRIPT, <br /> REACT etc.
          </p>
           <div className="d-flex justify-content-center gap-3 mt-4">
          <a href="#contact" className="btn btn-outline-primary btn-lg">
            Let's Talk
          </a>
          <a href="#contact" className="btn btn-outline-primary btn-lg">
            Hire Me
          </a>
        </div>
        </div>
        <div className="col-md-6 text-center mt-4 mt-md-0">
          <img
            src={Chinonso}
            alt="Hero image"
            className="img-fluid rounded"
            style={{ maxHeight: "350px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
