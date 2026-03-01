import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import MovieCard from "../card/MovieCard";

const CARD_WIDTH = 200;
const GAP = 16;
const SCROLL_AMOUNT = (CARD_WIDTH + GAP) * 3;

function MovieCarouselAnimated({ movies, handleMovieClick }) {
  const [offset, setOffset] = useState(0);
  const containerRef = useRef(null);

  const handlePrev = () => {
    setOffset((prev) => Math.min(prev + SCROLL_AMOUNT, 0));
  };

  const handleNext = () => {
    if (!containerRef.current) return;
    const containerWidth = containerRef.current.offsetWidth;
    const totalWidth = movies.length * (CARD_WIDTH + GAP);
    const maxOffset = -(totalWidth - containerWidth);
    setOffset((prev) => Math.max(prev - SCROLL_AMOUNT, maxOffset));
  };

  return (
    <div className="relative overflow-hidden" ref={containerRef}>
      <motion.div
        className="flex gap-4 pb-4"
        animate={{ x: offset }}
        transition={{ type: "spring", stiffness: 200, damping: 30 }}
      >
        {movies &&
          movies.map((movie) => (
            <div
              key={movie.id}
              onClick={() => handleMovieClick(movie)}
              className="cursor-pointer flex-shrink-0"
            >
              <MovieCard movie={movie} />
            </div>
          ))}
      </motion.div>
      <button
        onClick={handlePrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/90 text-white text-3xl w-10 h-10 rounded-full z-10 flex items-center justify-center"
      >
        ‹
      </button>
      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/90 text-white text-3xl w-10 h-10 rounded-full z-10 flex items-center justify-center"
      >
        ›
      </button>
    </div>
  );
}

export default MovieCarouselAnimated;
