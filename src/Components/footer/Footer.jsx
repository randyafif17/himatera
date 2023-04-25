import React from 'react';
import himatera from '../../assets/image/himatera.png';
import './footer.css';

const Footer = () => (
  <div className="himatera__footer section__padding">
    <div className="himatera__footer-heading">
      <h1 className="gradient__text">Empowering innovation through the fusion of technology and intelligence.</h1>
    </div>

    {/* <div className="himatera__footer-btn">
      <p>Request Early Access</p>
    </div> */}

    <div className="himatera__footer-links">
      <div className="himatera__footer-links_logo">
        <img src={himatera} alt="himatera_logo" />
        <p>Kabinet Abyakta, <br /> All Rights Reserved</p>
      </div>
      <div className="himatera__footer-links_div">
        <h4>Contact Us!</h4>
        <p><a href='https://www.youtube.com/@trkbunair4412'>YouTube</a></p>
        <p><a href='https://open.spotify.com/'>Spotify</a></p>
        <p><a href='https://www.linkedin.com/'>LinkedIn</a></p>
        <p><a href='https://www.instagram.com/'>Instagram</a></p>
        <p><a href='https://www.whatsapp.com/'>WhatsApp</a></p>
      </div>
      <div className="himatera__footer-links_div">
        <h4>Organization</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        {/* <p>Contact</p> */}
      </div>
      <div className="himatera__footer-links_div">
        <h4>Find Us!</h4>
        <p><a href='https://goo.gl/maps/3H8uTXnPvxrahsVv5'>Airlangga University, Campus C, Surabaya, Jawa Timur, Indonesia</a></p>
        <p>085-132567</p>
        <p>info@payme.net</p>
      </div>
    </div>

    <div className="himatera__footer-copyright">
      <p>@2023 Kabinet Abyakta. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;