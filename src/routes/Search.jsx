import React from "react";
import { useMovieSearchContext } from "../context/MovieSearchContext";
import MovieCard from "../components/ui/card/MovieCard";

const Search = () => {
  const { searchedMovies } = useMovieSearchContext();
  return (
    <section>
      <div className="p-8">
        Search Works!!
        {searchedMovies.results && (
          <div className="flex flex-wrap gap-3">
            {searchedMovies.results.map((movie, index) => {
              return <MovieCard movie={movie} key={index} />;
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default Search;
