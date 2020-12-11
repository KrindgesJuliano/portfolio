// import React from "react";
import Image from "next/image";

import SectionLayout from "../SectionLayout";

import styles from "./styles.module.css";

interface Props {}

export const MainSection = (props: Props) => {
  return (
    <SectionLayout className={styles.section}>
      <svg width="0" height="0">
        <defs>
          <clipPath id="svgPath">
            <path
              fill="#FFFFFF"
              stroke="#000000"
              stroke-width="1.5794"
              stroke-miterlimit="10"
              d="M271.38 0H688.508V840H178.626L23.8596 629.395C-10.5918 590.179 
              -1.58135 549.51 12.7292 518.04C27.0398 486.571 271.38 0 271.38 0Z"
            />
          </clipPath>
        </defs>
      </svg>
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
          <div className={styles.verticalLine}></div>
          <nav className={styles.navigationMenu}>
            <a href="#" className={styles.navigationItem}>
              Projetos
            </a>
            <a href="#" className={styles.navigationItem}>
              Contato
            </a>
          </nav>
        </div>
        <div className={styles.imageHeroContainer}>
          <Image
            src="/home_hero.jpg"
            alt="código java script"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </SectionLayout>
  );
};

export default MainSection;