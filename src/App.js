import Layout from "./components/Layout/Layout";
import "./App.css";
import Hero from "./components/Hero/Hero";
import Experience from "./components/Experience/Experience";
import Photography from "./components/Photography/Photography";
import GlobalStyles from "./styles/Global.Styled";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./styles/themes";
import { useState } from "react";

function App() {
  const [currentTheme, setCurrentTheme] = useState(lightTheme);

  return (
    <div className="App">
      <ThemeProvider theme={currentTheme}>
        <GlobalStyles />
        <Layout>
          <Hero />
          <Experience />
          <Photography />
        </Layout>
      </ThemeProvider>
    </div>
  );
}

export default App;
