import React from "react";
// import Image from "next/image";

import styles from "./styles.module.css";

interface Props {
  imgSrc?: string;
  id?: string;
  Title?: string;
}

const ProjectCard = ({ imgSrc, id, Title }: Props) => {
  return (
    <div className={styles.imgContainer}>
      <img
        src={imgSrc}
        alt={Title}
        width="200px"
        height="300px"
        className={styles.img}
      />
    </div>
  );
};

export default ProjectCard;
