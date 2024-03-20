import styles from "./Movie.module.scss";

export function Movie(props) {
  const { Title: title, Year: year, imdbID: id, Type: type, Poster: poster } = props;

  return (
    <div id={id} className={styles.cart}>
      <div className={styles.cart__image}>
        <img src={poster} alt="image" />
      </div>
      <div className={styles.cart__content}>
        <div className={styles.cart__title}>{title}</div>

        <div className={styles.cart__info}>
          <div className={styles.cart__year}>{year}</div>

          <div className={styles.cart__type}>{type}</div>
        </div>
      </div>
    </div>
  );
}
