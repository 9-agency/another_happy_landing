import { Font, FontType } from "fonts";
import styles from "./styles.module.css";

const mail = "hello@9.agency";

export const Contact = () => (
  <div className={styles.container}>
    <Font fontType={FontType.body1}>Let's talk</Font>
    <a className={styles.button} href={`mailto:${mail}`}>
      <Font fontType={FontType.headline1}>{mail}</Font>
    </a>
  </div>
);
