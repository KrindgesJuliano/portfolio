import { Document } from "prismic-javascript/types/documents";
import { useRouter } from "next/router";
import { GetStaticPaths, GetStaticProps } from "next";
import { client } from "@/lib/prismic";
import PrismicDOM from "prismic-dom";

import Header from "../../components/Header";
import styles from "../../../styles/projectPost.module.css";

interface ProjectsProps {
  project: Document;
}

export default function Projects({ project }: ProjectsProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <p>Carregando...</p>;
  }

  const image = project.data.thumbnail.url;

  return (
    <div className={styles.container}>
      <Header style={{ backgroundColor: "#30475E" }} />
      <main className={styles.main}>
        <img
          src={image}
          alt="capa do post"
          width="100%"
          className={styles.imgCover}
        />
        <h1 className={styles.title}>
          {PrismicDOM.RichText.asText(project.data.title)}
        </h1>
        <article>
          {PrismicDOM.RichText.asText(project.data.description)}
        </article>
      </main>
    </div>
  );
}

export const getStaticProps: GetStaticProps<ProjectsProps> = async (
  context
) => {
  const { slug } = context.params;

  const project = await client().getByUID("projetos", String(slug), {});

  return {
    props: {
      project,
    },
    revalidate: 1220,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};
