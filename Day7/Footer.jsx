import React from "react"
import "../assets/css/Footer.css"
export default function Footer() {
  return (
<div class="mfooter">
        <div class="heading">
        </div>
        <div class="content">
          <div class="services">
            <h4>Services</h4>
            <p><a href="#">App development</a></p>
            <p><a href="#">Web development</a></p>
            <p><a href="#">DevOps</a></p>
            <p><a href="#">Web designing</a></p>
          </div>
          <div class="social-media">
            <h4>Social</h4>
            <p>
              <a href="https://www.linkedin.com/SimpleLearn"
              ><i class="fab fa-linkedin"></i> Linkedin</a>
            </p>
            <p>
              <a href="https://www.twitter.com"
              ><i class="fab fa-twitter"></i> Twitter</a>
            </p>
            <p>
              <a href="https://github.com"
              ><i class="fab fa-github"></i> Github</a>
            </p>
            <p>
              <a href="https://www.facebook.com"
              ><i class="fab fa-facebook"></i> Facebook</a>
            </p>
            <p>
              <a href="https://www.instagram.com"
              ><i class="fab fa-instagram"></i> Instagram</a>
            </p>
          </div>
          <div class="links">
            <h4>Quick links</h4>
            <p><a href="#">Home</a></p>
            <p><a href="/About">About</a></p>
            <p><a href="/Help">Help</a></p>
            <p><a href="/Contact">Contact</a></p>
          </div>
          <div class="details">
            <h4 class="address">Address</h4>
            <p>
              10th,vivekanadhar street ,Main Road  <br />
              Town hall, CBE.
            </p>
            <h4 class="mobile">Mobile</h4>
            <p><a href="#">+91-8870754365<br></br>
              +91-0486534566</a></p>
            <h4 class="mail">Email</h4>
            <p><a href="#">SimpleLearn@gmail.com</a></p>
          </div>
          <footer>
            <hr />
            ©️ 2024 simpleLearn.
          </footer>
        </div>
      </div>
  )
}