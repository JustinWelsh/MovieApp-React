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
      <div className="">
        <h2 className="text-white text-4xl p-3">Popular Movies</h2>
        <MovieCarousel>{popularMovieCards}</MovieCarousel>
        <h2 className="text-white text-4xl p-3">Trending</h2>
        <MovieCarousel>{trendingAllCards}</MovieCarousel>
      </div>
    </NextUIProvider>
  );
};

export default Home;
