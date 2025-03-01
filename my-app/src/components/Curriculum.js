'use client';
import { useState } from 'react';

export default function Curriculum() {
  const [expandedModule, setExpandedModule] = useState(null);

  const modules = [
    {
      id: 1,
      title: "Module 1 - Introduction",
      content: [
        "What is PowerBI?",
        "Download and Install Power BI Desktop",
        "Quick Interface Tour",
        "Mini Project: Transform Data",
        "Mini Project: Visualize Data",
        "Mini Project: Creating a Data Model"
      ]
    },
    {
      id: 2,
      title: "Module 2 - Data Transformation – The Query Editor",
      content: [
        "Exploring Query Editor",
        "Connecting to our DataSource",
        "Editing Rows",
        "Changing DataTypes",
        "Replacing values",
        "Close and Apply",
        "Connecting to a CSV File",
        "Connecting to a Webpage",
        "Extracting Characters",
        "Splitting and Merging Columns",
        "Creating Conditional Columns",
        "Creating Columns from Examples",
        "Merging Queries",
        "Pivoting and Unpivoting",
        "Appending Queries",
        "Practice and Solution: Population Table",
        "The Fact-Dimension-Model",
        "Practice: Load the Dimension Table",
        "Organizing Our Queries in Groups",
        "Entering Data Manually",
        "Creating an Index Column",
        "Workflow and More Transformation",
        "Module Summary",
        "Practice Assignment 1"
      ]
    },
    {
      id: 3,
      title: "Module 3 - Data Transformation - Advanced",
      content: [
        "Advanced Editor-Best Practices",
        "Performance: References Versus Duplicating",
        "Performance: Enable/Disable Load and Report Refresh",
        "Group By",
        "Mathematical Operations",
        "Run Python Script",
        "Using Parameters to Dynamically Transform Data",
        "M Formula Language: Basics",
        "M Formula Language: Values, Lists, and Tables",
        "M Formula Language: Functions"
      ]
    },
    {
      id: 4,
      title: "Module 4 - Creating a Data Model",
      content: [
        "Why a Data Model?",
        "Create and Edit Relationships",
        "One-to-Many and One-to-One Relationship",
        "Many-to-Many(m:n) Relationship",
        "Cross-Filter Direction",
        "Activate and Deactivate Relationships",
        "Practice Assignment 2"
      ]
    },
    {
      id: 5,
      title: "Module 5 - Data Visualization",
      content: [
        "Our First Visual",
        "The Format Tab",
        "Understanding Tables",
        "Conditional Formatting",
        "The Pie Chart",
        "All about the filter Visual",
        "The Filter Pane for Developers",
        "Cross Filtering and Edit Interactions",
        "Practice Assignment 3",
        "Synching Slicers across Pages",
        "Creating Drilldowns",
        "Creating Drill-Throughs",
        "The Treemap Visual",
        "The Decomposition Tree",
        "Understanding the Matrix Visual",
        "Editing Pages",
        "Buttons and Actions",
        "Bookmarks to Customize Your Report",
        "Analytics and Forecasts with Line Charts",
        "Working with Custom Visuals",
        "Get Data Using Python Script"
      ]
    },
    {
      id: 6,
      title: "Module 6 - Power BI and Python",
      content: [
        "Python in Power BI",
        "Setting Up Python for Power BI",
        "Transforming Data Using Python",
        "Creating Visualizations Using Python",
        "Violin Plots, Pair Plots and Ridge Plots Using Python",
        "Machine Learning (BayesTextAnalyzer) Using Python"
      ]
    },
    {
      id: 7,
      title: "Module 7 - DAX - The Essentials",
      content: [
        "Introduction",
        "The Project Data",
        "Measures Versus Calculated Columns",
        "Automatically Creating a Data Table in DAX",
        "Calendar",
        "Creating a Complete Data Table with Features",
        "Creating a Key Measure Table",
        "Aggregation Functions",
        "The Different Versions of COUNT",
        "SUMX- Row-Based Calculations"
      ]
    },
    {
      id: 8,
      title: "Module 8 - DAX - The CALCULATE Function",
      content: [
        "CALCULATE- The Basics",
        "Changing the Context with FILTER",
        "ALL",
        "ALLSELECT",
        "ALLEXCEPT"
      ]
    },
    {
      id: 9,
      title: "Module 9 - Tell a Story with Your Data",
      content: [
        "Introduction - Best Practices",
        "Show Empathy and Identify the Requirements",
        "Find the Most Suitable KPIs",
        "Choose an Effective Visual",
        "Make Use of Natural Reading Patterns",
        "Tell a Story Using Visual Cues",
        "Avoid Chaos and Group Information"
      ]
    },
    {
      id: 10,
      title: "Module 10 - More Data Sources",
      content: [
        "JSON and REST API",
        "Setting Up a Local MySQL Database",
        "Connecting to a MySQL Database in Power BI",
        "Connecting to a SQL Database (PostgreSQL)"
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
        
        {/* <div className="flex items-center gap-2 mb-8">
          <div className="w-4 h-4 rounded-full bg-accent-blue"></div>
          <span className="text-lg">Comprehensive Training Program</span>
        </div> */}
        
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