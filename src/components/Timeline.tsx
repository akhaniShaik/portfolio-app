import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="experience">
      <div className="items-container">
        <h1>Experience</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Apr-2024 - present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Apexon</h3>
            <h4 className="vertical-timeline-element-subtitle">Engineer II</h4>
            <ul>
              <li>Leading the development and enhancement of software functionality using React.js, Next.js, Redux (Saga), and TypeScript.</li>
              <li>Implementing Server-Side Rendering (SSR) with Next.js to boost performance and SEO rankings.</li>
              <li>Enhancing code quality and error management with SonarQube and real-time monitoring using Sentry.</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Aug-2021 - Mar-2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Apexon</h3>
            <h4 className="vertical-timeline-element-subtitle">Software Engineer</h4>
            <ul>
              <li>Ensured mobile responsiveness and PWA compliance, improving user engagement.</li>
              <li>Developed and tested features using Jest and Enzyme, increasing test coverage from 60% to 80%.</li>
              <li>Assisted team members in overcoming development challenges, fostering a collaborative team environment.</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Mar-2021 - Jul-2021"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">ZinosEdge</h3>
            <h4 className="vertical-timeline-element-subtitle">Software Engineer</h4>
            <ul>
              <li>Developed reusable React components to improve application efficiency and maintainability.</li>
              <li>Collaborated with designers and backend developers to ensure seamless integration and functionality.</li>
              <li>Managed task prioritization to ensure on-time releases and successful module implementation.</li>
            </ul>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;