import { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import MovieSearchCard from "./components/card/MovieSearchCard";
import Header from "./components/Header";
import { NavBar } from "./components/NavBar";
import EmptyPageContent from "./components/EmptyPageContent"


function App() {
  const [apiData, setApiData] = useState({});
  const [onWatchlistPage, setOnWatchlistPage] = useState(false)
  const searchedMovies = apiData.Search?.map((movie) => (
    <MovieSearchCard
      key={movie.imdbID}
      movieId={movie.imdbID}
      title={movie.Title}
      poster={movie.Poster}

      type={movie.Type}
      year={movie.Year}
    />
  ));

  const watchlist = JSON.parse(localStorage.getItem("watchlist")); //parsing of js
  const watchlistMovies = watchlist?.map((movie) => (
      <MovieSearchCard
        key={movie.imdbID}
        movieId={movie.imdbID}
        title={movie.Title}
        poster={movie.Poster}
  
        type={movie.Type}
        year={movie.Year}
      />
  ))


  if (apiData.Error === "Movie not found!") {
    console.log("movie not found!")
  }
  return (
    <div className="container">
        <NavBar
          setOnWatchlistPage={setOnWatchlistPage}
          onWatchlistPage={onWatchlistPage}
          />
        <Header onWatchlistPage={onWatchlistPage} />
        {!onWatchlistPage && <SearchBar setApiData={setApiData} />}

      {!onWatchlistPage && (
        searchedMovies ? 
          <div className="flex flex-wrap justify-center gap-3">
            {searchedMovies}
          </div> :
          <EmptyPageContent> 
            {apiData.Error ?
              'Unable to find what you are looking for. Please try another search.' : 'Start exploring'}
          </EmptyPageContent>
      )}

      {onWatchlistPage && (
        watchlistMovies ? 
          <div className="flex flex-wrap justify-center gap-3 py-5">
            {watchlistMovies}
          </div> : 
          <EmptyPageContent> 
            Watchlist is empty
          </EmptyPageContent>
      )}
  
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";
import { NextUIProvider } from "@nextui-org/react";
import { useDisclosure } from "@nextui-org/react";

import "./App.css";
import Header from "./components/layout/Header";
import { NavBar } from "./components/layout/NavBar";
import MovieCard from "./components/ui/card/MovieCard";
import MovieCarousel from "./components/ui/MovieCarousel";
import { fetchPopularMovies, fetchTrendingAll } from "./services/MovieService";
import MovieModal from "./components/ui/MovieModal";

function App() {
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
        console.error("Error:", error);
      }
    };

    fetchData(); // Call the async fetchData function
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
      <NavBar />
      <Header />

      <MovieModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        selectedMovie={selectedMovie}
      />
      <div className="m-5 p-5">
        <h2 className="text-white text-4xl p-3">Popular Movies</h2>
        <MovieCarousel>{popularMovieCards}</MovieCarousel>
        <h2 className="text-white text-4xl p-3">Trending</h2>
        <MovieCarousel>{trendingAllCards}</MovieCarousel>
      </div>
    </NextUIProvider>
  );
}

export default App;
