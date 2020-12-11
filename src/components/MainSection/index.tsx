// import React from "react";
import Image from "next/image";

import SectionLayout from "../SectionLayout";

import styles from "./styles.module.css";

interface Props {}

export const MainSection = (props: Props) => {
  return (
    <SectionLayout className={styles.section}>
      <div className={styles.sectionContainer}>
        <div className={styles.leftContainer}>
          <div className={styles.textContainer}>
            <h2>
              Freelancer,
              <br /> Programador Web
            </h2>
            <p>Mobile</p>
            <p>& Web Designer</p>
          </div>
        </div>
        <div className={styles.imageHeroContainer}>
          <Image
            src="/home_hero.jpg"
            alt="codigo java script"
            // width={1500}
            // height={900}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </SectionLayout>
  );
};

export default MainSection;
