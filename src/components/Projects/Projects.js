import React from "react";
import "./Projects.css"; // Add styling separately
import siteImg from "../../assets/annapurnafarms.png"

const projects = [
  {
    id: 1,
    name: "E-Commerce Website",
    description: "A modern e-commerce platform with authentication and cart functionality.",
    tech: ["Java", "Springboot", "Postgresql", "Third Party API Integration"],
    image: siteImg, // Update with actual image path
    demoLink: "https://annapurnafarms.shop/",
    //  githubLink: "https://github.com/yourusername/ecommerce-project"
  }
  // ,
  // {
  //   id: 2,
  //   name: "Portfolio Website",
  //   description: "My personal portfolio built using React & Tailwind CSS.",
  //   tech: ["React", "Tailwind CSS", "Framer Motion"],
  //   image: "src/assets/portfolio.png",
  //   demoLink: "https://your-portfolio.com",
  //   githubLink: "https://github.com/yourusername/portfolio"
  // },
  // {
  //   id: 3,
  //   name: "Task Manager App",
  //   description: "A simple to-do app with drag-and-drop functionality.",
  //   tech: ["React", "Context API", "Firebase"],
  //   image: "src/assets/taskmanager.png",
  //   demoLink: "https://your-taskapp-demo.com",
  //   githubLink: "https://github.com/yourusername/task-manager"
  // }
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2 className="section-title">🚀 My Projects</h2>
      <div className="projects-container">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.name} className="project-img" />
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <p className="tech-stack">Tech: {project.tech.join(", ")}</p>
            <div className="project-buttons">
              <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="btn">Live Demo</a>
              {/* <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn github">GitHub</a> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
