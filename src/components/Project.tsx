import React from "react";
import revise from '../assets/images/revise-tes-maths.png';
import cinema from '../assets/images/cinema.png';

import '../assets/styles/Project.scss';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

function Project() {
    const { language } = useLanguage();
    const t = translations[language];

    return(
    <div className="projects-container" id="projects">
        <h1>{t.projects.title}</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://www.revise-tes-maths.fr/" target="_blank" rel="noreferrer">
                    <img src={revise} className="zoom" alt="thumbnail" width="100%"/>
                </a>
                <a href="https://www.revise-tes-maths.fr/" target="_blank" rel="noreferrer">
                    <h2>{t.projects.reviseMaths.title}</h2>
                </a>
                <p>{t.projects.reviseMaths.description}</p>
            </div>

            <div className="project">
                <a href="https://cinema-toulouse.fr" target="_blank" rel="noreferrer">
                    <img src={cinema} className="zoom" alt="thumbnail" width="100%"/>
                </a>
                <a href="https://cinema-toulouse.fr" target="_blank" rel="noreferrer">
                    <h2>{t.projects.cinema.title}</h2>
                </a>
                <p>{t.projects.cinema.description}</p>
            </div>
        </div>
    </div>
    );
}

export default Project;