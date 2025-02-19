import React from "react";
import MyAster from '../assets/images/MyAster.png';
import SoulWallet from '../assets/images/SoulWallet.png';
import InterMiles from '../assets/images/InterMiles.png';
import Zaxbys from '../assets/images/Zaxbys.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://www.myaster.com" target="_blank" rel="noreferrer"><img src={MyAster} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.myaster.com" target="_blank" rel="noreferrer"><h2>MyAster</h2></a>
                <p>Developed a healthcare platform integrating doctor consultations, ePharmacy, and home care services, leveraging React, Next.js for seamless user experience.</p>
            </div>
            <div className="project">
                <a href="https://global.zaxbys.com/" target="_blank" rel="noreferrer"><img src={Zaxbys} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://global.zaxbys.com/" target="_blank" rel="noreferrer"><h2>Zaxbys</h2></a>
                <p>Developed a responsive and scalable web application for US-based users, ensuring a seamless experience, optimized performance, and accessibility across devices.</p>
            </div>
            <div className="project">
                <a href="https://www.intermiles.com" target="_blank" rel="noreferrer"><img src={InterMiles} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.intermiles.com" target="_blank" rel="noreferrer"><h2>InterMiles</h2></a>
                <p>Developed a responsive and user-friendly platform for seamless hotel reservations, and rewards management, enhancing user experience and transaction efficiency.</p>
            </div>
            <div className="project">
                <a href="https://www.soulwallet.com" target="_blank" rel="noreferrer"><img src={SoulWallet} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.soulwallet.com" target="_blank" rel="noreferrer"><h2>SoulWallet</h2></a>
                <p>Developed a financial comparison platform to help users find the best credit cards, loans, and insurance plans, ensuring a seamless and user-friendly experience.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;