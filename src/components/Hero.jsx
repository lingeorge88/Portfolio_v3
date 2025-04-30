import React from 'react';
import heroImg from "../assets/heroImg.png";

function Hero() {
  return (
    // Using DaisyUI hero component for layout and spacing
    // Added id="hero" in case we want to link directly to the top, though "#" works too
    <div id="hero" className="hero min-h-[calc(100vh-4rem)] bg-base-100"> {/* Adjust min-h if needed */}
      <div className="hero-content text-center">
        <div className="max-w-2xl">
          <h1 className="text-6xl font-bold"> 👋 Hi, I'm George </h1>
          <p className="text-2xl py-6">
          A computer science student exploring the intersectionality of healthcare and A.I.
          </p>
          <img
              alt="hero image"
              src={heroImg}
              className="rounded-full w-56 h-auto mx-auto"
          />
          <a href="#projects" className="btn btn-primary mt-8">View My Work</a>
        </div>
      </div>
    </div>
  );
}

export default Hero;