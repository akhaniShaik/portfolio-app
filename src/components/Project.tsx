import React from "react";
import MyAster from '../assets/images/MyAster.png';
import SoulWallet from '../assets/images/SoulWallet.png';
import InterMiles from '../assets/images/InterMiles.png';
import Zaxbys from '../assets/images/Zaxbys.png';
import '../assets/styles/Project.scss';

const projects = [
  {
    name: "MyAster",
    url: "https://www.myaster.com",
    image: MyAster,
    description:
      "Developed a healthcare platform integrating doctor consultations, ePharmacy, and home care services, leveraging React, Next.js for seamless user experience.",
  },
  {
    name: "Zaxbys",
    url: "https://global.zaxbys.com/",
    image: Zaxbys,
    description:
      "Developed a responsive and scalable web application for US-based users, ensuring a seamless experience, optimized performance, and accessibility across devices.",
  },
  {
    name: "InterMiles",
    url: "https://www.intermiles.com",
    image: InterMiles,
    description:
      "Developed a responsive and user-friendly platform for seamless hotel reservations, and rewards management, enhancing user experience and transaction efficiency.",
  },
  {
    name: "SoulWallet",
    url: "https://www.soulwallet.com",
    image: SoulWallet,
    description:
      "Developed a financial comparison platform to help users find the best credit cards, loans, and insurance plans, ensuring a seamless and user-friendly experience.",
  },
];

function Project() {
  return(
    <div className="projects-container" id="projects">
      <h1>Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project">
            <a href={project.url} target="_blank" rel="noreferrer">
              <img src={project.image} className="zoom" alt={project.name} width="100%" />
            </a>
            <a href={project.url} target="_blank" rel="noreferrer">
              <h2>{project.name}</h2>
            </a>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;