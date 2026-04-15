import { useState, useEffect } from "react";
import Movies from "./components/Moviesnav.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Popular from "./components/Popular.jsx";
import New from "./components/New.jsx";
import List from "./components/List.jsx";
import MovieDetails from "./components/MovieDetails.jsx";
import Watchlist from "./components/Watchlist.jsx";
import Sign from "./components/Sign.jsx";

function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);

  // 🎯 SEARCH / FETCH MOVIES
  const fetchMovies = async (searchTerm) => {
    if (!searchTerm) return;

    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=8566b828097d33143f990cf454f5fa9a&query=${searchTerm}`
    );

    const data = await res.json();
    const results = data.results || [];

    setMovies(results);
    setFilteredMovies(results);
  };

  // 🎯 DEFAULT LOAD
  useEffect(() => {
    fetchMovies("avengers");
  }, []);

  // 🎯 FILTER BY GENRE
  const filterByGenre = (genreId) => {
    const filtered = movies.filter((movie) =>
      movie.genre_ids?.includes(genreId)
    );
    setFilteredMovies(filtered);
  };

  // 🎯 RESET FILTER
  const showAll = () => {
    setFilteredMovies(movies);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header
                query={query}
                setQuery={setQuery}
                onSearch={fetchMovies}
                siteName="ReelWorld"
              />

              <Movies
                movies={filteredMovies}
                query={query}
                setQuery={setQuery}
                onSearch={fetchMovies}
                filterByGenre={filterByGenre}
                showAll={showAll}
              />

              <Footer />
            </>
          }
        />

        {/* 🏠 HOME PAGE */}
        <Route
          path="/Home"
          element={
            <>
              <Header
                query={query}
                setQuery={setQuery}
                onSearch={fetchMovies}
                siteName="ReelWorld"
              />

              <Movies
                movies={filteredMovies}
                query={query}
                setQuery={setQuery}
                onSearch={fetchMovies}
                filterByGenre={filterByGenre}
                showAll={showAll}
              />

              <Footer />
            </>
          }
        />
            <Route
          path="/Sign"
          element={
            <>
              <Header
                query={query}
                setQuery={setQuery}
                onSearch={fetchMovies}
                siteName="ReelWorld"
              />
              <Sign/>

              <Footer />
            </>
          }
        />

        {/* 🔥 NEW MOVIES */}
        <Route
          path="/New"
          element={
            <>
              <Header
                query={query}
                setQuery={setQuery}
                onSearch={fetchMovies}
                siteName="ReelWorld"
              />

              <New
                query={query}
                setQuery={setQuery}
                onSearch={fetchMovies}
              />

              <Footer />
            </>
          }
        />

        {/* 🔥 POPULAR MOVIES */}
        <Route
          path="/Popular"
          element={
            <>
              <Header
                query={query}
                setQuery={setQuery}
                onSearch={fetchMovies}
                siteName="ReelWorld"
              />

              <Popular
                query={query}
                setQuery={setQuery}
                onSearch={fetchMovies}
              />

              <Footer />
            </>
          }
        />

        {/* 📃 LIST PAGE */}
        <Route
          path="/List"
          element={
            <>
              <Header
                query={query}
                setQuery={setQuery}
                onSearch={fetchMovies}
                siteName="ReelWorld"
              />

              <List movies={movies} />

              <Footer />
            </>
          }
        />

        {/* 🎬 MOVIE DETAILS */}
        <Route
          path="/movie"
          element={
            <>
              <Header siteName="ReelWorld" />
              <MovieDetails />
              <Footer />
            </>
          }
        />

        {/* ❤️ WATCHLIST */}
        <Route
          path="/Watchlist"
          element={
            <>
              <Header siteName="ReelWorld" />
              <Watchlist />
              <Footer />
            </>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;