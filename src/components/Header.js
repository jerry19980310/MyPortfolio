import React from "react";
import NavBar from "./NavBar";


function Header() {
  return (
    <NavBar title="Jerry Kao" pages={['Home', 'About', 'Resume', 'Portfolio']} />
  );
}

export default Header;
