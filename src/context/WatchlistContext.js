// contexts/ThemeContext.js
import React, { createContext, useContext, useState } from "react";

const WatchlistContext = createContext(null);

const WatchlistProvider = ({ children }) => {
  const [watchlist, setWatchlist] = useState([]);

  const addMovieToWatchlist = (obj) => {
    return setWatchlist((prev) => [...prev, obj]);
  };

  return (
    <WatchlistContext.Provider value={{ watchlist, addMovieToWatchlist }}>
      {children}
    </WatchlistContext.Provider>
  );
};

const useWatchlistContext = () => useContext(WatchlistContext);

export { WatchlistProvider, WatchlistContext, useWatchlistContext };
