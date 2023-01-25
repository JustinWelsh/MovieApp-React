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
      Title={movie.Title}
      Poster={movie.Poster}
      Type={movie.Type}
      Year={movie.Year}
    />
  ));
  return (
    <div className="container">
      <header className="header-background">
        <Header />
      </header>
      <div className="flex justify-center">
        <Search setApiData={setApiData} />
      </div>
      <div className="flex flex-wrap justify-center">{movies}</div>
    </div>
  );
}

export default App;
