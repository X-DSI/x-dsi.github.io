import Layout from "./components/Layout/Layout";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero/Hero";
import Experience from "./components/Experience/Experience";
import Photography from "./components/Photography/Photography";

function App() {
  return (
    <Layout>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Hero />}></Route>
            <Route path="experience" element={<Experience />}></Route>
            <Route path="photos" element={<Photography />}></Route>
          </Routes>
        </Router>
      </div>
    </Layout>
  );
}

export default App;
