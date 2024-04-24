import React, {  } from "react";
import { Grid, Typography } from "@mui/material";
// import { Link } from "react-router-dom"; // Import the Link component

const containerStyle = {
  position: 'relative',
  width: '100%',
  height: '100vh',
  background: `url("./Back.jpg")`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  color: 'white',
  fontFamily: 'Arial, sans-serif',
};

const textStyle = {
  fontSize: '3vw', // Responsive font size
  textShadow: '2px 2px 4px rgba(0,0,0,0.6)',
};

const HomePage = () => {


  return (
    <Grid container style={containerStyle} display={"flex"}>
    <Grid item xs={12}>
      <Typography variant="h1" style={textStyle}>
        Your Text Goes Here
      </Typography>
    </Grid>
  </Grid>
    // <section id="heroSection" className="hero--section">
    //   <div className="hero--section--content--box">
    //     <div className="hero--section--img">
    //       <img src="./Designer4.png" alt="Hero Section" />
    //     </div>
    //     <div className="hero--section--content">
    //       <p className="section--title">
    //         Welcome to Jerry's Photography world!
    //       </p>
    //       <h1 className="hero--section--title">
    //         <span className="hero--section-title--color">Professional</span>{" "}
    //         <br />
    //         Photographer
    //       </h1>
    //       <p className="hero--section-description">
    //         Explore moments captured in time. From landscapes to portraits, each
    //         photo tells a unique story.
    //         <br /> Dive in and discover the beauty of the world through my lens.
    //       </p>
    //     </div>
    //     <button className="btn btn-primary">Get In Touch</button>
    //   </div>
    //   <div className="hero--section--img">
    //     <img src="./Designer2.png" alt="Hero Section" />
    //   </div>
    // </section>
  );
};

export default HomePage;
