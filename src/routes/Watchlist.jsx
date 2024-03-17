import React, { useState } from "react";
import { useWatchlistContext } from "../context/WatchlistContext";
import MovieCard from "../components/ui/card/MovieCard";
import MovieModal from "../components/ui/MovieModal";
import { useDisclosure } from "@nextui-org/react";

const Watchlist = () => {
  const { watchlist } = useWatchlistContext();
  console.log("Watchlist Page", watchlist);
  const [selectedMovie, setSelectedMovie] = useState({});

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const handleClick = (movie) => {
    setSelectedMovie(movie);
    onOpen();
    console.log("Clicked", movie);
  };
  return (
    <div className="min-h-[1011px]">
      Watchlist Page!!
      <MovieModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        selectedMovie={selectedMovie}
      />
      <div className="p-8">
        {watchlist && (
          <div className="flex flex-wrap gap-3">
            {watchlist.map((movie, index) => {
              return (
                <div key={index} onClick={() => handleClick(movie)}>
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
