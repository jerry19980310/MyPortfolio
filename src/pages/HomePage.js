import React from 'react';
import { Link } from 'react-router-dom'; // Import the Link component

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to my portfolio website!</p>
      <nav>
        <ul>
          <li><Link to="/about">About Me</Link></li> {/* Link to the About page */}
          <li><Link to="/resume">Resume</Link></li> {/* Link to the Resume page */}
          <li><Link to="/portfolio">Portfolio</Link></li> {/* Link to the Portfolio page */}
        </ul>
      </nav>
    </div>
  );
};

export default HomePage;
