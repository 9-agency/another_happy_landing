import { Font, FontType } from "fonts";
import React from "react";
import styles from "./styles.module.css";

const LandingPage = () => (
  <div className={styles.container}>
    <button
      className={styles.button}
      onClick={() => (window.location.href = "mailto:hello@9.agency")}
    >
      <Font fontType={FontType.headline1}>web design and development</Font>
    </button>
  </div>
);

export default LandingPage;
