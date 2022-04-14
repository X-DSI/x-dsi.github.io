import { Hcontainer, Hwrapper, Hul, Hlogo } from "./Header.styled";
import React, { useState } from "react";
import ToggleButton from "react-theme-toggle-button";
import "react-theme-toggle-button/dist/index.css";

const Header = ({ isDarkTheme, themeChangefunc }) => {
  return (
    <Hwrapper>
      <Hcontainer>
        <Hlogo>DSI</Hlogo>
        <Hul>
          <li>Experience</li>
          <li>Photos</li>
          <li>Resume</li>
        </Hul>
        <div>
          <ToggleButton isDark={isDarkTheme} onChange={themeChangefunc} />
        </div>
      </Hcontainer>
    </Hwrapper>
  );
};

export default Header;
