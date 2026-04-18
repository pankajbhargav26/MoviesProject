import { useEffect, useState } from "react";
import Movies from "./Moviesnav";

export default function Popular({ query, setQuery, onSearch,filterByGenre }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=8566b828097d33143f990cf454f5fa9a"
    )
      .then((res) => res.json())
      .then((data) => setMovies(data.results || []));
  }, []);

  return ( 
    <Movies
      movies={movies}
      query={query}
      setQuery={setQuery}
      onSearch={onSearch}
      filterByGenre={() => {}}
      showAll={() => {}}
    />
  );
}