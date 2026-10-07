import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "React",
    "NextJs",
    "TypeScript",
    "JavaScript",
    "Python",
    "Redux",
    "Redux Saga",
    "HTML5",
    "CSS3",
    "Headless CMS",
    "Material UI",
    "Webpack",
    "Jest",
    "Axios",
    "Babel",
    "Postman"
];

const labelsSecond = [
    "Git",
    "GitHub Actions",
    "Docker",
    "Azure",
    "Jenkins",
    "SonarQube",
    "Playwright",
    "K6",
    "Appium",
    "Selenium",
    "Allure-Report",
    "Grafana",
    "API Integration"
];

function Expertise() {
    return (
        <div className="container" id="expertise">
            <div className="skills-container">
                <h1>Expertise</h1>
                <div className="skills-grid">
                    <div className="skill">
                        <FontAwesomeIcon icon={faReact} size="3x" />
                        <h3>Front-End Development</h3>
                        <p>
                            I specialize in building responsive, high-performance web applications using modern frontend technologies like React and Next.js. My expertise includes UI development, state management, API integration, and performance optimization, ensuring scalability, accessibility, and maintainability.
                            I also have experience integrating backend APIs with frontend applications, enabling efficient data flow and seamless user interactions.
                        </p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {labelsFirst.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faDocker} size="3x" />
                        <h3>Testing & CI/CD</h3>
                        <p>I set up CI/CD pipelines and automated testing so front-end releases ship reliably, with code-quality checks and monitoring built in.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {labelsSecond.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Expertise;
