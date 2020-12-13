import { Spacer, SpaceValue } from "components/spacer";
import { Font, FontType } from "fonts";
import React from "react";
import styles from "./styles.module.css";

const onContactClick = () => {
  window.location.href = "mailto:hello@9.agency";
};

const LandingPage = () => (
  <div className={styles.container}>
    <div className={styles.content_container}>
      <Font fontType={FontType.headline1}>web development and design</Font>
      <Spacer v={SpaceValue.m}></Spacer>
      <button className={styles.button} onClick={onContactClick}>
        <Font fontType={FontType.body1}>say hello</Font>
      </button>
    </div>
  </div>
);

export default LandingPage;
