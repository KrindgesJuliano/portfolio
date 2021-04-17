import React from "react";
import { Document } from "prismic-javascript/types/documents";

import { FiChevronRight } from "react-icons/fi";
import Link from "next/link";

import styles from "./styles.module.css";
import SectionLayout from "../SectionLayout";
import ProjectCard from "../ProjectCard";

interface Props {
  projects: Document[];
}

export const ProjectSection = ({ projects }: Props) => {
  return (
    <SectionLayout className={styles.section}>
      <div className={styles.background} id="projects">
        <div className={styles.backgroundGeometry}></div>
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>Projetos</h2>
          <div className={styles.projectsGrid}>
            {projects.map((projects) => {
              const slug = projects.uid
              return (
                <div key={projects.id}>
                  <Link as={`/projects/${slug}`} href="/projects/[slug]">
                    <a>
                      <ProjectCard
                        imgSrc={projects.data.thumbnail.preview.url}
                      />
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

export default ProjectSection;
