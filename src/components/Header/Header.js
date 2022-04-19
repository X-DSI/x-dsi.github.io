import { Hcontainer, Hwrapper, Hul, Hlogo } from "./Header.styled";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ToggleButton from "react-theme-toggle-button";
import "react-theme-toggle-button/dist/index.css";

const Header = ({ isDarkTheme, themeChangefunc }) => {
  return (
    <Hwrapper>
      <Hcontainer>
        <Hlogo>DSI</Hlogo>
        <Hul>
          <li>{/* <Link to="/">Home</Link> */}</li>
          <li>{/* <Link to="/experience">Experience</Link> */}</li>
          <li>
            <a href="/photos">Photography</a>
          </li>
        </Hul>
        <div>
          <ToggleButton isDark={isDarkTheme} onChange={themeChangefunc} />
        </div>
      </Hcontainer>
    </Hwrapper>
  );
};

export default Header;
