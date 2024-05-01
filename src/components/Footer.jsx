import React from 'react'
import '../styles/footer.css';
import twitterIcon from '../assets/twitter_icon.png';
import youtubeIcon from '../assets/youtube_icon.png';
import instagramIcon from '../assets/instagram_icon.png';
import facebookIcon from '../assets/facebook_icon.png';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <img src={twitterIcon} alt="Twitter Icon" />
        <img src={youtubeIcon} alt="Youtube Icon" />
        <img src={instagramIcon} alt="Instagram Icon" />
        <img src={facebookIcon} alt="Facebook Icon" />
      </div>
      <div className="footer-content">
        <div className="footer-col">
          <ul>
            <li>Audio Description</li>
            <li>Investor Relations</li>
            <li>Legal Notices</li>
          </ul>
        </div>
        <div className="footer-col">
          <ul>
            <li>Help Centre</li>
            <li>Jobs</li>
            <li>Cookie Preferences</li>
          </ul>
        </div>
        <div className="footer-col">
          <ul>
            <li>Gift Cards</li>
            <li>Terms of Use</li>
            <li>Corporate Information</li>
          </ul>
        </div>
        <div className="footer-col">
          <ul>
            <li>Media Centre</li>
            <li>Privacy</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer