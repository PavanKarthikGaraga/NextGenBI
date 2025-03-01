'use client';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-section">
          <h3 className="footer-title">NextGen BI Solutions</h3>
          <p className="footer-description">
            Transform your career with our comprehensive Power BI training program.
            Learn from industry experts and master data visualization.
          </p>
        </div>
        
        <div className="footer-section">
          <h4 className="footer-subtitle">Quick Links</h4>
          <ul className="footer-links">
            <li><a href="#home" className="footer-link">Home</a></li>
            <li><a href="#features" className="footer-link">Features</a></li>
            <li><a href="#curriculum" className="footer-link">Curriculum</a></li>
            <li><a href="#training" className="footer-link">Training</a></li>
            <li><a href="#contact" className="footer-link">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-subtitle">Contact Info</h4>
          <ul className="footer-info">
            <li>THOMAS PRASHANTH</li>
            <li>+91-7075501191</li>
            <li>Mon - Sat: 9:00 AM - 6:00 PM</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-subtitle">Follow Us</h4>
          <div className="footer-social">
            <a href="#" className="social-link">LinkedIn</a>
            <a href="#" className="social-link">Twitter</a>
            <a href="#" className="social-link">Facebook</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; 2024 NextGen BI Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 