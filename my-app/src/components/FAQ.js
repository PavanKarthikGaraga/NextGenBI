'use client';
import { useState } from 'react';

export default function FAQ() {
  const [expandedSection, setExpandedSection] = useState(null);

  const sections = [
    {
      id: 'why-datamites',
      title: 'Why Opt for DataMites for Power BI Training in India?',
      content: 'DataMites offers comprehensive Power BI training with industry experts and hands-on projects.'
    },
    {
      id: 'who-should-enroll',
      title: 'Who Should Enroll in the Power BI Course in India?',
      content: 'Professionals interested in data analytics, business analysts, and those looking to enhance their data visualization skills.'
    },
    {
      id: 'course-entail',
      title: 'What Does the DataMites Power BI Course in India Entail?',
      content: 'The course covers all aspects of Power BI from basics to advanced concepts with practical exercises.'
    },
    {
      id: 'course-cost',
      title: 'What is the Cost of the Power BI Course in India?',
      content: 'Please contact our team for current pricing and available discounts.'
    },
    {
      id: 'duration',
      title: 'How Long is the Power BI Training Program at DataMites?',
      content: 'The program duration varies based on the chosen format (weekday/weekend) and pace of learning.'
    },
    {
      id: 'instructors',
      title: 'Who Will Conduct the Power BI Training in India?',
      content: 'Experienced industry professionals with extensive Power BI expertise.'
    },
    {
      id: 'online-available',
      title: 'Is Online Power BI Training Available at DataMites in India?',
      content: 'Yes, we offer flexible online training options with live instructor-led sessions.'
    },
    {
      id: 'offline-option',
      title: 'Can I Opt for Offline Power BI Training at DataMites in India?',
      content: 'Yes, classroom training is available at select locations.'
    },
    {
      id: 'payment-methods',
      title: 'What are the Available Payment Methods for the Course?',
      content: 'We accept various payment methods including cards, net banking, and EMI options.'
    },
    {
      id: 'flexi-pass',
      title: 'What Does the Flexi-Pass Offer for Power BI Training in India?',
      content: 'Flexi-Pass allows flexible scheduling and access to both online and offline sessions.'
    }
  ];

  return (
    <section className="faq-section">
      <div className="container mx-auto px-4">
        <div className="section-title">
          <h2 className="text-2xl font-bold">
            FAQ'S OF POWER BI COURSE IN INDIA
          </h2>
        </div>
        
        <div className="section-content">
          {sections.map((section) => (
            <div key={section.id} className="accordion-item">
              <button
                className="accordion-button"
                onClick={() => setExpandedSection(expandedSection === section.id ? null : section.id)}
              >
                <span>{section.title}</span>
                <svg
                  className={`accordion-icon ${expandedSection === section.id ? 'expanded' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              
              <div className={`accordion-content ${expandedSection === section.id ? 'expanded' : ''}`}>
                <p className="text-gray-400">{section.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 