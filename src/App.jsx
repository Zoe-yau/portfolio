import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Photography from "./pages/Photography";
import "./styles/index.css";
import './styles/About.css';
import './styles/App.css';
import './styles/Contact.css';
import './styles/Footer.css';
import './styles/Navbar.css';
import './styles/Photography.css';
import './styles/Projects.css';
import './styles/Wave.css';
import './styles/Hero.css';

function App() {
  return (
    <Router>
      <Navbar />
      <main className="main-content">
        <Routes>
          {/* Main Home Page */}
          <Route path="/" element={
            <>
              <section id="hero"><Hero /></section>
              <About />
              <Projects />
              <Contact />
            </>
          } />

          {/* Photography Page */}
          <Route path="/photography" element={<Photography />} />
        </Routes>
      </main>
      <Footer /> 
    </Router> 
  );
}

export default App;