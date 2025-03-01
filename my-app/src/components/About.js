'use client';

export default function About() {
  const sections = [
    {
      id: 'what-is',
      title: 'What Exactly is Power BI?',
      content: 'Power BI is a powerful business analytics tool by Microsoft that helps visualize and analyze data effectively.'
    },
    {
      id: 'who-uses',
      title: 'Who Utilizes Power BI?',
      content: 'Business analysts, data scientists, managers, and decision-makers across industries use Power BI.'
    },
    {
      id: 'components',
      title: 'What are the Fundamental Components of Power BI?',
      content: 'The fundamental components include data modeling, DAX, visualizations, and report building.'
    },
    {
      id: 'distinguishes',
      title: 'What Distinguishes Power BI?',
      content: 'Power BI stands out with its user-friendly interface, powerful analytics, and seamless integration with Microsoft products.'
    },
    {
      id: 'job-roles',
      title: 'What Job Roles are Available in Power BI in India?',
      content: 'Roles include Power BI Developer, Data Analyst, BI Consultant, and Report Developer.'
    },
    {
      id: 'future',
      title: 'What Does the Future Look Like for Power BI Professionals?',
      content: 'The future is promising with increasing demand for data visualization and analytics skills.'
    }
  ];

  return (
    <section className="about-section py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-12">
          ABOUT POWER BI TRAINING IN INDIA
        </h2>
        
        <div className="about-grid">
          {sections.map((section) => (
            <div key={section.id} className="about-box">
              <h3 className="about-box-title">{section.title}</h3>
              <p className="about-box-content">{section.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 