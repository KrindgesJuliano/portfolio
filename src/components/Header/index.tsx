import { FiGithub, FiLinkedin, FiCodepen } from "react-icons/fi";

import styles from "./Styles.module.css";

export default function Header() {
  return (
    <header className={styles.container}>
      <div>
        <h2 className={styles.logo}>Juliano Krindges</h2>
      </div>
      <div className={styles.iconContainer}>
        <FiGithub color="red" size={30} />
        <FiLinkedin color="red" size={30} />
        <FiCodepen color="red" size={30} />
      </div>
    </header>
  );
}
