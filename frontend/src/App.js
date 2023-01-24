import { useState } from "react";
import "./App.css";
import Search from "./components/Search";
import MovieCard from "./components/MovieCard";

function App() {
  const [apiData, setApiData] = useState({})
  const movies = apiData.Search?.map((movie) => <MovieCard key={movie.imdbID} Title={movie.Title} Poster={movie.Poster} Type={movie.Type} Year={movie.Year}/>)
  return (
    <div className="App">
      <header className="App-header">

        <Search setApiData={setApiData}/>
        <div className="flex flex-wrap">
          {movies}
        </div>

      </header>
    </div>
  );
}

export default App;
