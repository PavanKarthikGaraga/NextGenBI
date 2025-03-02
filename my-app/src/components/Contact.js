export default function Contact() {
  return (
    <section className="contact-section">
      <div className="container">
        <div className="contact-header">
          <h2 className="section-title">Contact Us</h2>
          <p className="text-description">Transform data into insights. Master Power BI - Land Your Dream Job</p>
        </div>
        <div className="contact-grid">
          <div className="contact-form">
            <h3 className="feature-title">Get in Touch</h3>
            <form className="form">
              <div className="form-group">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Your name"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-input"
                  placeholder="Your email"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea
                  className="form-textarea"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button className="button">
                Send Message
              </button>
            </form>
          </div>
          <div className="contact-info">
            <h3 className="feature-title">Contact Information</h3>
            <div className="info-container">
              <div className="info-group">
                {/* <h4 className="info-title">THOMAS PRASHANTH</h4> */}
                <p className="info-text">NextGen BI Solutions</p>
              </div>
              <div className="info-group">
                <h4 className="info-title">Phone</h4>
                <p className="info-text">+91-7075501191</p>
              </div>
              <div className="info-group">
                <h4 className="info-title">Office Hours</h4>
                <p className="info-text">Monday - Saturday: 9:00 AM - 6:00 PM</p>
                <p className="info-text">Sunday: Closed</p>
              </div>
              <div className="info-group">
                <h4 className="info-title">Follow Us</h4>
                <div className="social-links">
                  <a href="#" className="social-link">LinkedIn</a>
                  <a href="#" className="social-link">Twitter</a>
                  <a href="#" className="social-link">Facebook</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 