import React from 'react';
import { Link } from 'react-router-dom'; // Import the Link component

const HomePage = () => {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Welcome to Jerry's Photography Hub!</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Professional</span>{" "}
            <br />
            Photographer
          </h1>
          <p className="hero--section-description">
          Explore moments captured in time. From landscapes to portraits, each photo tells a unique story. 
          <br /> Dive in and discover the beauty of the world through my lens.
          </p>
        </div>
        <button className="btn btn-primary">Get In Touch</button>
      </div>
      <div className="hero--section--img">
        <img src="../public/OIG4.jpeg" alt="Hero Section" />
      </div>
    </section>
  );
};

export default HomePage;
