import { Document } from "prismic-javascript/types/documents";
import { useRouter } from "next/router";
import { GetStaticPaths, GetStaticProps } from "next";
import { client } from "@/lib/prismic";
import PrismicDOM from "prismic-dom";

import Header from "../../components/Header";
import styles from "../../styles/projectPost.module.css";
import styleFooter from "../../styles/Home.module.css";

interface ProjectsProps {
  project: Document;
}

export default function Projects({ project }: ProjectsProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <p className={styles.loadingMessage}>Carregando...</p>;
  }

  const image = project.data.thumbnail.url;
  const link = project.data.projectlink.url;
  const goToGooglePlayImg = "/google-play-badge.png";

  return (
    <div>
      <Header style={{ backgroundColor: "#30475E", width: "100%" }} />
      <div className={styles.container}>
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
          <article className={styles.articleBody}>
            <div
              dangerouslySetInnerHTML={{
                __html: PrismicDOM.RichText.asHtml(project.data.description),
              }}
            />
          </article>
          <div className={styles.linkSection}>
            {
              (project.data.category.uid =
                "mobile" && link ? (
                  <a href={link}>
                    <img
                      src={goToGooglePlayImg}
                      alt="ir para google play"
                      className={styles.googlePlay}
                    />
                  </a>
                ) : null)
            }
          </div>
        </main>
        <footer className={styleFooter.footer}>
          <p>Design & Development by Juliano Krindges</p>
        </footer>
      </div>
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
    fallback: false,
  };
};
