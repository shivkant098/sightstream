import React from 'react'
import './footer.css'
import { useNavigate } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.css';

export default function Footer() {
  const navigate = useNavigate();

  return (

    <>
    <footer class="footer">
  <div class="footer-left col-md-4 col-sm-6">
    <p class="about">
      <span> About the Company</span> "A cutting-edge video calling web app – your gateway to seamless, high-quality virtual connections. Elevate your conversations with crystal-clear video and audio, backed by innovative features designed for effortless communication. From secure end-to-end encryption to an intuitive user interface, we prioritize your privacy and user experience. Say goodbye to distance and hello to a new era of immersive virtual meetings. Join us today and redefine the way you connect online."






.
    </p>
    <div className="icons">
            <a href="#as"><i className="fab fa-facebook"></i></a>
            <a href="#as"><i className="fab fa-twitter"></i></a>
            <a href="#as"><i className="fab fa-linkedin"></i></a>
            <a href="#as"><i className="fab fa-google-plus"></i></a>
            <a href="#as"><i className="fab fa-instagram"></i></a>
          </div>

  </div>
  <div class="footer-center col-md-4 col-sm-6">
    <div>
      <i class="fa fa-map-marker"></i>
      <p><span> Garden Colony Kharar</span> Mohali, India</p>
    </div>
    <div>
      <i class="fa fa-phone"></i>
      <p> (+91) 6202 055 728</p>
    </div>
    <div>
      <i class="fa fa-envelope"></i>
      <p> <a class="text-blue-500 font-body hover:text-gray-800" href="mailto:kumar.shivkant87@gmail.com">
                            kumar.shivkant87@gmail.com
                        </a></p>
    </div>
  </div>
  <div class="footer-right col-md-4 col-sm-6">
    <h2> Sight Stream </h2>
    <p class="menu">
      <a onClick={() => navigate("/")} href="/"> Home</a> |
      <a onClick={() => navigate("/features")} href="/"> Features</a> |
      <a onClick={() => navigate("/pricing")} href="/"> Pricing</a> |
      <a onClick={() => navigate("/company")} href="/"> Company</a> 
    </p>
  </div>
</footer>
    
    </>
  )
}
