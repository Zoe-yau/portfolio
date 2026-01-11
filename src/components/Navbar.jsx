import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
      <nav className="navbar">
        <div className="nav-logo">
          <img src="/images/dolphinLogo.png" alt="Zoe Yau" className="logo-img" />
          PORTFOLIO
        </div>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <Link to="/photography">Photography</Link>
        </div>
      </nav>
    );
};

export default Navbar;