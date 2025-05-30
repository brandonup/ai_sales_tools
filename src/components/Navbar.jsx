import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // Placeholder for dark mode state and toggle function
  // const [isDarkMode, setIsDarkMode] = useState(false);
  // const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item logo-text">
          AI Sales Tools
        </Link>
        <button
          className={`navbar-burger burger ${isMobileMenuOpen ? 'is-active' : ''}`}
          aria-label="menu"
          aria-expanded={isMobileMenuOpen}
          onClick={toggleMobileMenu}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
      </div>
      <div className={`navbar-menu ${isMobileMenuOpen ? 'is-active' : ''}`}>
        <div className="navbar-start">
          <Link to="/" className="navbar-item" onClick={isMobileMenuOpen ? toggleMobileMenu : null}>
            Home
          </Link>
          <Link to="/crm-data" className="navbar-item" onClick={isMobileMenuOpen ? toggleMobileMenu : null}>
            CRM Data
          </Link>
          <Link to="/instructions" className="navbar-item" onClick={isMobileMenuOpen ? toggleMobileMenu : null}>
            Instructions
          </Link>
          <Link to="/prompt-examples" className="navbar-item" onClick={isMobileMenuOpen ? toggleMobileMenu : null}>
            Prompt Examples
          </Link>
          <Link to="/presentation-deck" className="navbar-item" onClick={isMobileMenuOpen ? toggleMobileMenu : null}>
            Presentation Deck
          </Link>
        </div>
        <div className="navbar-end">
          {/* <div className="navbar-item">
            <button onClick={toggleDarkMode} className="button is-light">
              {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
          </div> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
