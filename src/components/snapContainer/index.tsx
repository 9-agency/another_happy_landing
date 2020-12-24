import { useEffect, useState } from "react";
import styles from "./styles.module.css";

export const SnapContainer = ({ children }: { children?: React.ReactNode }) => {
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    setHeight(window.innerHeight);
  }, []);

  return (
    <div className={styles.snapContainer} style={{ height }}>
      {children}
    </div>
  );
};

export const SnapItem = ({ children }: { children?: React.ReactNode }) => {
  return <div className={styles.snapItem}>{children}</div>;
};
