import React from "react";
import { FaGraduationCap } from "react-icons/fa";

import "./Education.css";

const educationData = [
  {
    year: "2019 – 2023",
    degree: "B.Tech (Bachelor of Technology) in Electronis and Communication Engineering",
    college:
      "JNTUH",
    cgpa: "CGPA: 6.9",
  },
  {
    year: "2017 – 2019",
    degree: "Intermediate (MPC)",
    college: "Krishnaveni Vikas Junior College, Godavarikhani",
    cgpa: "Percentage: 66%",
  },
  {
    year: "2016 - 2017",
    degree: "Secondary School Certificate",
    college: "Sri Rama Vidhyanikenthan High School, Godavarikhani",
    cgpa: "CGPA: 7.8",
  },
];

const EducationTimeline = () => {
  return (
    <section className="education-section" id="education">
      <h2 className="education-title">🎓 EDUCATION</h2>
      <div className="timeline">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
          >
            <div className="timeline-icon">
              <FaGraduationCap className="icon" />
            </div>
            <div className="timeline-content">
              <h3>{edu.year}</h3>
              <p className="degree">{edu.degree}</p>
              <p className="college">{edu.college}</p>
              <p className="cgpa">{edu.cgpa}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationTimeline;
