import React from 'react'
import "./Campus.css";
import five from "../../assets/five.jpg"
import six from "../../assets/six.jpg"
import seven from "../../assets/seven.jpg"
import eight from "../../assets/eight.jpg"
import whiteArrow from "../../assets/whiteArrow.png"
const Campus = () => {
  return (
    <div className='campus'>
      <div className="gallery">
        <img src={five} alt=""></img>
        <img src={six} alt=""></img>
        <img src={seven} alt=""></img>
        <img src={eight} alt=""></img>
      </div>
      <button className="btn dark-btn"> See more here <img src={whiteArrow} alt=""></img></button>
    </div>
  )
}

export default Campus
