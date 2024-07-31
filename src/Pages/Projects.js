import React, { useState, useEffect } from "react";
import "./Projects.css";

const skillsData = [
  { skill: "HTML 5", percentage: 95 },
  { skill: "CSS 3", percentage: 85 },
  { skill: "JavaScript", percentage: 80 },
  { skill: "React Js", percentage: 75 },
  { skill: "Bootstrap", percentage: 75 },
];

function ProjectPage() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div>
      <header className="contact-header">
        <h1>Skills</h1>
      </header>
      <div className="skills-container">
        {skillsData.map((item, index) => (
          <div className="skill" key={index}>
            <div className="skill-name">{item.skill}</div>
            <div className="pipeline-container">
              <div className="pipeline-shadow">
                <div
                  className="pipeline"
                  style={{
                    width: loaded ? `${item.percentage}%` : "1%",
                    backgroundColor: getColor(index),
                  }}
                ></div>
              </div>
              <span className="percentage">{item.percentage}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Function to get different colors for pipelines
const getColor = (index) => {
  const colors = ["#4CAF50", "#2196F3", "#FFC107", "#FF5722", "#9C27B0"]; // Add more colors if needed
  return colors[index % colors.length];
};

export default ProjectPage;
