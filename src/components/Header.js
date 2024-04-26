import React from "react";
import NavBar from "./NavBar";


function Header() {
  return (
    <NavBar title="Jerry Studio" pages={['Home', 'About', 'Resume', 'Portfolio']} />
  );
}

export default Header;
