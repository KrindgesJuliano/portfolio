import React from "react";

import style from "./styles.module.css";

interface Props {
  children: React.ReactNode;
  style?: object;
  className?: object;
}

export const SectionLayout = ({
  children,
  style: userStyles = {},
  className,
}: Props) => {
  const classNames = [style.section, className].join(" ").trim(); //
  return (
    <section style={userStyles} className={classNames}>
      {children}
    </section>
  );
};

export default SectionLayout;
