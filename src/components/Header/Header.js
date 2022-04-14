import { Hcontainer, Hwrapper, Hul, Hlogo } from "./Header.styled";
import React, { useState } from "react";
import ToggleButton from "react-theme-toggle-button";
import "react-theme-toggle-button/dist/index.css";

const Header = () => {
  const [isDark, setIsDark] = useState(false);

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
          <ToggleButton isDark={isDark} onChange={() => setIsDark(!isDark)} />
        </div>
      </Hcontainer>
    </Hwrapper>
  );
};

export default Header;
