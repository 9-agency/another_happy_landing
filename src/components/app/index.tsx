import React from "react";
import { LandingPage } from "components/landing";
import styles from "./styles.module.css";

export const App = () => (
  <div className={styles.main_container}>
    <LandingPage></LandingPage>
  </div>
);
