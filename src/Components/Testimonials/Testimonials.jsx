import React, {useRef} from 'react'
import "./Testimonials.css"
import backIcon from "../../assets/backIcon.png"
import nextIcon from "../../assets/nextIcon.png"
import user1 from "../../assets/user1.png"
import user2 from "../../assets/user2.png"
import user3 from "../../assets/user3.png"
import user4 from "../../assets/user4.png"
const Testimonials = () => {
  const slider=useRef()
  let tx=0;
  const slideForward=()=>{
    console.log("Im getting hitted")
    if(tx>-40){
      tx-=20;
    }
  slider.current.style.transform=`translateX(${tx}%)`;
  }
  const slideBackward=()=>{
    console.log("hey")
    if(tx<0){
      tx+=20;
    }
  slider.current.style.transform=`translateX(${tx}%)`;
  }
  return (
    <div className="testimonials">
    <img src={backIcon} alt="hello" className="back-btn" onClick={slideBackward}/>
    <img src={nextIcon} alt="hey" className="next-btn" onClick={slideForward}/>
     <div className="slider">
      <ul ref={slider}>
        <li>
          <div className="slide">
            <div className="user-info">
              <img src={user1} alt=""></img>
              <div>
                <h3>William Jackson1</h3>
                <span>Educity, USA</span>
              </div>
            </div>
            <p>Choosing this university to pursue my degree here, was one of the best decisions I have ever made. The supportive community, state of the art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
          </div>
        </li>
        <li>
          <div className="slide">
            <div className="user-info">
              <img src={user2} alt=""></img>
              <div>
                <h3>William Jackson2</h3>
                <span>Educity, USA</span>
              </div>
            </div>
            <p>Choosing this university to pursue my degree here, was one of the best decisions I have ever made. The supportive community, state of the art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
          </div>
        </li>
        <li>
          <div className="slide">
            <div className="user-info">
              <img src={user3} alt=""></img>
              <div>
                <h3>William Jackson</h3>
                <span>Educity, USA</span>
              </div>
            </div>
            <p>Choosing this university to pursue my degree here, was one of the best decisions I have ever made. The supportive community, state of the art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
          </div>
        </li>
        <li>
          <div className="slide">
            <div className="user-info">
              <img src={user4} alt=""></img>
              <div>
                <h3>William Jackson4</h3>
                <span>Educity, USA</span>
              </div>
            </div>
            <p>Choosing this university to pursue my degree here, was one of the best decisions I have ever made. The supportive community, state of the art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
          </div>
        </li>
      </ul>
     </div>
    </div>
  )
}

export default Testimonials
