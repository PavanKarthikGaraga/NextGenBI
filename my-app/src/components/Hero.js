import Image from 'next/image';

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-content">
          <div>
            <h1 className="hero-title">
              Power BI Training
            </h1>
            <h2 className="hero-subtitle">
              100 DAY JOB ORIENTED TRAINING - POWER BI & SQL
            </h2>
            <div className="feature-list">
              <p className="feature-item">✓ Advanced Training</p>
              <p className="feature-item">✓ Realtime Projects</p>
              <p className="feature-item">✓ Intensive Interview Preparation</p>
            </div>
            <button className="button">
              Get Started
            </button>
          </div>
          <div className="image-container">
            <Image
              src="/powerbi-dashboard.svg"
              alt="Power BI Dashboard"
              fill
              className="image"
            />
          </div>
        </div>
      </div>
    </section>
  );
} 