import React from 'react'
import pic1 from "../assets/images/email.png"
import pic2 from "../assets/images/facebook.png"
import pic3 from "../assets/images/instagram.png"
import pic4 from "../assets/images/location.png"
import pic5 from "../assets/images/man.png"
import pic6 from "../assets/images/phone.png"
import Navbar from '../components/Navbar'
import pic7 from "../assets/images/message.png"
import "../assets/css/Contact.css"
function Contact() {
  return (
    <div>
    <Navbar/>
    <div className='contact-container1'>
    <h1>Contact Us</h1>
    <div className='contact-containers'>
    
    <div className='contact-container2'>
    <div style={{display:"flex"}}>
    <img src={pic6} style={{height:"1cm",width:"1cm",marginTop:"1cm"}}></img><h1>+91 8707456734</h1>
    </div>
    <div style={{display:"flex"}}>
    <img src={pic1} style={{height:"1cm",width:"1cm",marginTop:"1cm"}}></img><h1>Kidsparty@gamil.com</h1>
    </div>
    <div style={{display:"flex"}}>
    <img src={pic4} style={{height:"1cm",width:"1cm",marginTop:"0.5cm"}}></img><p>#209/C, Rama Temple Rd,
    1st Stage, 2nd Block, HBR Layout,
    Bangalore - 43</p>
    </div>
    <div style={{display:"flex",padding:"1cm"}}>
    <img src={pic2} style={{height:"2cm",width:"2cm",marginTop:"-0.3cm"}}></img>
    <img src={pic3} style={{height:"1.8cm",width:"1.8cm",marginLeft:"1cm"}}></img>
    </div>
    </div>
    <div className='contact-form-container'>
    <img src={pic5} style={{height:"1cm",width:"1cm"}}></img><input placeholder='Your Name' id='name' type='text' required></input><br></br>
    <img src={pic6} style={{height:"1cm",width:"1cm"}}></img><input placeholder='Phone' id='phoneNo' type='text' required></input><br></br>
    <img src={pic1} style={{height:"1cm",width:"1cm"}}></img><input placeholder='Email' id='email' type='text' required></input><br></br>
    <img src={pic7} style={{height:"1cm",width:"1cm"}}></img><input placeholder='Your Message...' id='message' type='text' required></input><br></br>
    <button>Send</button>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Contact