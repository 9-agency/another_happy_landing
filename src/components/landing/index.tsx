import { Font, FontType } from "fonts";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";

const animationDuration = 700;
const headerDisplayDuration = 7000;

export const LandingPage = () => {
  const [buttonClassName, setButtonClassName] = useState(
    `${styles.button} ${styles.zeroOpacity}`
  );

  const headlines = [
    "web development done right",
    "excellent piece of maintainable software",
    "delivering solid products that scale",
    "9 agency",
  ];

  const [activeHeadline, setActiveHeadline] = useState(headlines[0]);

  useEffect(() => {
    (document as any).fonts.ready.then(() => {
      setButtonClassName(`${styles.button} ${styles.fadeIn}`);

      let changeHeadlineInterval: NodeJS.Timeout;

      setTimeout(() => {
        changeHeadlineInterval = setInterval(() => {
          setButtonClassName(`${styles.button} ${styles.fadeOut}`);
          setTimeout(() => {
            setActiveHeadline((activeHeadline) => {
              const activeHeadlineIndex = headlines.indexOf(activeHeadline);
              return headlines[(activeHeadlineIndex + 1) % headlines.length];
            });
            setButtonClassName(`${styles.button} ${styles.fadeIn}`);
          }, animationDuration);
        }, headerDisplayDuration);
      }, animationDuration);

      return () => {
        clearInterval(changeHeadlineInterval);
      };
    });
  }, []);

  return (
    <div className={styles.container}>
      <a className={buttonClassName} href="mailto:hello@9.agency">
        <Font fontType={FontType.headline1}>{activeHeadline}</Font>
      </a>
    </div>
  );
};
