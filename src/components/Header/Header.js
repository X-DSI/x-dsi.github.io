import { Hcontainer, Hwrapper, Hul, Hlogo, MobileIcon } from "./Header.styled";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ToggleButton from "react-theme-toggle-button";
import "react-theme-toggle-button/dist/index.css";
import { FaBars } from "react-icons/fa";

const Header = ({ toggleSideBar, isDarkTheme, themeChangefunc }) => {
  return (
    <Hwrapper>
      <Hcontainer>
        <Hlogo className="desktop-dsi">
          <Link to="/">DSI</Link>
        </Hlogo>
        <Hul>
          <li>
            <Link to="/experience">Work</Link>
          </li>
          <li>
            <Link to="/photos">Photography</Link>
          </li>
          <li>
            <a href="https://x-dsi.com/rubiks-cube/" target="_blank">
              Rubick's Cube
            </a>
          </li>
          <li className="resume-button">
            <a
              href="https://drive.google.com/file/d/1U1pvYO2CjUbB8y9rDg-6taBzobr5s7Aa/view?usp=sharing"
              target="_blank"
            >
              CV
            </a>
          </li>
        </Hul>
        <div className="togglebutton">
          <ToggleButton isDark={isDarkTheme} onChange={themeChangefunc} />
        </div>
        <Hlogo className="mobile-dsi">
          <Link to="/">DSI</Link>
        </Hlogo>
        <MobileIcon onClick={toggleSideBar}>
          <FaBars className="fabars" />
        </MobileIcon>
      </Hcontainer>
    </Hwrapper>
  );
};

export default Header;
