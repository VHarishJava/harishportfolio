import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navClass, setNavClass] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavClass("scrolled");
      } else {
        setNavClass("");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${navClass}`}>
      <div className="navbar-container">
        <div className="nav-logo">Vilasagaram Harish</div>
        {/* Toggle icon */}
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </div>
        {/* Navigation links */}
        <ul className={menuOpen ? "nav-links active" : "nav-links"}>
          <li><Link to="intro" smooth={true} onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="about" smooth={true} onClick={() => setMenuOpen(false)}>About</Link></li>
          <li><Link to="skills" smooth={true} onClick={() => setMenuOpen(false)}>Skills</Link></li>
          <li><Link to="certification" smooth={true} onClick={() => setMenuOpen(false)}>Certification</Link></li>
          <li><Link to="projects" smooth={true} onClick={() => setMenuOpen(false)}>Projects</Link></li>
          <li><Link to="education" smooth={true} onClick={() => setMenuOpen(false)}>Education</Link></li>
          <li><Link to="contact" smooth={true} onClick={() => setMenuOpen(false)}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
