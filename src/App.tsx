import "./App.css";
import Hero from "./components/Hero";
import About from "./components/About.tsx";
import Schedule from "./components/Schedule.tsx";
import Footer from "./components/Footer.tsx";
import FAQ from "./components/FAQ.tsx";

function App() {
  return (
    <div>
      <Hero></Hero>
      <About></About>
      <Schedule />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
