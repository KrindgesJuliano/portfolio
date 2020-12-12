import React from "react";
import Image from "next/image";

import styles from "./styles.module.css";

interface Props {
  imgSrc?: string;
}

const ProjectCard = ({ imgSrc }: Props) => {
  return (
    <a href="#" className={styles.link}>
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <Image
            src={imgSrc}
            layout="fill"
            objectFit="cover"
            loading="lazy"
            className={styles.img}
          />
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
