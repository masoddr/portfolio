import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

function Footer() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer>
      <div>
        <a href="https://github.com/masoddr" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/massylouaddour/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p>{t.footer.credit} <a href="https://github.com/yujisatojr/react-portfolio-template" target="_blank" rel="noreferrer">Yuji Sato</a></p>
    </footer>
  );
}

export default Footer;