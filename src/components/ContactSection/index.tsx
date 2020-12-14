import React, { useState } from "react";
import SectionLayout from "../SectionLayout";

import { FiArrowRight, FiPhone, FiMail, FiMapPin } from "react-icons/fi";

import styles from "./styles.module.css";

interface Props {}

const ContactSection = (props: Props) => {
  return (
    <SectionLayout className={styles.section}>
      <div className={styles.sectionContainer} id="contact">
        <h2 className={styles.sectionTitle}>Entre em contato</h2>
        <div className={styles.contactContainer}>
          <div className={styles.formContainer}>
            <form name="contact" method="POST" data-netlify="true">
              <p>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Nome"
                  className={styles.formInput}
                />
              </p>
              <p>
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="e-mail"
                  className={styles.formInput}
                />
              </p>
              <p>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Mensagem"
                  rows={10}
                  cols={30}
                  className={styles.formInputMsg}
                ></textarea>
              </p>
              <p>
                <button type="submit" className={styles.submitButton}>
                  Enviar Mensagem <FiArrowRight />
                </button>
              </p>
              <input type="hidden" name="form-contact" value="contact" />
            </form>
          </div>
          <div className={styles.contactInfo}>
            <p>
              <FiMail size={18} style={{ margin: 10 }} />
              julianokrindges@gmail.com
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
