import { useState } from "react"
import "./index.css"

const Header=()=>{
  const [isOpen,setIsopen]=useState(false)
  return <header>
  <nav className="navbar">
    <div className="logo">SRIKANTH</div>
    <ul className={`nav-links ${isOpen ? "open" : ""}`}>
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#skills">Skills</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
    <div className="hamburger" onClick={()=>setIsopen(!isOpen)}>&#9776;</div>
  </nav>
</header>

}

export default Header