import React from "react";
import { FiGithub, FiLinkedin, FiCodepen } from "react-icons/fi";

import SectionLayout from "../SectionLayout";

import styles from "./styles.module.css";

interface Props {}

export const MainSection = (props: Props) => {
  return (
    <SectionLayout className={styles.section}>
      <div className={styles.backgroundContainer}></div>
      <div className={styles.sectionContainer}>
        <div className={styles.leftContainer}>
          <div className={styles.textContainer}>
            <h2 className={styles.mainText}>
              <span className={styles.highlightText}>Freelancer,</span>
              <br /> Programador Web
              <br /> Mobile
              <br />
              <span className={styles.highlightText}>&</span> Web Designer
            </h2>
          </div>
          {/* <div className={styles.verticalLine}></div> */}
          <nav className={styles.navigation}>
            <div className={styles.navigationMenu}>
              <a href="#projects" className={styles.navigationItem}>
                <span>Projetos</span>
              </a>
              <a href="#contact" className={styles.navigationItem}>
                <span>Contato</span>
              </a>
            </div>
            <div className={styles.iconContainer}>
              <a href="https://github.com/KrindgesJuliano">
                <FiGithub color="white" size={30} />
              </a>
              <a href="https://www.linkedin.com/in/juliano-krindges-m-pinheiro-ab526b52/">
                <FiLinkedin color="white" size={30} />
              </a>
              <a href="#">
                <FiCodepen color="white" size={30} />
              </a>
            </div>
          </nav>
        </div>
      </div>
    </SectionLayout>
  );
};

export default MainSection;
