import { useState } from "react";
import "./App.css";
import Search from "./components/Search";
import MovieCard from "./components/MovieCard";
import Header from "./components/Header";

function App() {
  // 1. set state to hold data from each search
  const [apiData, setApiData] = useState({});
  // 4. once data is set => mapping through state-data and creating a MovieCard
  // also passing data through props to be accessed and displayed on each card.
  const movies = apiData.Search?.map((movie) => (
    <MovieCard
      key={movie.imdbID}
      movieId={movie.imdbID} // try to use for fetchMovieDetails call
      title={movie.Title}
      poster={movie.Poster}

      type={movie.Type}
      year={movie.Year}
    />
  ));
  return (
    <div className="container">
      <div className="header">
        <Header />
      </div>
      {/* change position */}
      <div className="search-bar">
        <Search setApiData={setApiData} />
      </div>
      <div className="flex flex-wrap justify-center gap-10">
        {movies}
      </div>
    </div>
  );
}

export default App;
