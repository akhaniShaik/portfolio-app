import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';
import '../assets/styles/Main.scss';
import ProfilePhoto from '../assets/images/ProfilePhoto.jpg';

const resumeUrl = "/Akhani_Resume_2025.pdf"; 

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={ProfilePhoto} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/akhaniShaik" target="_blank" rel="noreferrer"><GitHubIcon /></a>
            <a href="https://www.linkedin.com/in/akhani-shaik/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
          </div>
          <h1>AKhani Shaik</h1>
          <p>Front-End Developer</p>
          <Button
            variant="contained"
            startIcon={<DownloadIcon />}
            href={resumeUrl}
            download="Akhani_Shaik_Resume.pdf"
            className="button"
          >
            Download Resume
          </Button>
          <p className="description">
            Passionate about building scalable, user-friendly web applications with React.js, TypeScript, and modern front-end technologies.
          </p>
          <div className="mobile_social_icons">
            <a href="https://github.com/akhaniShaik" target="_blank" rel="noreferrer"><GitHubIcon /></a>
            <a href="https://www.linkedin.com/in/akhani-shaik/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
