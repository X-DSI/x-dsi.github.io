import Layout from "./components/Layout/Layout";
import "./App.css";
import Hero from "./components/Hero/Hero";
import Experience from "./components/Experience/Experience";
import Photography from "./components/Photography/Photography";
import GlobalStyles from "./Global.Styled";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Layout>
        <Hero />
        <Experience />
        <Photography />
      </Layout>
    </div>
  );
}

export default App;
