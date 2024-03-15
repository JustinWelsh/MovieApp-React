import React from "react";
import { useMovieSearchContext } from "../context/MovieSearchContext";
import MovieCard from "../components/ui/card/MovieCard";

const Search = () => {
  const { searchedMovies } = useMovieSearchContext();
  console.log("Searched Movies", searchedMovies);
  return (
    <div>
      Search Works!!
      {searchedMovies.results && (
        <div className="flex flex-wrap gap-3">
          {searchedMovies.results.map((movie, index) => {
            return <MovieCard movie={movie} key={index} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Search;
