import styles from "./header.module.scss";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header__logo}>Movies</div>
      <div className={styles.header__repo}>Repo</div>
    </header>
  );
}
