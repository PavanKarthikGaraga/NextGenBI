'use client';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container mx-auto">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">NextGen BI Solutions</h3>
            <p className="footer-description">
              Empowering professionals with comprehensive Power BI training and certification.
              Transform your career with industry-leading business intelligence expertise.
            </p>
            <div className="footer-social mt-6">
              <Link href="https://facebook.com" target="_blank" className="social-icon-link">
                <FaFacebookF size={20} />
              </Link>
              <Link href="https://twitter.com" target="_blank" className="social-icon-link">
                <FaTwitter size={20} />
              </Link>
              <Link href="https://linkedin.com" target="_blank" className="social-icon-link">
                <FaLinkedinIn size={20} />
              </Link>
              <Link href="https://instagram.com" target="_blank" className="social-icon-link">
                <FaInstagram size={20} />
              </Link>
              <Link href="https://youtube.com" target="_blank" className="social-icon-link">
                <FaYoutube size={20} />
              </Link>
              <Link href="https://wa.me/your-number" target="_blank" className="social-icon-link">
                <FaWhatsapp size={20} />
              </Link>
            </div>
          </div>

          <div className="footer-section">
            <h3 className="footer-subtitle">Quick Links</h3>
            <ul className="footer-links">
              <li><Link href="/#about" className="footer-link">About Us</Link></li>
              <li><Link href="/#features" className="footer-link">Features</Link></li>
              <li><Link href="/#curriculum" className="footer-link">Curriculum</Link></li>
              <li><Link href="/#faq" className="footer-link">FAQ</Link></li>
              <li><Link href="/#contact" className="footer-link">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-subtitle">Contact Info</h3>
            <ul className="footer-info">
              <li>📍 123 Training Center, Business District</li>
              <li>📞 +1 234 567 8900</li>
              <li>✉️ info@nextgenbi.com</li>
              <li>⏰ Mon-Sat: 9:00 AM - 6:00 PM</li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-subtitle">Newsletter</h3>
            <p className="footer-description mb-4">
              Subscribe to our newsletter for updates, tips, and special offers.
            </p>
            <div className="newsletter-form">
              <input
                type="email"
                placeholder="Enter your email"
                className="form-input mb-2"
              />
              <button className="button w-full">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} NextGen BI Solutions. All rights reserved.</p>
      </div>
    </footer>
  );
}