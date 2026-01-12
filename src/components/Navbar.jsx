import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link'; 

const Navbar = () => {
    return (
      <nav className="navbar">
        <div className="nav-logo">
          <img src="/portfolio/images/dolphinLogo.png" alt="Zoe Yau" className="logo-img" />
          PORTFOLIO
        </div>
        <div className="nav-links">
          <HashLink smooth to="/#about">About</HashLink>
          <HashLink smooth to="/#projects">Projects</HashLink>
          <HashLink smooth to="/#contact">Contact</HashLink>
          <Link to="/photography">Photography</Link>
        </div>
      </nav>
    );
};

export default Navbar;