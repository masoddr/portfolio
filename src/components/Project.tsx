import React from "react";
import revise from '../assets/images/revise-tes-maths.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Projets Personnels</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://www.revise-tes-maths.fr/" target="_blank" rel="noreferrer"><img src={revise} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.revise-tes-maths.fr/" target="_blank" rel="noreferrer"><h2>Revise tes maths</h2></a>
                <p>Développement d'une application de révision des mathématiques avec une interface utilisateur simple et intuitive, utilisant Vue.js et Flask.</p>
            </div>
            
        </div>
    </div>
    );
}

export default Project;