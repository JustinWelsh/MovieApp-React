import React from "react";
import { Image } from "@nextui-org/image";
import { motion } from "framer-motion";
import { fadeInUp30 } from "../../_config/animations";

function MovieCard({ movie }) {
  const moviePoster = `https://image.tmdb.org/t/p/original${movie.poster_path}`;
  const noPoster =
    "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg";
  return (
    <motion.div {...fadeInUp30}>
      <Image
        width={200}
        alt={movie.title}
        src={movie.poster_path ? moviePoster : noPoster}
      />
    </motion.div>
  );
}

export default MovieCard;
