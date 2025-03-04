import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Expériences Professionnelles</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Janvier 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Ingénieur télécom - simulation Python</h3>
            <h4 className="vertical-timeline-element-subtitle">CNES</h4>
            <p>
              Modélisation et simulation constellation télécom<br/>
              Python (Dask, Numpy, Xarray), Linux, Git, Docker, Bilan de liaison
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Août 2023 - Octobre 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Projet QKDSIM</h3>
            <h4 className="vertical-timeline-element-subtitle">Airbus Defence and Space</h4>
            <p>
              Développement d'un simulateur de distribution de clé quantique par satellite<br/>
              Python, Git, Linux, Télécommunications spatiales, Physique quantique, Orbitographie
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Novembre 2022 - Juillet 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Ingénieur Satcom</h3>
            <h4 className="vertical-timeline-element-subtitle">CNES</h4>
            <p>
              Support technique plateforme CESARS<br/>
              Tests de performances antennes et modules IoT, Scripts Python & Bash
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Février 2022 - Novembre 2022"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Développeur logiciel</h3>
            <h4 className="vertical-timeline-element-subtitle">DGA Techniques Aéronautiques</h4>
            <p>
              Développement d'outils pour essais CEM et Foudre<br/>
              Java, Git, PostgreSQL
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Novembre 2021 - Février 2022"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Développeur logiciel</h3>
            <h4 className="vertical-timeline-element-subtitle">CNES</h4>
            <p>
              Transcription Scilab en VBA pour calculs d'électromagnétisme<br/>
              VBA, Scilab, Excel
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;