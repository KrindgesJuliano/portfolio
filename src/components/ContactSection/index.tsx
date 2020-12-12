import React, { useState } from "react";
import SectionLayout from "../SectionLayout";

import styles from "./styles.module.css";

interface Props {}

const ContactSection = (props: Props) => {
  return (
    <SectionLayout className={styles.section}>
      <div className={styles.sectionContainer}>
        <h2>Entre em contato</h2>
        <div>
          <form name="contact" method="POST" data-netlify="true">
            <p>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" />
            </p>
            <p>
              <label htmlFor="email">Email</label>
              <input type="text" id="email" name="email" />
            </p>
            <p>
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message"></textarea>
            </p>
            <p>
              <button type="submit">Send</button>
            </p>
          </form>
        </div>
      </div>
    </SectionLayout>
  );
};

export default ContactSection;
