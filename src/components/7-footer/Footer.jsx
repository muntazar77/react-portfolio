import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <footer className="flex">
   <ul className="flex">
          <li>
            <a href="#about">About</a>
          </li>

          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#mySkills">My Skills</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

      <p>© 2023 Spencer Sharp. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
