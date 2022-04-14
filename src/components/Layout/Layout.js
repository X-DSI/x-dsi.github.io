import React, { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { LayoutWrapper, LayoutContent, LayoutContainer } from "./Layout.styled";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../../styles/Global.Styled";
import { darkTheme, lightTheme } from "../../styles/themes";

const Layout = (props) => {
  const [currentTheme, setCurrentTheme] = useState(lightTheme);
  const [isDark, setIsDark] = useState(false);

  const themeChangeHandler = () => {
    if (currentTheme.id === "light") {
      setCurrentTheme(darkTheme);
    } else {
      setCurrentTheme(lightTheme);
    }
    setIsDark(!isDark);
  };

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />
      <LayoutWrapper>
        <LayoutContainer>
          <div className="header">
            <Header isDarkTheme={isDark} themeChangefunc={themeChangeHandler} />
          </div>

          <LayoutContent>{props.children}</LayoutContent>
          <Footer />
        </LayoutContainer>
      </LayoutWrapper>
    </ThemeProvider>
  );
};

export default Layout;
