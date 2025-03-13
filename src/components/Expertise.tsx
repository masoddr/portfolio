import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython, faSpaceAwesome } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

function Expertise() {
    const { language } = useLanguage();
    const t = translations[language];

    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>{t.expertise.title}</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faSpaceAwesome} size="3x"/>
                    <h3>{t.expertise.spaceEngineering.title}</h3>
                    <p>{t.expertise.spaceEngineering.description}</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {t.expertise.labels.first.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>{t.expertise.devops.title}</h3>
                    <p>{t.expertise.devops.description}</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {t.expertise.labels.second.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>{t.expertise.webdev.title}</h3>
                    <p>{t.expertise.webdev.description}</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {t.expertise.labels.third.map((label, index) => (
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