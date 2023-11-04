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
