import Layout from "./components/Layout/Layout";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero/Hero";
import Experience from "./components/Experience/Experience";
import Photography from "./components/Photography/Photography";

function App() {
  return (
    <Router>
      <div className="App">
        <Layout>
          <Hero />
          <Experience />
          <Photography />
        </Layout>
      </div>
    </Router>
  );
}

export default App;
