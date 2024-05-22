import React from 'react'
import "./Contact.css"
import msgIcon from "../../assets/msgIcon.png"; 
import mailIcon from "../../assets/mailIcon.png"; 
import phoneIcon from "../../assets/phoneIcon.png"; 
import locationIcon from "../../assets/locationIcon.png"; 
const Contact = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "565de55e-8ca1-4131-9741-6833e98982f2");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
    return (
        <div className="contact">
            <div className="contact-col">
                <h3>Send a Message<img src={msgIcon} alt=""></img></h3>
                <p>Feel free to react out through contact form or find out contact information below. Your feedback, questions and suggestions are important to usas we strive to provide exceptional service to our university community. </p>
                <ul>
                    <li><img src={mailIcon} alt=""></img>akankshsahu1234527@gmail.com</li>
                    <li><img src={phoneIcon} alt=""></img>75******21</li>
                    <li><img src={locationIcon} alt=""></img>Noida, Uttar Pradesh</li>
                </ul>
            </div>
            <div className="contact-col">
                <form onSubmit={onSubmit}>
                    <label> Your name</label>
                    <input type="text" name="name" placeholder="Enter your name" required />
                    <label>Phone Number</label>
                    <input type="tel" name="phone" placeholder="Enter your mobile number" required />
                    <label>Write your message here</label>
                    <textarea name="message" rows="6" placeholder="Enter your message here" required></textarea>
                    <button type="submit" className="btn dark-btn">Submit now</button>
                </form>
                <span>{result}</span>
            </div>
        </div>
    )
}

export default Contact
