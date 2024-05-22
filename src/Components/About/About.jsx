import React from 'react'
import './About.css'
import about from "../../assets/about.png"
import playIcon from "../../assets/playIcon.png"
const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div classname="about-left">
        <img src={about} alt="" className="about-img"></img>
        <img src={playIcon} alt="" className="playicon-img" onClick={()=>{setPlayState(true)}}></img>
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing tomorrow's leader today</h2>
        <p>The university allows students to gain a practical understanding of different engineering functions and to grow individual networks through cross-functional relationships. From computer science engineering to application engineering, there are various programmes for the students' addressing their interest. Students get to learn under the supervision of highly adept and experienced faculty teams developing the skills they need to succeed and make a valuable contribution right from the start.</p>
      </div>
    </div>
  )
}

export default About
