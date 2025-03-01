'use client';
import { useState } from 'react';

export default function FAQ() {
  const [expandedSection, setExpandedSection] = useState(null);

  const sections = [
    {
      id: 'why-datamites',
      title: 'Why Choose Our Power BI Training Program?',
      content: 'We offer comprehensive Power BI training with industry experts, hands-on projects, and real-world case studies. Our program is designed to take you from basics to advanced concepts with personalized attention and lifetime access to learning resources.'
    },
    {
      id: 'who-should-enroll',
      title: 'Who Should Enroll in this Power BI Course?',
      content: 'This course is perfect for data analysts, business analysts, BI professionals, data scientists, and anyone looking to enhance their data visualization and business intelligence skills. No prior experience is required, though basic Excel knowledge is helpful.'
    },
    {
      id: 'course-structure',
      title: 'How is the Course Structured?',
      content: 'The course is structured into 9 comprehensive modules, covering everything from basics to advanced Power BI concepts. It includes live sessions, hands-on projects, real-world case studies, and interactive Q&A sessions. Both online and offline training options are available.'
    },
    {
      id: 'certification',
      title: 'Do You Provide Certification?',
      content: 'Yes, upon successful completion of the course and projects, you will receive an industry-recognized certification. Our certification is valued by top companies and demonstrates your expertise in Power BI.'
    },
    {
      id: 'job-assistance',
      title: 'Is Job Assistance Provided?',
      content: 'Yes, we provide comprehensive job assistance including resume building, interview preparation, and connections with our corporate partners. Our placement cell actively helps students connect with potential employers.'
    },
    {
      id: 'learning-support',
      title: 'What Kind of Support is Available During the Course?',
      content: 'You get 24/7 access to learning materials, dedicated mentor support, doubt-clearing sessions, and a community of learners. We also provide lifetime access to course updates and our alumni network.'
    }
  ];

  return (
    <section className="faq-section">
      <div className="container mx-auto px-4">
        <div className="section-title">
          <h2 className="text-2xl font-bold">
            Frequently Asked Questions
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