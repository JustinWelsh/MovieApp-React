import React from "react";
import MovieModal from "../MovieModal";

function MovieCard({ movie }) {
  const moviePoster = `https://image.tmdb.org/t/p/original${movie.poster_path}`;
  const noPoster =
    "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg";
  return (
    <div className="card rounded-2xl bg-base-100 shadow-xl w-80 carousel-item">
      <figure className="rounded-2xl">
        <img src={movie.poster_path ? moviePoster : noPoster} alt="Movie" />
      </figure>
    </div>
  );
}

export default MovieCard;
