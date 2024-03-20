import { useEffect, useState } from "react";
import { Movies } from "../../components/Movies/Movies";
import axios from "axios";

import { Spinner } from "../../components/Spinner/Spinner";
import { Search } from "../../components/Search/Search";

import styles from "./main.module.scss";

const API_KEY = "51a44011";

export function Main() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://www.omdbapi.com/?apikey=${API_KEY}&s=iron`)
      .then((response) => {
        setMovies(response.data.Search);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const searchMovies = (str, type = "all") => {
    setLoading(true);
    axios
      .get(
        `https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${
          type !== "all" ? `&type=${type}` : ""
        }`
      )
      .then((response) => {
        setMovies(response.data.Search);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  };

  return (
    <main className={styles.main}>
      <Search searchMovies={searchMovies} />
      {loading ? <Spinner /> : <Movies movies={movies} />}
    </main>
  );
}
