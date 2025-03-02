import { FaGitAlt, FaJava, FaDatabase, FaDocker, FaCode, FaHtml5, FaCss3Alt, FaBootstrap, FaJs, FaReact } from 'react-icons/fa';
import { SiJenkins, SiHibernate, SiMysql, SiAmazon } from 'react-icons/si';
import { BiLogoSpringBoot, BiLogoPostgresql } from 'react-icons/bi';

import './Skills.css';

const Skills = () => {
  const skills = [
    { name: "Java", icon: <FaJava />, color: "#007396" },
    { name: "Spring Boot", icon: <BiLogoSpringBoot />, color: "#6DB33F" },
    { name: "Hibernate", icon: <SiHibernate />, color: "#59666C" },
    { name: "MySQL", icon: <SiMysql />, color: "#4479A1" },
    { name: "PostgreSQL", icon: <BiLogoPostgresql />, color: "#336791" },
    { name: "Docker", icon: <FaDocker />, color: "#0db7ed" },
    { name: "Jenkins", icon: <SiJenkins />, color: "#D24939" },
    { name: "AWS", icon: <SiAmazon />, color: "#FF9900" },
    { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
    { name: "PGAdmin", icon: <FaDatabase />, color: "#336791" },
    { name: "VS Code", icon: <FaCode />, color: "#007ACC" },
    { name: "HTML", icon: <FaHtml5 />, color: "#E44D26" },
    { name: "CSS", icon: <FaCss3Alt />, color: "#1572B6" },
    { name: "Bootstrap", icon: <FaBootstrap />, color: "#7952B3" },
    { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E" },
    { name: "React.js", icon: <FaReact />, color: "#61DAFB" },
  ];



  return (
    <section id="skills" className="skills">
      <h2>Skills & Tools</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card" style={{ borderColor: skill.color }}>
            <span className="skill-icon" style={{ color: skill.color }}>
              {skill.icon}
            </span>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
