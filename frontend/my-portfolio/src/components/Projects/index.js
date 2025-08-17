import React, { useRef, useEffect } from "react";
import "./index.css";

const projectsData = [
  {
    title: "NxtTrendz Ecommerce",
    image: "https://res.cloudinary.com/dqdx0yz2t/image/upload/v1736316432/Screenshot_199_vmw4qj.png",
    description: "Developed using React.js, and Node.js.",
     credentials:"username:rahul,password:rahul@2021",
    link:"https://trendzsrikanth.ccbp.tech/"
  },
  {
    title: "Job Search Application",
    image: "https://res.cloudinary.com/dqdx0yz2t/image/upload/v1736316840/Screenshot_200_nxay90.png",
    description: "Developed using React.js and Express.js.",
    credentials:"username:rahul,password:rahul@2021",
    link: "https://srikanthjobbyap.ccbp.tech/"
  },
  {
    title: "NetFlix Clone",
    image: "https://res.cloudinary.com/dqdx0yz2t/image/upload/v1736316975/Screenshot_201_fpn2im.png",
    description: "Developed using React.js.",
    credentials:"username:rahul,password:rahul@2021",
    link: "https://srikanthnetflix.ccbp.tech/"
  }
];

const Projects = () => {
  const projectsRef = useRef([]);

  useEffect(() => {
    const currentProjects = projectsRef.current;
    const observers = currentProjects.map((project) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
          }
        },
        { threshold: 0.3 }
      );

      if (project) observer.observe(project);
      return observer;
    });

    return () => {
      observers.forEach((observer, i) => {
        if (currentProjects[i]) observer.unobserve(currentProjects[i]);
      });
    };
  }, []);

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2>My Projects</h2>
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div
              className="project-card"
              key={index}
              ref={(el) => (projectsRef.current[index] = el)}
            >
              <img src={project.image} alt={project.title} className="project-img" />
              <div className="project-overlay">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <p>{project.credentials}</p>
                <a href={project.link} target="_blank" rel="noreferrer" className="project-btn">
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
