import { useEffect, useState } from "react";

export default function Watchlist() {
  const [list, setList] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("watchlist")) || [];
    setList(data);
  }, []);

  return (
    <div style={{ color: "white", padding: "20px" }}>
      <h1 style={{fontSize:"70px"}}>My Watchlist</h1>

      {list.length === 0 ? (
        <p>No movies added</p>
      ) : (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "15px" }}>
          {list.map((movie) => (
            <div key={movie.id}>
              <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
              />
              <h4>{movie.title}</h4>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}