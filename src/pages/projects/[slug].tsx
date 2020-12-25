import { Document } from "prismic-javascript/types/documents";
import { useRouter } from "next/router";
import { GetStaticPaths, GetStaticProps } from "next";
import { client } from "@/lib/prismic";
import PrismicDOM from "prismic-dom";

import Header from "../../components/Header";
import styles from "../../../styles/projectPost.module.css";
import styleFooter from "../../../styles/Home.module.css";

interface ProjectsProps {
  project: Document;
}

const Elements = PrismicDOM.RichText.Elements;

const htmlSerializer = function (type, element, content, children) {
  switch (type) {
    // Add a class to paragraph elements
    case Elements.paragraph:
      return '<p class="paragraph-class">' + children.join("") + "</p>";

    // Don't wrap images in a <p> tag
    case Elements.image:
      return '<img src="' + element.url + '" alt="' + element.alt + '">';

    // Return null to stick with the default behavior
    default:
      return null;
  }
};

export default function Projects({ project }: ProjectsProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <p className={styles.loadingMessage}>Carregando...</p>;
  }

  const image = project.data.thumbnail.url;
  const link = project.data.projectlink.url;
  const goToGooglePlayImg = "/google-play-badge.png";

  const linkResolver = function (doc) {
    return doc.tags;
  };

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
        <article className={styles.articleBody}>
          {PrismicDOM.RichText.asHtml(
            project.data.description,
            linkResolver,
            htmlSerializer
          )}
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
  );
}

export const getStaticProps: GetStaticProps<ProjectsProps> = async (
  context
) => {
  const { slug } = context.params;

  const project = await client().getByUID("projetos", String(slug), {});
  console.log(project);

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
