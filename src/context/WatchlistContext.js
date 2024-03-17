// contexts/ThemeContext.js
import React, { createContext, useContext, useEffect, useState } from "react";

const WatchlistContext = createContext(null);

const WatchlistProvider = ({ children }) => {
  const loadWatchlistFromLocalStorage = () => {
    const storedWatchlist = localStorage.getItem("watchlist");
    return storedWatchlist ? JSON.parse(storedWatchlist) : [];
  };
  const [watchlist, setWatchlist] = useState(loadWatchlistFromLocalStorage());

  useEffect(() => {
    //  console.log("Context Effect", watchlist);
    const saveWatchlistToLocalStorage = (watchlist) => {
      localStorage.setItem("watchlist", JSON.stringify(watchlist));
    };
    saveWatchlistToLocalStorage(watchlist);
  }, [watchlist]);

  const addMovieToWatchlist = (obj) => {
    return setWatchlist((prev) => [...prev, obj]);
  };

  const removeMovieFromWatchlist = (movieId) => {
    setWatchlist((prev) => prev.filter((movie) => movie.id !== movieId));
  };

  return (
    <WatchlistContext.Provider
      value={{ watchlist, addMovieToWatchlist, removeMovieFromWatchlist }}
    >
      {children}
    </WatchlistContext.Provider>
  );
};

const useWatchlistContext = () => useContext(WatchlistContext);

export { WatchlistProvider, WatchlistContext, useWatchlistContext };
