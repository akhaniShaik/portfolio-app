import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import ProfilePhoto from '../assets/images/ProfilePhoto.jpg';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={ProfilePhoto} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/akhaniShaik/portfolio-app" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/akhani-shaik/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>AKhani Shaik</h1>
          <p>Front-End Developer</p>
          <div className="mobile_social_icons">
            <a href="https://github.com/akhaniShaik" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/akhani-shaik/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
