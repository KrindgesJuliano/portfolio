import styles from "../../styles/Home.module.css";

import Header from "../components/Header";
import MainSection from "../components/MainSection";
import SEO from "../components/SEO";

export default function Home() {
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

        <section>Project section</section>
        <section>work section</section>
        <section>contact section</section>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
