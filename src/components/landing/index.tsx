import { Font, FontType } from "fonts";
import React, { useCallback, useEffect, useState } from "react";
import styles from "./styles.module.css";

const animationDuration = 700;
const headlineDisplayDuration = 7000;

const headlines = [
  "web development done right",
  "excellent piece of maintainable software",
  "delivering products that scale",
  "making great apps with you",
];

export const LandingPage = () => {
  const [activeHeadline, setActiveHeadline] = useState(headlines[0]);

  const [buttonClassName, setButtonClassName] = useState(
    `${styles.button} ${styles.zeroOpacity}`
  );

  const fadeHeadlineIn = useCallback(() => {
    setButtonClassName(`${styles.button} ${styles.fadeIn}`);
  }, []);

  const fadeHeadlineOut = useCallback(() => {
    setButtonClassName(`${styles.button} ${styles.fadeOut}`);
  }, []);

  const changeHeadline = useCallback(() => {
    fadeHeadlineOut();
    setTimeout(() => {
      setActiveHeadline((activeHeadline) => {
        const activeHeadlineIndex = headlines.indexOf(activeHeadline);
        return headlines[(activeHeadlineIndex + 1) % headlines.length];
      });
      fadeHeadlineIn();
    }, animationDuration);
  }, [fadeHeadlineIn, fadeHeadlineOut]);

  useEffect(() => {
    (document as any).fonts.ready.then(() => {
      let changeHeadlineInterval: NodeJS.Timeout;

      fadeHeadlineIn();
      setTimeout(() => {
        changeHeadlineInterval = setInterval(
          changeHeadline,
          headlineDisplayDuration + 2 * animationDuration
        );
      }, animationDuration);

      return () => {
        clearInterval(changeHeadlineInterval);
      };
    });
  }, [fadeHeadlineIn, changeHeadline]);

  return (
    <div className={styles.container}>
      <a className={buttonClassName} href="mailto:hello@9.agency">
        <Font fontType={FontType.headline1}>{activeHeadline}</Font>
      </a>
    </div>
  );
};
