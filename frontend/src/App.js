import { useState } from "react";
import "./App.css";
import Search from "./components/SearchBar";
import MovieSearchCard from "./components/card/MovieSearchCard";
import Header from "./components/Header";
import { TbMovie } from 'react-icons/tb';
import { NavBar } from "./components/NavBar";


function App() {
  const [apiData, setApiData] = useState({});
  const [onWatchlistPage, setOnWatchlistPage] = useState(false)
  const movies = apiData.Search?.map((movie) => (
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
        <NavBar setOnWatchlistPage={setOnWatchlistPage} />
        <Header onWatchlistPage={onWatchlistPage} />
        <Search setApiData={setApiData} />

      {!movies && (
        <div className="content-div">
          <span className="text-9xl"><TbMovie /></span>
          <p className="text-2xl">
            {apiData.Error ?
            'Unable to find what you are looking for. Please try another search.' :
            'Start exploring'}
          </p>
        </div>)}


      <div className="flex flex-wrap justify-center gap-3">
        {movies}
      </div>


    </div>
  );
}

export default App;
