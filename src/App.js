import Layout from "./components/Layout/Layout";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Hero from "./components/Hero/Hero";
import Experience from "./components/Experience/Experience";
import Photography from "./components/Photography/Photography";

function App() {
  return (
    <Layout>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" exact element={<Hero />}></Route>
            <Route path="experience" element={<Experience />}></Route>
            <Route path="photos" element={<Photography />}></Route>
            <Route
              path="*"
              element={
                <main style={{ padding: "1rem" }}>
                  <p>There's nothing here!</p>
                </main>
              }
            />
          </Routes>
        </Router>
      </div>
    </Layout>
  );
}

export default App;
