import styles from "./spinner.module.scss";

export function Spinner() {
  return (
    <div className={styles.loader}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}
