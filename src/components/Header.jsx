import React, { useState } from 'react';
import '../components/header.css'; 
import Resume from "../assets/resume.pdf"
import Sol from "../assets/sol.png"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  return (
    <div className="navbar">
      <div className={menuOpen ? "navbar-toggle active" : "navbar-toggle"} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <div className={menuOpen ? "navbar-menu active" : "navbar-menu"} id="navbarMenu">
        <a href="#" onClick={toggleMenu}>Home</a>
        <a href="#" onClick={toggleMenu}>Portfolio</a>
        <a href="#" onClick={toggleMenu}>Blog</a>
        <a href={Resume} onClick={toggleMenu} target='blank'>Resume</a>
        <hr />
        <img className='sun-img' src={Sol} alt="Light-mode" />
      </div>
    </div>
  );
}

export default Navbar;
