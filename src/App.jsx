import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Photography from "./pages/Photography";
import "./index.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Main Home Page */}
        <Route path="/" element={
          <>
            <Hero />
            <About />
            <Projects />
            <Contact />
            <Footer />
          </>
        } />

        {/* Photography Page */}
        <Route path="/photography" element={<Photography />} />
      </Routes>
    </Router> 
  );
}

export default App;