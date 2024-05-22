import React from 'react'
import './Programs.css'
import six from "../../assets/six.jpg"
import seven from "../../assets/seven.jpg"
import eight from "../../assets/eight.jpg"
import programIcon1 from "../../assets/programIcon1.png"
import programIcon2 from "../../assets/programIcon2.png"
import programIcon3 from "../../assets/programIcon3.png"
const Programs = () => {
  return (
    <div className='programs'>
    <div className='program'>   
        <img src={six} alt=""></img>
        <div className='caption'>
            <img src={programIcon1} alt=""></img>
            <p>Graduation Degree</p>
        </div>
    </div>
    <div className='program'>
        <img src={seven} alt=""></img>
        <div className='caption'>
            <img src={programIcon2} alt=""></img>
            <p>Masters Degree</p>
        </div>
    </div>
    <div className='program'>
        <img src={eight} alt=""></img>
        <div className='caption'>
            <img src={programIcon3} alt=""></img>
            <p>Post Graduation</p>
        </div>
    </div>
    </div>
  )
}

export default Programs
