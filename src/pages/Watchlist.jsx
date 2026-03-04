import React, { useState } from "react";
import { useWatchlistContext } from "../context/WatchlistContext";
import { motion } from "framer-motion";
import MovieCard from "../components/card/MovieCard";
import MovieModal from "../components/modal/MovieModal";
import { useDisclosure } from "@nextui-org/react";
import MovieCarousel from "../components/carousel/MovieCarousel";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.4, ease: "easeOut" },
  }),
};

const Watchlist = () => {
  const { watchlist } = useWatchlistContext();
  const [selectedMovie, setSelectedMovie] = useState({});

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const handleClick = (movie) => {
    setSelectedMovie(movie);
    onOpen();
  };
  return (
    <div className="min-h-[1011px]">
      Watchlist Page!!
      <MovieModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        selectedMovie={selectedMovie}
      />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="p-8"
      >
        {/* {watchlist && (
          <div className="flex flex-wrap gap-3">
            {watchlist.map((movie) => {
              return (
                <div key={movie.id} onClick={() => handleClick(movie)}>
                  <MovieCard movie={movie} />
                </div>
              );
            })}
          </div>
        )} */}
        <MovieCarousel movies={watchlist} handleMovieClick={handleClick} />
      </motion.div>
    </div>
  );
};

export default Watchlist;
