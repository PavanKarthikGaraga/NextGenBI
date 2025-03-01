import Image from 'next/image';

export default function TrainingOverview() {
  return (
    <section className="training-section">
      <div className="container">
        <div className="training-content">
          <div>
            <h2 className="section-title">
              TRAINING OVERVIEW
            </h2>
            <p className="text-description">
              Our Power BI Software Training offers comprehensive lessons designed for all skill
              levels. Whether you're a beginner or an experienced user, you will gain valuable insights
              into data visualization, reporting, and analysis.
            </p>
            <p className="text-description">
              With our interactive online sessions, participants will engage in real-world projects to enhance
              their learning experience. Join us to harness the power of your data and make informed
              decisions that drive success in your organization.
            </p>
            <div className="training-steps">
              <h3 className="feature-title">NEXTGEN BI SOLUTIONS</h3>
              <div className="steps-container">
                <div className="step">
                  <div className="step-number">1</div>
                  <div>
                    <h4 className="step-title">Training Program</h4>
                    <p className="step-description">A structured course to learn Power BI</p>
                  </div>
                </div>
                <div className="step">
                  <div className="step-number">2</div>
                  <div>
                    <h4 className="step-title">Career Opportunities</h4>
                    <p className="step-description">Potential job roles available after mastery</p>
                  </div>
                </div>
                <div className="step">
                  <div className="step-number">3</div>
                  <div>
                    <h4 className="step-title">Skill Development</h4>
                    <p className="step-description">Enhancing technical abilities in Power BI</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="image-container">
            <Image
              src="/powerbi-training.svg"
              alt="Power BI Training Overview"
              fill
              className="image"
            />
          </div>
        </div>
      </div>
    </section>
  );
} 