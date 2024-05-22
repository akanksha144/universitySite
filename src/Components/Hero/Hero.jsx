import React from 'react'
import './Hero.css'
import darkArrow from "../../assets/darkArrow.png"
const Hero = () => {
  return (
    <div className='hero container'>
      <div className='hero-text'>
        <h1>We ensure better education for better world</h1>
        <p>Our university provides knowledge and contributes in society with young and professional graduates. Our cutting-edge curriculam is so awesome and helpful for enhancing the capabilities of a person. We welcome everyone who wanted to enhance their skills and who is eager to learn and be the one best. So choose us to grow.</p>
        <button className='btn'>Explore more<img src={darkArrow} alt=""></img></button>
      </div>
    </div>
  )
}

export default Hero
