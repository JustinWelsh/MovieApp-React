import { useState } from "react";
import "./App.css";
import Search from "./components/Search";
import MovieCard from "./components/MovieCard";
import Header from "./components/Header";

function App() {
  const [apiData, setApiData] = useState({});
  const movies = apiData.Search?.map((movie) => (
    <MovieCard
      key={movie.imdbID}
      movieId={movie.imdbID} // try to use for fetchMovieDetails call
      Title={movie.Title}
      Poster={movie.Poster}

      Type={movie.Type}
      Year={movie.Year}
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
