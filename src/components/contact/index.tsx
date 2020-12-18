import { Label } from "components/Label";
import styles from "./styles.module.css";

const mail = "hello@9.agency";

export const Contact = () => (
  <div className={styles.container}>
    <Label font="body1">Let's talk</Label>
    <a href={`mailto:${mail}`}>
      <Label className={`${styles.headline} scaleUpOnHover`} font="headline1">
        {mail}
      </Label>
    </a>
  </div>
);
