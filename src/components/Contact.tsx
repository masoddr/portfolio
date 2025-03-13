import React, { useRef, useState } from 'react';
import '../assets/styles/Contact.scss';
// import emailjs from '@emailjs/browser';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

function Contact() {
  const { language } = useLanguage();
  const t = translations[language];

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const form = useRef();

  const sendEmail = (e: any) => {
    e.preventDefault();

    setNameError(name === '');
    setEmailError(email === '');
    setMessageError(message === '');

    /* Uncomment below if you want to enable the emailJS */

    // if (name !== '' && email !== '' && message !== '') {
    //   var templateParams = {
    //     name: name,
    //     email: email,
    //     message: message
    //   };

    //   console.log(templateParams);
    //   emailjs.send('service_id', 'template_id', templateParams, 'api_key').then(
    //     (response) => {
    //       console.log('SUCCESS!', response.status, response.text);
    //     },
    //     (error) => {
    //       console.log('FAILED...', error);
    //     },
    //   );
    //   setName('');
    //   setEmail('');
    //   setMessage('');
    // }
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>{t.contact.title}</h1>
          <p>{t.contact.subtitle}</p>
          <Box
            ref={form}
            component="form"
            noValidate
            autoComplete="off"
            className='contact-form'
          >
            <div className='form-flex'>
              <TextField
                required
                id="outlined-required"
                label={t.contact.form.name.label}
                placeholder={t.contact.form.name.placeholder}
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                error={nameError}
                helperText={nameError ? t.contact.form.name.error : ""}
              />
              <TextField
                required
                id="outlined-required"
                label={t.contact.form.email.label}
                placeholder={t.contact.form.email.placeholder}
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                error={emailError}
                helperText={emailError ? t.contact.form.email.error : ""}
              />
            </div>
            <TextField
              required
              id="outlined-multiline-static"
              label={t.contact.form.message.label}
              placeholder={t.contact.form.message.placeholder}
              multiline
              rows={10}
              className="body-form"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              error={messageError}
              helperText={messageError ? t.contact.form.message.error : ""}
            />
            <Button variant="contained" endIcon={<SendIcon />} onClick={sendEmail}>
              {t.contact.form.submit}
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;