import React, { useRef, useEffect } from "react";

import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";
import "./index.css"

const Contact=()=>{
  const contactRef = useRef(null);

  useEffect(() => {
    const currentRef = contactRef.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
        }
      },
      { threshold: 0.1 } // lower threshold to trigger easily
    );

    observer.observe(currentRef);

    // Fallback if already in viewport
    if (currentRef.getBoundingClientRect().top < window.innerHeight) {
      currentRef.classList.add("fade-in");
    }

    return () => {
      observer.unobserve(currentRef);
    };
  }, []);

  return (
    <section id="contact" className="contact-section" ref={contactRef}>
      <div className="contact-container">
        <h2>Contact Me</h2>
        <p>Feel free to reach out for projects or collaborations!</p>
        <div className="contact-content">
          {/* Contact Form */}
          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Send Message</button>
          </form>

          {/* Contact Info */}
          <div className="contact-info">
            <p><FaEnvelope /> yadaramsrikanth2000@gmail.com</p>
            <p><FaPhone /> +91 7893120993</p>
            <div className="social-icons">
              <a href="https://linkedin.com/in/srikanthyadaram" target="_blank" rel="noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://github.com/yadaramsrikanth" target="_blank" rel="noreferrer">
                <FaGithub />
                
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact