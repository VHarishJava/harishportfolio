import React from "react";
import boy from "../../assets/banner.png";
import '@fortawesome/fontawesome-free/css/all.min.css';

import "./About.css";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        {/* About Image */}
        <div className="about-image">
          <img src={boy} alt="Vilasagaram Harish" className="about-img" />
        </div>

        {/* About Content */}
        <div className="about-content">
          <h2 className="about-heading">About Me</h2>
          <p className="about-text">
            Hi, I'm <strong>Vilasagaram Harish</strong>, a passionate{" "}
            <strong>Java Backend Developer</strong> with expertise in{" "}
            <strong>Java</strong>, <strong>Spring Boot</strong>,{" "}
            <strong>Hibernate</strong>, and <strong>RESTful APIs</strong>. I
            specialize in building scalable, secure, and high-performance backend
            systems that power modern applications.
          </p>
          <p className="about-text">
            I have experience in designing and optimizing databases using{" "}
            <strong>PostgreSQL</strong> and <strong>MySQL</strong>, implementing{" "}
            <strong>Microservices</strong>, and integrating DevOps tools like{" "}
            <strong>Docker</strong> and <strong>Jenkins</strong>. My focus is on
            writing clean, efficient code and ensuring seamless API communication
            between frontend and backend.
          </p>
          <p className="about-text">
            I’m always eager to learn new technologies, improve system
            performance, and collaborate with teams to build robust software
            solutions. Let's connect and build something great together!
          </p>
          <div className="button-container">
            <button
              className="resume-btn"
              onClick={() =>
                window.open(
                  "https://docs.google.com/document/d/1gey0OJf2TGW9keXxc3MnVVuoGMp3Xopk/edit?usp=sharing&ouid=102454205399929379970&rtpof=true&sd=true",
                  "_blank"
                )
              }
            >
              <i className="fas fa-file-pdf"></i>Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
