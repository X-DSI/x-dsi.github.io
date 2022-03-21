import Layout from "./components/Layout/Layout";
import "./App.css";
import Hero from "./components/Hero/Hero";
function App() {
  return (
    <div className="App">
      <Layout>
        <Hero />
        <h1>Hello There!</h1>
      </Layout>
    </div>
  );
}

export default App;
