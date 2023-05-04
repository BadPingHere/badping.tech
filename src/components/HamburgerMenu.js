import React from "react";

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
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="/projects">Projects</a>
          </li>
          {/*     <li><a href="/blog">Blog</a></li>      */}
          {!isHome && (
            <li>
              <a href="/">Back to home</a>
            </li>
          )}
        </ul>
      </div>
    </>
  );
};

export default HamburgerMenu;
