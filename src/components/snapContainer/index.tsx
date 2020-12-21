import styles from "./styles.module.css";

export const SnapContainer = ({ children }: { [x: string]: any }) => {
	return <div className={styles.snapContainer}>{children}</div>;
};

export const SnapItem = ({ children }: { [x: string]: any }) => {
	return <div className={styles.snapItem}>{children}</div>;
};
