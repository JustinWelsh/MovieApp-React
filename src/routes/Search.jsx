import React, { useState } from "react";
import { useMovieSearchContext } from "../context/MovieSearchContext";
import MovieCard from "../components/ui/card/MovieCard";
import MovieModal from "../components/ui/MovieModal";
import { useDisclosure } from "@nextui-org/react";

const Search = () => {
  const { searchedMovies } = useMovieSearchContext();
  const [selectedMovie, setSelectedMovie] = useState({});

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const handleClick = (movie) => {
    setSelectedMovie(movie);
    onOpen();
    console.log("Clicked", movie);
  };
  return (
    <section className="min-h-[1011px]">
      <MovieModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        selectedMovie={selectedMovie}
      />
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
