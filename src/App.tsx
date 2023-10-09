import "./App.css";
import Hero from "./components/Hero";
import About from "./components/About.tsx";
import Schedule from "./components/Schedule.tsx";
import Footer from "./components/Footer.tsx";

function App() {
  return (
    <div>
      <Hero></Hero>
      <About></About>
      <Schedule></Schedule>
      <Footer />
    </div>
  );
}

export default App;
