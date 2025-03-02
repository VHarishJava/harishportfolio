import React from "react";
import Typing from "react-typing-effect";
import boy from "../../assets/bannerjavadeveloper.png";

import "./Intro.css";

const Intro = () => {
  return (
    <section id="intro" className="intro">
      <div className="intro-container">
        {/* Profile Image Section */}
        <div className="intro-image">
          <img src={boy} alt="Vilasagaram Harish" className="profile-img" />
        </div>

        {/* Content Section */}
        <div className="intro-content">
          <h1 className="name">
            👋 Hi there, <br />
            <span className="highlight">I’m Vilasagaram Harish</span>
          </h1>
          <h2 className="role">
            <Typing
              text={[
                "Java Full Stack Developer",
                "Spring Boot Expert",
                "Backend API Developer",
                "Problem Solver",
              ]}
              speed={100}
              eraseSpeed={50}
              eraseDelay={1500}
              typingDelay={500}
              loop={true}
            />
          </h2>
          <p className="tagline">
            Passionate about building scalable and efficient backend systems, I specialize in Java, Spring Boot, and RESTful APIs, ensuring robust and high-performance applications.
          </p>
          <a href="#projects" className="cta-button">
            View Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
