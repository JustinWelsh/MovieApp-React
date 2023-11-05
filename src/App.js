import { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import Header from "./components/layout/Header";
import { NavBar } from "./components/layout/NavBar";
import MovieCard from "./components/ui/card/MovieCard";
import MovieCarousel from "./components/ui/MovieCarousel";
import { fetchPopularMovies, fetchTrendingAll } from "./services/MovieService";

function App() {
  const [popularMovies, setPopularMovies] = useState([]);
  const [trendingAll, setTrendingAll] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const popularData = await fetchPopularMovies();
        const trendingData = await fetchTrendingAll();
        setPopularMovies(popularData);
        setTrendingAll(trendingData);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData(); // Call the async fetchData function
  }, []);

  const popularMovieCards = popularMovies.map((movie) => (
    <MovieCard key={movie.id} movie={movie} />
  ));
  const trendingAllCards = trendingAll.map((movie) => (
    <MovieCard key={movie.id} movie={movie} />
  ));

  return (
    <div className="container">
      <NavBar />
      <Header />
      <div className="m-5 p-5">
        <h2 className="text-4xl p-3">Popular Movies</h2>
        <MovieCarousel>{popularMovieCards}</MovieCarousel>
        <h2 className="text-4xl p-3">Trending</h2>
        <MovieCarousel>{trendingAllCards}</MovieCarousel>
      </div>
    </div>
  );
}

export default App;
