import { FiGithub, FiLinkedin, FiCodepen } from "react-icons/fi";
import Link from "next/link";

import styles from "./Styles.module.css";

interface Props {
  style?: React.CSSProperties;
  className?: string;
}

export default function Header({ style: userStyles = {}, className }: Props) {
  const classNames = [styles.header, className].join(" ").trim();
  return (
    <header style={userStyles} className={classNames}>
      <div className={styles.container}>
          <h2 className={`${styles.logo} flex justify-center `}>
            <Link href={`/`}>
              <a className={`${styles.linkLogo} self-center text-2xl hover:text-white`}>Juliano Krindges</a>
            </Link>
          </h2>
        <div className={styles.iconContainer}>
          <a href="https://github.com/KrindgesJuliano">
            <FiGithub color="white" size={30} />
          </a>
          <a href="https://www.linkedin.com/in/juliano-krindges-m-pinheiro-ab526b52/">
            <FiLinkedin color="white" size={30} />
          </a>
          <a href="https://codepen.io/Falt">
            <FiCodepen color="white" className={`hover:text-red`} size={30} />
          </a>
        </div>
      </div>
    </header>
  );
}
