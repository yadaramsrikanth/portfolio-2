import React, { useEffect, useRef } from "react";
import "./index.css";

const About = () => {
  const aboutRef = useRef(null);

  // Fade-in animation on scroll
  useEffect(() => {
     const currentRef = aboutRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
        }
      },
      { threshold: 0.3 }
    );

    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <section id="about" className="about-section" ref={aboutRef}>
      <div className="about-container">
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            I’m a <strong>Full Stack Developer</strong> with expertise in{" "}
            <span className="highlight">HTML, CSS, JavaScript, Bootstrap, SQL, MongoDB, Node.js, Express.js, and ReactJS</span>.  
            I’m passionate about building innovative web applications that are intuitive, user-friendly, and impactful.  
            I love solving real-world problems through clean and efficient code, and I’m always eager to learn new technologies to enhance my skillset.
          </p>
          <p>
            I’m currently looking for opportunities to contribute to projects and join a team that values creativity, innovation, and continuous learning.
          </p>
          <a
            rel="noreferrer"
            href="https://drive.google.com/file/d/1Ionv4kU3k0KmN1bqRxcuM7Eh1cKO5nOZ/view?usp=sharing"
            target="_blank"
            className="resume-button"
          >
            Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
