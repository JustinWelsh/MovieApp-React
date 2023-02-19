import { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import MovieSearchCard from "./components/card/MovieSearchCard";
import Header from "./components/Header";
import { TbMovie } from 'react-icons/tb';
import { NavBar } from "./components/NavBar";
import { Watchlist } from "./components/Watchlist";


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

      {!searchedMovies && (
        <div className="content-div">
          <span className="text-9xl"><TbMovie /></span>
          <p className="text-2xl">
            {apiData.Error ?
            'Unable to find what you are looking for. Please try another search.' : onWatchlistPage ?
            'Watchlist is empty' :
            'Start exploring'}
          </p>
        </div>)}

      {onWatchlistPage ?
      <div className="flex flex-wrap justify-center gap-3">
        <Watchlist />
      </div> :
      <div className="flex flex-wrap justify-center gap-3">
        {searchedMovies}
      </div>}
    


    </div>
  );
}

export default App;
