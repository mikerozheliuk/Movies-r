import { Movie } from "../Movie/Movie";

import styles from "./Movies.module.scss";

export function Movies(props) {
  const { movies = [] } = props;

  return (
    <div className={styles.movies}>
      {movies.length ? (
        movies.map((movie) => <Movie key={movie.imdbID} {...movie} />)
      ) : (
        <h4>Введіть коректний запит</h4>
      )}
    </div>
  );
}
