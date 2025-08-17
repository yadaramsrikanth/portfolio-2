import React, { useEffect, useRef } from "react";
import "./index.css";
import { DiHtml5, DiCss3, DiJavascript, DiReact, DiBootstrap, DiPython, DiNodejsSmall, DiMongodb,DiDatabase ,DiGit } from "react-icons/di";

const skillsData = [
  { name: "HTML", icon: <DiHtml5 />, color: "#E44D26" },
  { name: "CSS", icon: <DiCss3 />, color: "#1572B6" },
  { name: "JavaScript", icon: <DiJavascript />, color: "#F7DF1E" },
  { name: "React.js", icon: <DiReact />, color: "#61DAFB" },
  { name: "Bootstrap", icon: <DiBootstrap />, color: "#7952B3" },
  { name: "Python", icon: <DiPython />, color: "#3776AB" },
  { name: "Node.js", icon: <DiNodejsSmall />, color: "#339933" },
  { name: "MongoDB", icon: <DiMongodb />, color: "#47A248" },
  { name: "SQL", icon: <DiDatabase />, color: "#000000" },
  { name: "GitHub", icon: <DiGit />, color: "#181717" },
  // Add SQL icon if available
];

const Skills = () => {
  const skillsRef = useRef([]);

  useEffect(() => {
    const currentSkills = skillsRef.current;
    const observers = skillsRef.current.map((skill) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
          }
        },
        { threshold: 0.5 }
      );

      if (skill) observer.observe(skill);
      return observer;
    });

    return () => {
      observers.forEach((observer, i) => {
        if (currentSkills[i]) observer.unobserve(currentSkills[i]);
      });
    };
  }, []);

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h2>My Skills</h2>
        <div className="skills-grid">
          {skillsData.map((skill, index) => (
            <div
              className="skill-card"
              key={index}
              ref={(el) => (skillsRef.current[index] = el)}
            >
              <div className="skill-icon" style={{ color: skill.color }}>
                {skill.icon}
              </div>
              <h3>{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
