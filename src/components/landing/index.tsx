import { Font, FontType } from "fonts";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";

export const LandingPage = () => {
  const [buttonClassName, setButtonClassName] = useState(styles.button);

  useEffect(() => {
    (document as any).fonts.ready.then(() => {
      setButtonClassName((className) => `${className} ${styles.fadeIn}`);
    });
  }, []);

  return (
    <div className={styles.container}>
      <button
        className={buttonClassName}
        onClick={() => (window.location.href = "mailto:hello@9.agency")}
      >
        <Font fontType={FontType.headline1}>web design and development</Font>
      </button>
    </div>
  );
};
