import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo">TechLaunch Academy</Link>
        <div className={`navbar-links ${mobileMenuOpen ? 'open' : ''}`}>
          <Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
          <Link to="/courses" onClick={() => setMobileMenuOpen(false)}>Courses</Link>
          <Link to="/placements" onClick={() => setMobileMenuOpen(false)}>Placements</Link>
          <Link to="/about" onClick={() => setMobileMenuOpen(false)}>About</Link>
          <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
        </div>
        <div className="navbar-actions">
          <Link to="/contact" className="btn-primary">Enroll Now</Link>
          <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            ☰
          </button>
        </div>
      </div>
    </nav>
  );
}
