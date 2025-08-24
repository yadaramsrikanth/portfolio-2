import React, { useRef, useEffect, useState } from "react";

import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import "./index.css"

const Contact=()=>{
const initialState={name:"",email:"",message:""}
const [responseMsg,setResponseMsg]=useState("")
const [isError,setIsError]=useState(false)
const [clientcontactDetails,setclientContactDetails]=useState(initialState)
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


const submitContactDetails=async(event)=>{
  event.preventDefault()
  try{
  
  console.log(clientcontactDetails)

  const emailjsResult= await emailjs.send(
    process.env.REACT_APP_EMAILJS_SERVICE_ID,
   process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
   clientcontactDetails,
   process.env.REACT_APP_EMAILJS_PUBLIC_KEY
)
  console.log(emailjsResult)
  setIsError(false)
  setResponseMsg("Message Sent SuccessFully")
  setclientContactDetails(initialState)
  setTimeout(()=>{
    setResponseMsg("")
  },4000)
 
}catch(e){
  setIsError(true)
  setResponseMsg("Error Sending Mesaage")
  
  console.log(e)
  setTimeout(()=>{
    setResponseMsg("")
  },3000)
} 
}




const onChangeDetails=(e)=>{
  setclientContactDetails({...clientcontactDetails,[e.target.name]:e.target.value})
}



  return (
    <section id="contact" className="contact-section" ref={contactRef}>
      <div className="contact-container">
        <h2>Contact Me</h2>
        <p>Feel free to reach out for projects or collaborations!</p>
        <div className="contact-content">
          {/* Contact Form */}
          <form className="contact-form" onSubmit={submitContactDetails}>
            <input value={clientcontactDetails.name} name="name" type="text" placeholder="Your Name" required  onChange={onChangeDetails}/>
            <input value={clientcontactDetails.email} name="email" type="email" placeholder="Your Email" required  onChange={onChangeDetails} />
            <textarea value={clientcontactDetails.message} name="message" placeholder="Your Message" rows="5" required onChange={onChangeDetails}></textarea>
            <button type="submit">Send Message</button>
          {responseMsg&&<p style={{color:isError?"red":"green",fontSize:"24px"}}>{responseMsg}</p>}
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