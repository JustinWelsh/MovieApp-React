import React from "react";
import { useWatchlistContext } from "../context/WatchlistContext";
import MovieCard from "../components/ui/card/MovieCard";

const Watchlist = () => {
  const { watchlist } = useWatchlistContext();
  console.log("Watchlist Page", watchlist);
  return (
    <div>
      Watchlist
      <div className="p-8">
        {watchlist && (
          <div className="flex flex-wrap gap-3">
            {watchlist.map((movie, index) => {
              return (
                <div key={index}>
                  <MovieCard movie={movie} />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Watchlist;
