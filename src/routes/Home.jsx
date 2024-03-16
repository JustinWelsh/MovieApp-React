import React, { useEffect, useState } from "react";
import { NextUIProvider } from "@nextui-org/react";
import { useDisclosure } from "@nextui-org/react";
import { fetchPopularMovies, fetchTrendingAll } from "../services/MovieService";
import MovieCard from "../components/ui/card/MovieCard";
import MovieModal from "../components/ui/MovieModal";
import MovieCarousel from "../components/ui/MovieCarousel";

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
    console.log(movie);
  };

  const popularMovieCards = popularMovies.map((movie) => (
    <div key={movie.id} onClick={() => handleMovieClick(movie)}>
      <MovieCard movie={movie} />
    </div>
  ));
  const trendingAllCards = trendingAll.map((movie) => (
    <div key={movie.id} onClick={() => handleMovieClick(movie)}>
      <MovieCard movie={movie} />
    </div>
  ));
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
          <MovieCarousel>{popularMovieCards}</MovieCarousel>
          <h2 className="text-white text-lg p-3">Trending</h2>
          <MovieCarousel>{trendingAllCards}</MovieCarousel>
        </div>
      </section>
    </NextUIProvider>
  );
};

export default Home;
