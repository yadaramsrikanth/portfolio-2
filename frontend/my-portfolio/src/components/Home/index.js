
import { ReactTyped } from "react-typed";
import "./index.css";

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-container">
        {/* Text Section */}
        <div className="home-text">
          <h1>
            Hi, I'm <span className="highlight">Srikanth</span>
          </h1>

          <h2>
            <ReactTyped
              strings={[
                "Full Stack Developer",
                "Frontend Developer",
                "MERN Stack Developer",
              ]}
              typeSpeed={50}
              backSpeed={30}
              loop
            />
          </h2>

          <p>
            I build responsive, interactive, and user-friendly web applications
            using React, Node.js, Express, and MongoDB. Passionate about coding,
            problem-solving, and creating modern web experiences.
          </p>

          <div className="home-buttons">
            <a href="#projects" className="btn primary-btn">
              View My Work
            </a>
            <a href="#contact" className="btn secondary-btn">
              Contact Me
            </a>


          </div>
        </div>
      </div>
       <svg
    className="wave-divider"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1440 320"
  >
    <path
      fill="#f9f9f9"
      d="M0,160L48,165.3C96,171,192,181,288,181.3C384,181,480,171,576,165.3C672,160,768,160,864,170.7C960,181,1056,203,1152,208C1248,213,1344,203,1392,197.3L1440,192L1440,320L0,320Z"
    ></path>
  </svg>
    </section>
  );
};

export default Home;
