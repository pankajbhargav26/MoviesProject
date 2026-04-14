import { useState, useEffect } from "react";
import Movies from "./components/Moviesnav.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Popular from "./components/Popular.jsx";
import Home from "./components/Home.jsx";
import New from "./components/New.jsx"
import List from "./components/List.jsx"
import MovieDetails from "./components/MovieDetails.jsx";
import Watchlist from "./components/Watchlist.jsx";

function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);              // ORIGINAL DATA
  const [filteredMovies, setFilteredMovies] = useState([]); // DISPLAY DATA

  // 🎯 FETCH MOVIES (SEARCH)
  const fetchMovies = async (searchTerm) => {
    if (!searchTerm) return;

    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=8566b828097d33143f990cf454f5fa9a&query=${searchTerm}`
    );

    const data = await res.json();
    const results = data.results || [];

    // reset both
    setMovies(results);
    setFilteredMovies(results);
  };

  // default load
  useEffect(() => {
    fetchMovies("avengers");
  }, []);

  // 🎯 FILTER (ALWAYS FROM ORIGINAL DATA)
  const filterByGenre = (genreId) => {
    const filtered = movies.filter((movie) =>
      movie.genre_ids?.includes(genreId)
    );

    setFilteredMovies(filtered);
  };

  // 🎯 RESET (SHOW ALL ORIGINAL)
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
                siteName={"ReelWorld"}
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
          path="/Popular"
          element={
            <>
            <Header
             query={query}
                setQuery={setQuery}
                onSearch={fetchMovies}
                siteName={"ReelWorld"}
            />
            <Popular/>
            <Footer/>
            </>
          }
         />
           <Route
          path="/List"
          element={
            <>
            <Header
             query={query}
                setQuery={setQuery}
                onSearch={fetchMovies}
                siteName={"ReelWorld"}
            />
            <List/>
            <Footer/>
            </>
          }
         />
           <Route
          path="/New"
          element={
            <>
            <Header
             query={query}
                setQuery={setQuery}
                onSearch={fetchMovies}
                siteName={"ReelWorld"}
            />
            <New/>
            <Footer/>
            </>
          }
         />
            {/* 🔥 Movie Details Page */}
        <Route path="/movie" element={
          <>
            <Header siteName="REELWISE" />
            <MovieDetails />
            <Footer />
          </>
        } />

        {/* 🔥 NEW WATCHLIST PAGE */}
        <Route path="/Watchlist" element={
          <>
            <Header siteName="REELWISE" />
            <Watchlist />
            <Footer />
          </>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;