'use client';
import { useState } from 'react';

export default function Curriculum() {
  const [expandedModule, setExpandedModule] = useState(null);

  const modules = [
    {
      id: 1,
      title: "Module 1 - Introduction to Power BI",
      content: [
        "Introduction to Business Intelligence (BI)",
        "Stages of business intelligence (BI)",
        "Use cases of BI",
        "Various BI tools",
        "Overview of Data warehouse & concepts",
        "Introduction to Power BI",
        "Why Power BI",
        "Power BI Components",
        "Power BI pricing structure",
        "Building blocks of Power BI",
        "Architecture of Power BI",
        "Power BI vs Tableau vs QlikView"
      ]
    },
    {
      id: 2,
      title: "Module 2 - Data Extraction",
      content: [
        "Introduction to Business Intelligence (BI)",
        "Stages of business intelligence (BI)",
        "Use cases of BI",
        "Various BI tools",
        "Overview of Data warehouse & concepts",
        "Introduction to Power BI",
        "Why Power BI",
        "Power BI Components",
        "Power BI pricing structure",
        "Building blocks of Power BI",
        "Architecture of Power BI",
        "Power BI vs Tableau vs QlikView"
      ]
    },
    {
      id: 3,
      title: "Module 3 - Data Transformation – Shaping and Combining Data",
      content: [
        "Introduction to Business Intelligence (BI)",
        "Stages of business intelligence (BI)",
        "Use cases of BI",
        "Various BI tools",
        "Overview of Data warehouse & concepts",
        "Introduction to Power BI",
        "Why Power BI",
        "Power BI Components",
        "Power BI pricing structure",
        "Building blocks of Power BI",
        "Architecture of Power BI",
        "Power BI vs Tableau vs QlikView"
      ]
    },
    {
      id: 4,
      title: "Module 4 - Data Modelling and DAX",
      content: [
        "Introduction to Business Intelligence (BI)",
        "Stages of business intelligence (BI)",
        "Use cases of BI",
        "Various BI tools",
        "Overview of Data warehouse & concepts",
        "Introduction to Power BI",
        "Why Power BI",
        "Power BI Components",
        "Power BI pricing structure",
        "Building blocks of Power BI",
        "Architecture of Power BI",
        "Power BI vs Tableau vs QlikView"
      ]
    },
    {
      id: 5,
      title: "Module 5 - Data Visualization with Analytics",
      content: [
        "Introduction to Business Intelligence (BI)",
        "Stages of business intelligence (BI)",
        "Use cases of BI",
        "Various BI tools",
        "Overview of Data warehouse & concepts",
        "Introduction to Power BI",
        "Why Power BI",
        "Power BI Components",
        "Power BI pricing structure",
        "Building blocks of Power BI",
        "Architecture of Power BI",
        "Power BI vs Tableau vs QlikView"
      ]
    },
    {
      id: 6,
      title: "Module 6 - Power BI Service (Cloud), Q & A, and Data Insights",
      content: [
        "Introduction to Business Intelligence (BI)",
        "Stages of business intelligence (BI)",
        "Use cases of BI",
        "Various BI tools",
        "Overview of Data warehouse & concepts",
        "Introduction to Power BI",
        "Why Power BI",
        "Power BI Components",
        "Power BI pricing structure",
        "Building blocks of Power BI",
        "Architecture of Power BI",
        "Power BI vs Tableau vs QlikView"
      ]
    },
    {
      id: 7,
      title: "Module 7 - Power BI Settings, Administration, and Direct Connectivity",
      content: [
        "Introduction to Business Intelligence (BI)",
        "Stages of business intelligence (BI)",
        "Use cases of BI",
        "Various BI tools",
        "Overview of Data warehouse & concepts",
        "Introduction to Power BI",
        "Why Power BI",
        "Power BI Components",
        "Power BI pricing structure",
        "Building blocks of Power BI",
        "Architecture of Power BI",
        "Power BI vs Tableau vs QlikView"
      ]
    },
    {
      id: 8,
      title: "Module 8 - Embedded Power BI with API and Power BI Mobile",
      content: [
        "Introduction to Business Intelligence (BI)",
        "Stages of business intelligence (BI)",
        "Use cases of BI",
        "Various BI tools",
        "Overview of Data warehouse & concepts",
        "Introduction to Power BI",
        "Why Power BI",
        "Power BI Components",
        "Power BI pricing structure",
        "Building blocks of Power BI",
        "Architecture of Power BI",
        "Power BI vs Tableau vs QlikView"
      ]
    },
    {
      id: 9,
      title: "Module 9 - Power BI Advance and Power BI Premium",
      content: [
        "Introduction to Business Intelligence (BI)",
        "Stages of business intelligence (BI)",
        "Use cases of BI",
        "Various BI tools",
        "Overview of Data warehouse & concepts",
        "Introduction to Power BI",
        "Why Power BI",
        "Power BI Components",
        "Power BI pricing structure",
        "Building blocks of Power BI",
        "Architecture of Power BI",
        "Power BI vs Tableau vs QlikView"
      ]
    }
  ];

  return (
    <section className="curriculum-section">
      <div className="container mx-auto px-4">
        <div className="section-title">
          <h2 className="text-2xl font-bold">
            Power BI Course Syllabus
          </h2>
        </div>
        
        <div className="flex items-center gap-2 mb-8">
          <div className="w-4 h-4 rounded-full bg-accent-blue"></div>
          <span className="text-lg">Live Course</span>
        </div>
        
        <div className="section-content">
          {modules.map((module) => (
            <div key={module.id} className="accordion-item">
              <button
                className="accordion-button"
                onClick={() => setExpandedModule(expandedModule === module.id ? null : module.id)}
              >
                <span>{module.title}</span>
                <svg
                  className={`accordion-icon ${expandedModule === module.id ? 'expanded' : ''}`}
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
              
              <div className={`accordion-content ${expandedModule === module.id ? 'expanded' : ''}`}>
                <ul>
                  {module.content.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 