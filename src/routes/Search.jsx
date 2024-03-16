import React from "react";
import { useMovieSearchContext } from "../context/MovieSearchContext";
import MovieCard from "../components/ui/card/MovieCard";

const Search = () => {
  const { searchedMovies } = useMovieSearchContext();
  const handleClick = (movie) => {
    console.log("Clicked", movie);
  };
  return (
    <section>
      <div className="p-8">
        Search Works!!
        {searchedMovies.results && (
          <div className="flex flex-wrap gap-3">
            {searchedMovies.results.map((movie, index) => {
              return (
                <div key={index} onClick={() => handleClick(movie)}>
                  <MovieCard movie={movie} />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default Search;
