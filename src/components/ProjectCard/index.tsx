import React from "react";
// import Image from "next/image";

import styles from "./styles.module.css";

interface Props {
  imgSrc?: string;
}

const ProjectCard = ({ imgSrc }: Props) => {
  return (
    <a href="#" className={styles.link}>
      <div className={styles.imgContainer}>
        <img
          src={require("../../../public/home_hero.jpg")}
          alt="código java script"
          width="500px"
          className={styles.img}
        />
      </div>
    </a>
  );
};

export default ProjectCard;
