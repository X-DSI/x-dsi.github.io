import Layout from "./components/Layout/Layout";
import "./App.css";
import Hero from "./components/Hero/Hero";
import Experience from "./components/Experience/Experience";
function App() {
  return (
    <div className="App">
      <Layout>
        <Hero />
        <Experience />
      </Layout>
    </div>
  );
}

export default App;
