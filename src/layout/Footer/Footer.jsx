import styles from "./footer.module.scss";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__text}>2024 Copyright Text</div>
      <div className={styles.repo}>Repo</div>
    </footer>
  );
}
