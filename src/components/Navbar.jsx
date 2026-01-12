import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <nav className="navbar">
        <div className="nav-logo">
          <img src="/portfolio/images/dolphinLogo.png" alt="Zoe Yau" className="logo-img" />
          PORTFOLIO
        </div>

        <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? '✕' : '☰'}
        </button>

        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <HashLink smooth to="/#about" onClick={() => setIsOpen(false)}>About</HashLink>
          <HashLink smooth to="/#projects" onClick={() => setIsOpen(false)}>Projects</HashLink>
          <HashLink smooth to="/#contact" onClick={() => setIsOpen(false)}>Contact</HashLink>
          <Link to="/photography" onClick={() => setIsOpen(false)}>Photography</Link>
        </div>
      </nav>
    );
};

export default Navbar;