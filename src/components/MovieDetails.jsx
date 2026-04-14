import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./MovieDetails.css";

export default function MovieDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const movie = location.state || null;
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
    const exists = watchlist.find((item) => item.id === movie?.id);
    if (exists) setSaved(true);
  }, [movie]);

  const handleWatchlist = () => {
    let watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
    if (saved) {
      watchlist = watchlist.filter((item) => item.id !== movie.id);
      setSaved(false);
    } else {
      watchlist.push(movie);
      setSaved(true);
    }
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
  };

  if (!movie) return <h2 style={{ color: "white", padding: "40px" }}>No Data</h2>;

  return (
    <div
      className="md-wrapper"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
      }}
    >
      <div className="md-overlay">

        <div className="md-left">
          <img
            className="md-poster"
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
        </div>

        <div className="md-right">
          <button className="md-back" onClick={() => navigate(-1)}>← Back</button>
          <h1 className="md-title">{movie.title}</h1>
          <p className="md-meta">⭐ {movie.vote_average?.toFixed(1)} &nbsp;|&nbsp; 📅 {movie.release_date}</p>

          <div className="md-btns">
            <button className="md-play">▶ Watch Free</button>
            <button className="md-watchlist" onClick={handleWatchlist}>
              {saved ? "✔ In Watchlist" : "➕ Add to Watchlist"}
            </button>
          </div>

          <p className="md-overview">{movie.overview}</p>
        </div>

      </div>
    </div>
  );
}