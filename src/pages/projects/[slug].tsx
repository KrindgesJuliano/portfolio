import { Document } from 'prismic-javascript/types/documents';
import { useRouter } from 'next/router';
import { GetStaticPaths, GetStaticProps } from 'next';
import PrismicDOM from 'prismic-dom';
import { Client } from '../../lib/prismic';
import Prismic from 'prismic-javascript';

import Header from '../../components/Header';
import styles from '../../styles/projectPost.module.css';
import styleFooter from '../../styles/Home.module.css';

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
  const goToGooglePlayImg = '/google-play-badge.png';
  const category = project.data.category;

  return (
    <div>
      <Header style={{ backgroundColor: '#30475E', width: '100%' }} />
      <div className={styles.container}>
        <main className={styles.main}>
          {image ? (
            <img
              src={image}
              alt="capa do post"
              width="100%"
              className={styles.imgCover}
            />
          ) : null}

          <h1 className={styles.title}>
            {PrismicDOM.RichText.asText(project.data.title)}
          </h1>
          <article className={`${styles.articleBody} py-8`}>
            <div
              dangerouslySetInnerHTML={{
                __html: PrismicDOM.RichText.asHtml(project.data.description),
              }}
            />
          </article>
          {category.uid == 'mobile' ? (
            <div className={styles.linkSection}>
              <a href={link}>
                <img
                  src={goToGooglePlayImg}
                  alt="ir para google play"
                  className={styles.googlePlay}
                />
              </a>
            </div>
          ) : (
            <div className={styles.linkSection}>
              <p className={`py-8 mr-2 text-lg`}>Visite o site: </p>
              <a href={link}>
                <p className={`py-8 mr-2 text-lg hover:text-red-500`}>{link}</p>
              </a>
            </div>
          )}
        </main>
        <footer className={styleFooter.footer}>
          <p>Design & Development by Juliano Krindges</p>
        </footer>
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps<ProjectsProps> = async ({
  params,
}) => {
  const { slug } = params;

  const project = await Client().getByUID('projetos', String(slug), {});

  return {
    props: {
      project,
    },
    revalidate: 1220,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const projects = await Client().query([
    Prismic.Predicates.at('document.type', 'projetos'),
  ]);

  const paths = projects.results.map((post) => ({
    params: { slug: String(post.uid) },
  }));

  return {
    paths,
    fallback: false,
  };
};
