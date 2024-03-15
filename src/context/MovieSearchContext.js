// contexts/ThemeContext.js
import React, { createContext, useContext, useState } from "react";

const MovieSearchContext = createContext(null);

const MovieSearchProvider = ({ children }) => {
  const [searchedMovies, setSearchedMovies] = useState({});

  const updateSearchedMovies = (obj) => {
    setSearchedMovies(obj);
  };

  return (
    <MovieSearchContext.Provider
      value={{ searchedMovies, updateSearchedMovies }}
    >
      {children}
    </MovieSearchContext.Provider>
  );
};

const useMovieSearchContext = () => useContext(MovieSearchContext);

export { MovieSearchProvider, MovieSearchContext, useMovieSearchContext };
