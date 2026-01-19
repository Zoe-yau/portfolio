import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <nav className="navbar">
        <HashLink smooth to="/#hero" className="nav-logo" onClick={() => setIsOpen(false)}>
          <img src="/portfolio/images/dolphinLogo.png" alt="Dolphin Logo" className="logo-img" />
          <span>PORTFOLIO</span>
        </HashLink>

        <button 
          className="menu-toggle" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? '✕' : '☰'}
        </button>

        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li><HashLink smooth to="/#about" onClick={() => setIsOpen(false)}>About</HashLink></li>
          <li><HashLink smooth to="/#projects" onClick={() => setIsOpen(false)}>Projects</HashLink></li>
          <li><HashLink smooth to="/#contact" onClick={() => setIsOpen(false)}>Contact</HashLink></li>
          <li><Link to="/photography" onClick={() => setIsOpen(false)}>Photography</Link></li>
        </ul>
      </nav>
    );
};

export default Navbar;