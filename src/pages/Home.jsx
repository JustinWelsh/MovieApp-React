import React, { useEffect, useState } from "react";
import { NextUIProvider, Skeleton } from "@nextui-org/react";
import { useDisclosure } from "@nextui-org/react";
import { motion } from "framer-motion";
import { fetchPopularMovies, fetchTrendingAll } from "../services/MovieService";
import MovieCarousel from "../components/carousel/MovieCarousel";
import MovieModal from "../components/modal/MovieModal";
import { fadeInUp } from "../_config/animations";

const SkeletonCards = () => (
  <div className="flex gap-4 pb-4">
    {Array.from({ length: 8 }).map((_, i) => (
      <Skeleton
        key={i}
        className="rounded-lg flex-shrink-0"
        style={{ width: 200, height: 300 }}
      />
    ))}
  </div>
);

const Home = () => {
  const [selectedMovie, setSelectedMovie] = useState({});
  const [popularMovies, setPopularMovies] = useState([]);
  const [trendingAll, setTrendingAll] = useState([]);
  const [loading, setLoading] = useState(true);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const popularData = await fetchPopularMovies();
        const trendingData = await fetchTrendingAll();
        setPopularMovies(popularData);
        setTrendingAll(trendingData);
      } catch (error) {
        console.error("Error Fetching Data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
    onOpen();
  };


  return (
    <NextUIProvider>
      <MovieModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        selectedMovie={selectedMovie}
      />
      <section className="">
        <div className="p-8">
          <h2 className="text-5xl">Welcome.</h2>
          <h3 className="text-3xl">
            Millions of movies, TV shows and people to discover. Explore now.
          </h3>
        </div>
      </section>
      <section className="">
        <div className="p-8">
          <motion.div {...fadeInUp}>
            <h2 className="text-white text-xl p-3 font-bold">Popular Movies</h2>
            {loading ? (
              <SkeletonCards />
            ) : (
              <MovieCarousel
                movies={popularMovies}
                handleMovieClick={handleMovieClick}
              />
            )}
          </motion.div>
          <motion.div {...fadeInUp}>
            <h2 className="text-white text-xl p-3 font-bold mt-8">Trending</h2>
            {loading ? (
              <SkeletonCards />
            ) : (
              <MovieCarousel
                movies={trendingAll}
                handleMovieClick={handleMovieClick}
              />
            )}
          </motion.div>
        </div>
      </section>
    </NextUIProvider>
  );
};


export default Home;
