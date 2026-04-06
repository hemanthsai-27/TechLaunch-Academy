import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-col">
          <h3 className="footer-logo">TechLaunch Academy</h3>
          <p>Empowering IT careers since 2018. Hands-on training with guaranteed placement support.</p>
          <div className="footer-stats">
            <span>3500+ Students</span>
            <span>94% Placed</span>
            <span>40+ Courses</span>
            <span>7+ Years</span>
          </div>
        </div>
        <div className="footer-col">
          <h4>Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/courses">Courses</Link>
          <Link to="/placements">Placements</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="footer-col">
          <h4>Contact</h4>
          <p>3rd Floor, Cyber Towers, Ameerpet, Hyderabad - 500016</p>
          <p>+91 9876543210</p>
          <p>info@techlaunch.in</p>
          <p>Mon–Sat, 9AM–7PM</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 TechLaunch Academy. All rights reserved.</p>
      </div>
    </footer>
  );
}
