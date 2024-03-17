// contexts/ThemeContext.js
import React, { createContext, useContext, useEffect, useState } from "react";

const WatchlistContext = createContext(null);

const WatchlistProvider = ({ children }) => {
  const [watchlist, setWatchlist] = useState(
    localStorage.getItem("watchlist")
      ? JSON.parse(localStorage.getItem("watchlist"))
      : []
  );

  useEffect(() => {
    console.log("Context Effect", watchlist);
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
  }, [watchlist]);
  const addMovieToWatchlist = (obj) => {
    return setWatchlist((prev) => [...prev, obj]);
  };

  //   const removeMovieFromWatchlist = (movieId) => {
  //     setWatchlist((prev) => prev.filter((movie) => movie.id !== movieId));
  //   };

  return (
    <WatchlistContext.Provider value={{ watchlist, addMovieToWatchlist }}>
      {children}
    </WatchlistContext.Provider>
  );
};

const useWatchlistContext = () => useContext(WatchlistContext);

export { WatchlistProvider, WatchlistContext, useWatchlistContext };
