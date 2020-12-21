import ContactSection from "@/components/ContactSection";
import { GetServerSideProps, GetStaticProps } from "next";
import { client } from "@/lib/prismic";
import Prismic from "prismic-javascript";
import { Document } from "prismic-javascript/types/documents";

import Header from "../components/Header";
import MainSection from "../components/MainSection";
import ProjectSection from "@/components/ProjectSection";
import SEO from "../components/SEO";

import styles from "../../styles/Home.module.css";

interface Props {
  projects: Document[];
}

export default function Home({ projects }: Props) {
  return (
    <div className={styles.container}>
      <SEO
        title="Juliano Krindges"
        description="Freelancer Web Developer"
        shouldExcludeTitleSuffix
        image="Screenshot_3.png"
      ></SEO>
      <Header />
      <main className={styles.main}>
        <MainSection />
        <ProjectSection projects={projects} />
        <ContactSection />
      </main>

      <footer className={styles.footer}>
        <p>Design & Development by Juliano Krindges</p>
      </footer>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const projects = await client().query([
    Prismic.Predicates.at("document.type", "projetos"),
  ]);

  console.log(projects);

  return {
    props: {
      projects: projects ? projects.results : [],
    },
  };
};
