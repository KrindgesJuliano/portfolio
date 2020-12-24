import { FiGithub, FiLinkedin, FiCodepen } from "react-icons/fi";

import styles from "./Styles.module.css";

interface Props {
  style?: React.CSSProperties;
  className?: string;
}

export default function Header({ style: userStyles = {}, className }: Props) {
  const classNames = [styles.section, className].join(" ").trim();
  return (
    <header style={userStyles} className={classNames}>
      <div className={styles.container}>
        <div>
          <h2 className={styles.logo}>Juliano Krindges</h2>
        </div>
        <div className={styles.iconContainer}>
          <a href="https://github.com/KrindgesJuliano">
            <FiGithub color="white" size={30} />
          </a>
          <a href="https://www.linkedin.com/in/juliano-krindges-m-pinheiro-ab526b52/">
            <FiLinkedin color="white" size={30} />
          </a>
          <a href="https://codepen.io/Falt">
            <FiCodepen color="white" size={30} />
          </a>
        </div>
      </div>
    </header>
  );
}
