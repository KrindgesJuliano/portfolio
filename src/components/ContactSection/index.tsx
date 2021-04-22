import React, { useState, useReducer } from 'react';
import SectionLayout from '../SectionLayout';

import { FiArrowRight, FiPhone, FiMail, FiMapPin } from 'react-icons/fi';

import styles from './styles.module.css';

interface Props {}

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

const formReducer = (state, event) => {
  return {
    ...state,
    [event.target.name]: event.target.value,
  };
};

const ContactSection = (props: Props) => {
  const [formData, setFormData] = useReducer(formReducer, {});
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', formData }),
    })
      .then(() => setSuccess(true))
      .catch((error) => console.log(error));

    e.preventDefault();
  };

  return (
    <SectionLayout className={styles.section}>
      <div className={styles.sectionContainer} id="contact">
        <h2 className={styles.sectionTitle}>Entre em contato</h2>
        <div className={styles.contactContainer}>
          <div className={styles.formContainer}>
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className={`w-96 my-auto`}
            >
              <p className="hidden">
                <label>
                  Don’t fill this out if you’re human:{' '}
                  <input name="bot-field" />
                </label>
              </p>
              <input type="hidden" name="form-contact" value="contact" />
              <p className={`w-full`}>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Nome"
                  onChange={setFormData}
                  className={`${styles.formInput}`}
                />
              </p>
              <p>
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="e-mail"
                  onChange={setFormData}
                  className={`${styles.formInput}`}
                />
              </p>
              <p>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Mensagem"
                  rows={10}
                  cols={30}
                  onChange={setFormData}
                  className={`${styles.formInputMsg} `}
                ></textarea>
              </p>
              <p>
                <button type="submit" className={`${styles.submitButton} mt-4`}>
                  Enviar Mensagem <FiArrowRight />
                </button>
              </p>
              {success && (
                <p className={`text-green-600 text-center`}>
                  Mensagem enviada com sucesso
                </p>
              )}
            </form>
          </div>
          <div className={styles.contactInfo}>
            <p>
              <FiMail size={18} style={{ margin: 10 }} />
              contato@julianokrindges.tech
            </p>
            <p>
              <FiPhone size={18} style={{ margin: 10 }} />
              (65) 99669-2637
            </p>
            <p>
              <FiMapPin size={18} style={{ margin: 10 }} />
              Lucas do Rio Verde - MT
            </p>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};

export default ContactSection;
