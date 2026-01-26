import React from "react";
import MovieCard from "../card/MovieCard";

function MovieCarousel({ movies, handleMovieClick }) {
  return (
    <div className="flex flex-wrap gap-4">
      {movies &&
        movies.map((movie) => (
          <div key={movie.id} onClick={() => handleMovieClick(movie)}>
            <MovieCard movie={movie} />
          </div>
        ))}
    </div>
  );
}

export default MovieCarousel;
