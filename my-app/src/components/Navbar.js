'use client';

export default function Navbar() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <div className="nav-logo">
          <span className="logo-text">NextGen BI</span>
        </div>
        <div className="nav-links">
          <button onClick={() => scrollToSection('home')} className="nav-link">Home</button>
          <button onClick={() => scrollToSection('features')} className="nav-link">Features</button>
          <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
          <button onClick={() => scrollToSection('curriculum')} className="nav-link">Curriculum</button>
          <button onClick={() => scrollToSection('faq')} className="nav-link">FAQ</button>
          <button onClick={() => scrollToSection('training')} className="nav-link">Training</button>
          <button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button>
        </div>
      </div>
    </nav>
  );
} 