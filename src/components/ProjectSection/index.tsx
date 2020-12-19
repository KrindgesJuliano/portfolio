import React from "react";
import { client } from "@/lib/prismic";
import Prismic from "prismic-javascript";
import { Document } from "prismic-javascript/types/documents";
import { GetServerSideProps, GetStaticProps } from "next";
import PrismicDOM from "prismic-dom";
import { FiChevronRight } from "react-icons/fi";
import Link from "next/link";

import styles from "./styles.module.css";
import SectionLayout from "../SectionLayout";
import ProjectCard from "../ProjectCard";

interface Props {
  projects: Document[];
}

export const ProjectSection = ({ projects }: Props) => {
  // console.log(projects);
  return (
    <SectionLayout className={styles.section}>
      <div className={styles.background} id="projects">
        <div className={styles.backgroundGeometry}></div>
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>Projetos</h2>
          <div className={styles.projectsGrid}>
            {projects.map((projects) => {
              return (
                <div key={projects.id}>
                  <Link href={`/projects/${projects.uid}`}>
                    <a>
                      <ProjectCard imgSrc={projects.data.Thumbnail} />
                    </a>
                  </Link>
                </div>
              );
            })}
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

export const getStaticProps: GetServerSideProps<Props> = async () => {
  const projects = await client().query([
    Prismic.Predicates.at("document.type", "projetos"),
  ]);

  console.log(projects.results[0].data);

  return {
    props: {
      projects: projects.results,
    },
  };
};

export default ProjectSection;
