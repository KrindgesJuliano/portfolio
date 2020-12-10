import { FiGithub, FiLinkedin, FiCodepen } from "react-icons/fi";

import styles from "./Styles.module.css";

export default function Header() {
  return (
    <header className={styles.container}>
      <div>
        <h2 className={styles.logo}>Juliano Krindges</h2>
      </div>
      <div className={styles.iconContainer}>
        <a href="https://github.com/KrindgesJuliano">
          <FiGithub color="red" size={30} />
        </a>
        <a href="https://www.linkedin.com/in/juliano-krindges-m-pinheiro-ab526b52/">
          <FiLinkedin color="red" size={30} />
        </a>
        <a href="#">
          <FiCodepen color="red" size={30} />
        </a>
      </div>
    </header>
  );
}
