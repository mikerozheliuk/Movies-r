import { useState } from "react";
import styles from "./search.module.scss";

export function Search({ searchMovies }) {
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState("all");

  const handleKey = (event) => {
    if (event.key === "Enter") {
      searchMovies(search, activeTab);
    }
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    searchMovies(search, tab);
  };

  return (
    <div className={styles.search}>
      <div className={styles.search__container}>
        <input
          className={styles.search__input}
          placeholder="Search"
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKey}
        />
        <div
          className={styles.search__button}
          onClick={() => searchMovies(search, activeTab)}
        >
          Search
        </div>
      </div>

      <div className={styles.tabs}>
        <div
          className={`${styles.tab} ${activeTab === "all" ? styles.active : ""}`}
          onClick={() => handleTabClick("all")}
        >
          All
        </div>
        <div
          className={`${styles.tab} ${activeTab === "movie" ? styles.active : ""}`}
          onClick={() => handleTabClick("movie")}
        >
          Movies
        </div>
        <div
          className={`${styles.tab} ${activeTab === "series" ? styles.active : ""}`}
          onClick={() => handleTabClick("series")}
        >
          Series
        </div>
      </div>
    </div>
  );
}
