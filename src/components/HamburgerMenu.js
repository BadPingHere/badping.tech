import React from "react";
import "../components/fontawesome.css";

const HamburgerMenu = ({ isHome }) => {
  return (
    <>
      <input type="checkbox" id="active"></input>
      <label htmlFor="active" className="menu-btn">
        <i className="fas fa-bars"></i>
      </label>
      <div className="wrapper">
        <ul>
          <li>
            <a style={{ boxShadow: "none" }} href="/contact">
              Contact
            </a>
          </li>
          <li>
            <a style={{ boxShadow: "none" }} href="/projects">
              Projects
            </a>
          </li>
          <li>
            <a style={{ boxShadow: "none" }} href="/blog">
              Blog
            </a>
          </li>
          {!isHome && (
            <li>
              <a style={{ boxShadow: "none" }} href="/">
                Back to home
              </a>
            </li>
          )}
        </ul>
      </div>
    </>
  );
};

export default HamburgerMenu;
