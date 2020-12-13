import styles from "../../styles/Home.module.css";

import Header from "../components/Header";
import MainSection from "../components/MainSection";
import ProjectSection from "@/components/ProjectSection";
import SEO from "../components/SEO";
import ContactSection from "@/components/ContactSection";

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
        <ProjectSection />
        <ContactSection />
      </main>

      <footer className={styles.footer}>
        <p>Design & Development by Juliano Krindges</p>
      </footer>
    </div>
  );
}
