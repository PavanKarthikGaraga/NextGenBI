export default function Features() {
  const features = [
    {
      title: "COMPREHENSIVE RESOURCES",
      description: "Access to a wealth of resources and expert instructors in online training means you can acquire the necessary knowledge and skills to excel in data visualization with Power BI.",
      icon: "📚"
    },
    {
      title: "NETWORKING",
      description: "Networking opportunities in online training can connect you with fellow learners and industry experts, expanding your professional network and opening up new career possibilities.",
      icon: "🤝"
    },
    {
      title: "REAL-WORLD FOCUS",
      description: "Engaging and interactive learning experiences provide real-world applications for Power BI, ensuring you not only learn concepts but can implement them effectively in your work.",
      icon: "🎯"
    },
    {
      title: "FLEXIBILITY",
      description: "Online training offers flexibility to learn at your own pace, allowing you to balance your schedule while mastering Power BI skills effectively.",
      icon: "⏰"
    }
  ];

  return (
    <section className="features-section">
      <div className="container">
        <h2 className="section-title">
          Why Choose Our Training Program?
        </h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 