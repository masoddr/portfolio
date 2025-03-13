// Définition des types
export type Language = 'fr' | 'en';

export type TranslationType = {
  nav: {
    skills: string;
    experiences: string;
    projects: string;
    contact: string;
  };
  main: {
    title: string;
  };
  expertise: {
    title: string;
    spaceEngineering: {
      title: string;
      description: string;
    };
    devops: {
      title: string;
      description: string;
    };
    webdev: {
      title: string;
      description: string;
    };
    labels: {
      first: string[];
      second: string[];
      third: string[];
    };
  };
  timeline: {
    title: string;
    positions: Array<{
      title: string;
      company: string;
      description: string;
      date: string;
    }>;
  };
  projects: {
    title: string;
    reviseMaths: {
      title: string;
      description: string;
    };
    cinema: {
      title: string;
      description: string;
    };
  };
  contact: {
    title: string;
    subtitle: string;
    form: {
      name: {
        label: string;
        placeholder: string;
        error: string;
      };
      email: {
        label: string;
        placeholder: string;
        error: string;
      };
      message: {
        label: string;
        placeholder: string;
        error: string;
      };
      submit: string;
    };
  };
  footer: {
    credit: string;
  };
};

export type Translations = {
  [key in Language]: TranslationType;
};

// L'objet translations avec son type
export const translations: Translations = {
  fr: {
    nav: {
      skills: 'Compétences',
      experiences: 'Expériences',
      projects: 'Projets',
      contact: 'Contact'
    },
    main: {
      title: 'Ingénieur Systèmes Spatiaux | Développeur Python'
    },
    expertise: {
      title: 'Compétences',
      spaceEngineering: {
        title: 'Ingénierie Spatiale',
        description: 'Je suis un ingénieur spécialisé dans l\'ingénierie spatiale, avec une expertise dans la modélisation, la simulation et l\'optimisation de systèmes complexes pour le secteur spatial.'
      },
      devops: {
        title: 'DevOps & Automation',
        description: 'Je mets en place des pipelines CI/CD pour les applications et je configure des environnements de développement et de production.'
      },
      webdev: {
        title: 'Développement Web',
        description: 'Expérience dans la conception et l\'analyse de systèmes spatiaux. Compétences en modélisation, simulation et optimisation de systèmes complexes pour le secteur spatial.'
      },
      labels: {
        first: [
          "Traitement de données",
          "Modélisation",
          "Simulation",
          "Modélisation d'antennes",
          "Bilans de liaison",
        ],
        second: [
          "Git",
          "GitHub Actions",
          "Docker",
          "Linux",
          "Pandas",
          "Selenium",
        ],
        third: [
          "Python",
          "Flask API",
          "Vue.js",
          "PostgreSQL",
        ],
      }
    },
    timeline: {
      title: 'Expériences Professionnelles',
      positions: [
        {
          title: 'Ingénieur télécom - simulation Python',
          company: 'CNES',
          description: 'Modélisation et simulation constellation télécom\nPython (Dask, Numpy, Xarray), Linux, Git, Docker, Bilan de liaison',
          date: 'Janvier 2025'
        },
        {
          title: 'Projet QKDSIM',
          company: 'Airbus Defence and Space',
          description: 'Développement d\'un simulateur de distribution de clé quantique par satellite\nPython, Git, Linux, Télécommunications spatiales, Physique quantique, Orbitographie',
          date: 'Août 2023 - Octobre 2024'
        }
        // ... autres positions
      ]
    },
    projects: {
      title: 'Projets Personnels',
      reviseMaths: {
        title: 'Revise tes maths',
        description: 'Application de révision des mathématiques avec une interface utilisateur simple et intuitive. Stack technique : Vue.js, Flask, PostgreSQL. Déployée sur un VPS avec Docker, CI/CD via GitHub Actions pour les tests et le déploiement automatique.'
      },
      cinema: {
        title: 'Cinémas Toulouse (En cours)',
        description: 'Site web en cours de développement qui centralisera la programmation de tous les cinémas de Toulouse. Stack technique : Vue.js, Flask (API & scraping), PostgreSQL. Infrastructure : Docker, VPS, CI/CD GitHub Actions pour l\'intégration et le déploiement continu.'
      }
    },
    contact: {
      title: 'Contactez-moi',
      subtitle: 'Vous avez un projet à réaliser ? Contactez-moi pour collaborer et le réaliser ensemble !',
      form: {
        name: {
          label: 'Votre Nom',
          placeholder: 'Quel est votre nom ?',
          error: 'Veuillez entrer votre nom'
        },
        email: {
          label: 'Email / Téléphone',
          placeholder: 'Comment puis-je vous contacter ?',
          error: 'Veuillez entrer votre email ou votre numéro de téléphone'
        },
        message: {
          label: 'Message',
          placeholder: 'Envoyez-moi toute demande ou question',
          error: 'Veuillez entrer votre message'
        },
        submit: 'Envoyer'
      }
    },
    footer: {
      credit: 'Inspiré par le portfolio de'
    }
  },
  en: {
    nav: {
      skills: 'Skills',
      experiences: 'Experiences',
      projects: 'Projects',
      contact: 'Contact'
    },
    main: {
      title: 'Space Systems Engineer | Python Developer'
    },
    expertise: {
      title: 'Skills',
      spaceEngineering: {
        title: 'Space Engineering',
        description: 'I am an engineer specialized in space engineering, with expertise in modeling, simulation and optimization of complex systems for the space sector.'
      },
      devops: {
        title: 'DevOps & Automation',
        description: 'I set up CI/CD pipelines for applications and configure development and production environments.'
      },
      webdev: {
        title: 'Web Development',
        description: 'Experience in designing and analyzing space systems. Skills in modeling, simulation and optimization of complex systems for the space sector.'
      },
      labels: {
        first: [
          "Data Processing",
          "Modeling",
          "Simulation",
          "Antenna Modeling",
          "Link Budget",
        ],
        second: [
          "Git",
          "GitHub Actions",
          "Docker",
          "Linux",
          "Pandas",
          "Selenium",
        ],
        third: [
          "Python",
          "Flask API",
          "Vue.js",
          "PostgreSQL",
        ],
      }
    },
    timeline: {
      title: 'Professional Experience',
      positions: [
        {
          title: 'Telecom Engineer - Python Simulation',
          company: 'CNES',
          description: 'Telecom constellation modeling and simulation\nPython (Dask, Numpy, Xarray), Linux, Git, Docker, Link Budget',
          date: 'January 2025'
        },
        {
          title: 'QKDSIM Project',
          company: 'Airbus Defence and Space',
          description: 'Development of a satellite quantum key distribution simulator\nPython, Git, Linux, Space Telecommunications, Quantum Physics, Orbital Mechanics',
          date: 'August 2023 - October 2024'
        }
        // ... other positions
      ]
    },
    projects: {
      title: 'Personal Projects',
      reviseMaths: {
        title: 'Practice your maths',
        description: 'Mathematics revision application with a simple and intuitive user interface. Tech stack: Vue.js, Flask, PostgreSQL. Deployed on a VPS with Docker, CI/CD through GitHub Actions for automated testing and deployment.'
      },
      cinema: {
        title: 'Toulouse Cinemas (In progress)',
        description: 'Website under development that will centralize the programming of all cinemas in Toulouse. Tech stack: Vue.js, Flask (API & scraping), PostgreSQL. Infrastructure: Docker, VPS, CI/CD GitHub Actions for continuous integration and deployment.'
      }
    },
    contact: {
      title: 'Contact Me',
      subtitle: 'Do you have a project in mind? Contact me to collaborate and make it happen together!',
      form: {
        name: {
          label: 'Your Name',
          placeholder: 'What is your name?',
          error: 'Please enter your name'
        },
        email: {
          label: 'Email / Phone',
          placeholder: 'How can I contact you?',
          error: 'Please enter your email or phone number'
        },
        message: {
          label: 'Message',
          placeholder: 'Send me any request or question',
          error: 'Please enter your message'
        },
        submit: 'Send'
      }
    },
    footer: {
      credit: 'Inspired by'
    }
  }
}; 