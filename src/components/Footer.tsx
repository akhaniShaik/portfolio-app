import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  const getYear = new Date().getFullYear();
  return (
    <footer>
      <div>
        <a href="https://github.com/akhaniShaik" target="_blank" rel="noreferrer"><GitHubIcon /></a>
        <a href="https://www.linkedin.com/in/akhani-shaik/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
      </div>
      <p>A portfolio designed & built by <a href="https://github.com/akhaniShaik/react-portfolio-template" target="_blank" rel="noreferrer">Akhani Shaik</a> with 💜</p>
      <p>© {getYear} Copyright. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
