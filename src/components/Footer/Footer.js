import React from "react";
// import { Github, Linkedin, Twitter, Instagram } from "lucide-react";
import "./Footer.css";
import { Linkedin } from "lucide-react";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="designer">
          Designed & Developed by <span>Vilasagaram Harish</span>
        </p>
        {/* <p className="copyright">
          Copyright © 2025 <span>IB</span>
        </p> */}
        <div className="social-links">
          {/* <a href="https://github.com/Ibrahim2191" target="_blank" rel="noopener noreferrer">
            <Github className="icon" />
          </a> */}
          <a href="https://www.linkedin.com/in/harish-vilasagaram-600761220/" target="_blank" rel="noopener noreferrer">
            <Linkedin className="icon" />
          </a>
          {/* <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <Twitter className="icon" />
          </a> */}
          {/* <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
            <Instagram className="icon" />
          </a> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
