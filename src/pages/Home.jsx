import React, { useEffect, useState } from "react";
import { NextUIProvider } from "@nextui-org/react";
import { useDisclosure } from "@nextui-org/react";
import { fetchPopularMovies, fetchTrendingAll } from "../services/MovieService";
import MovieCarousel from "../components/carousel/MovieCarousel";
import MovieModal from "../components/modal/MovieModal";

const Home = () => {
  const [selectedMovie, setSelectedMovie] = useState({});
  const [popularMovies, setPopularMovies] = useState([]);
  const [trendingAll, setTrendingAll] = useState([]);
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
          <h2 className="text-white text-lg p-3">Popular Movies</h2>
          <MovieCarousel
            movies={popularMovies}
            handleMovieClick={handleMovieClick}
          />
          <h2 className="text-white text-lg p-3">Trending</h2>
          <MovieCarousel
            movies={trendingAll}
            handleMovieClick={handleMovieClick}
          />
        </div>
      </section>
    </NextUIProvider>
  );
};

export default Home;
