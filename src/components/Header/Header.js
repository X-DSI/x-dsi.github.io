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
        <Hlogo>
          <Link to="/">DSI</Link>
        </Hlogo>
        <Hul>
          <li>
            <Link to="/experience">Experience</Link>
          </li>
          <li>
            <Link to="/photos">Photography</Link>
          </li>
          <li>
            <a href="https://x-dsi.com/rubiks-cube/" target="_blank">
              Rubick's Cube
            </a>
          </li>
          <li>
            <a href="/resume">Resume</a>
          </li>
        </Hul>
        <div>
          <ToggleButton isDark={isDarkTheme} onChange={themeChangefunc} />
        </div>
        <MobileIcon onClick={toggleSideBar}>
          <FaBars />
        </MobileIcon>
      </Hcontainer>
    </Hwrapper>
  );
};

export default Header;
