import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython, faSpaceAwesome } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Traitement de données",
    "Modélisation",
    "Simulation",
    "Modélisation d’antennes",
    "Bilans de liaison",
    
];

const labelsSecond = [
    "Git",
    "GitHub Actions",
    "Docker",
    "Linux",
    "Pandas",
    "Selenium",
];

const labelsThird = [
    "Python",
    "Flask",
    "JavaScript",
    "HTML5",
    "CSS3",
    "PostgreSQL",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Compétences</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faSpaceAwesome} size="3x"/>
                    <h3>Ingénierie Spatiale</h3>
                    <p>Je suis un ingénieur spécialisé dans l'ingénierie spatiale, avec une expertise dans la modélisation, la simulation et l'optimisation de systèmes complexes pour le secteur spatial.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>DevOps & Automation</h3>
                    <p>Once the application is built, I help clients set up DevOps testing, CI/CD pipelines, and deployment automation to support the successful Go-Live.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Développement Web</h3>
                    <p>Expérience dans la conception et l'analyse de systèmes spatiaux. Compétences en modélisation, simulation et optimisation de systèmes complexes pour le secteur spatial.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
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