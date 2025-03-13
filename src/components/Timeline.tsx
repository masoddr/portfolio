import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

function Timeline() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div id="history">
      <div className="items-container">
        <h1>{t.timeline.title}</h1>
        <VerticalTimeline>
          {t.timeline.positions.map((position, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              contentStyle={{ background: index === 0 ? 'white' : undefined, color: 'rgb(39, 40, 34)' }}
              contentArrowStyle={{ borderRight: '7px solid  white' }}
              date={position.date}
              iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
              icon={<FontAwesomeIcon icon={faBriefcase} />}
            >
              <h3 className="vertical-timeline-element-title">{position.title}</h3>
              <h4 className="vertical-timeline-element-subtitle">{position.company}</h4>
              <p>{position.description}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;