import React, { useState, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import './Moviesnav.css'

export default function Movies() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  // Fetch movies from TMDb
  const fetchMovies = async (searchTerm) => {
    if (!searchTerm) return; // prevent empty search
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=8566b828097d33143f990cf454f5fa9a&query=${searchTerm}`
    );
    const data = await res.json();
    console.log(data);
    setMovies(data.results || []); // TMDb uses results, not Search
  }

  // Default movies on page load
  useEffect(() => {
    fetchMovies("avengers"); // show some movies on initial load
  }, []);

  return (
    <div className="main">

   


      <h1 className="h1">Movies</h1>

      <div className="search">
        <input
          type="text"
          placeholder="Search Movies"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="Searchinput"
          onKeyDown={(e) => e.key === "Enter" && fetchMovies(query)} // optional: search on Enter
        />

        <button
          className="SearchButton"
          onClick={() => fetchMovies(query)}
        >
          <AiOutlineSearch />
        </button>
      </div>

      <div className="movie-list">
        {movies.length > 0 ? (
          movies.map((movie, index) => (
            <div key={movie.id + index} className="movie-card">
              <img
                src={movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : "https://via.placeholder.com/150"
                }
                alt={movie.title}
              />
              <h3>{movie.title}</h3>
              
              <div className="movie-info">
  <span>⭐ {movie.vote_average?.toFixed(1)}</span>
  <span>{movie.release_date?.slice(0,4)}</span>
</div>
   </div>
          ))
        ) : (
          <p>No movies found</p>
        )}
      </div>
    </div>
     
   
  );
}