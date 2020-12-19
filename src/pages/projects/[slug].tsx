import { Document } from "prismic-javascript/types/documents";
import { useRouter } from "next/router";
import { GetStaticPaths, GetStaticProps } from "next";
import { client } from "@/lib/prismic";
import PrismicDOM from "prismic-dom";

interface ProjectsProps {
  projects: Document;
}

export default function Projects({ projects }: ProjectsProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <p>Carregando...</p>;
  }

  return (
    <div>
      <h1>{PrismicDOM.RichText.asText(projects.data.title)}</h1>
    </div>
  );
}

export const getStaticProps: GetStaticProps<ProjectsProps> = async (
  context
) => {
  const { slug } = context.params;

  const projects = await client().getByUID("Projects", String(slug), {});

  return {
    props: {
      projects,
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
