import React from "react";
import { FiChevronRight } from "react-icons/fi";

import styles from "./styles.module.css";
import SectionLayout from "../SectionLayout";

interface Props {}

export const ProjectSection = (props: Props) => {
  return (
    <SectionLayout className={styles.section}>
      <div className={styles.background}>
        <div className={styles.backgroundGeometry}></div>
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>Projetos</h2>
          <div className={styles.projectsGrid}>
            <div
              style={{
                width: "100%",
                height: "100%",
                border: "1px solid red",
              }}
            ></div>
            <div
              style={{
                width: "100%",
                height: "100%",
                border: "1px solid red",
                background: "black",
              }}
            ></div>
            <div
              style={{
                width: "100%",
                height: "100%",
                border: "1px solid red",
              }}
            ></div>
            <div
              style={{
                width: "100%",
                height: "100%",
                border: "1px solid red",
              }}
            ></div>
          </div>
          <div className={styles.seeMore}>
            <a href="#">Veja Mais</a>
            <FiChevronRight size={24} color="#F05454" />
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};

export default ProjectSection;
