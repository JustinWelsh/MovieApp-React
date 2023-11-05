import { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import Header from "./components/layout/Header";
import { NavBar } from "./components/layout/NavBar";
import EmptyPageContent from "./components/EmptyPageContent";
import MovieCard from "./components/ui/card/MovieCard";

function App() {
  const [apiData, setApiData] = useState({});
  const [popularMovies, setPopularMovies] = useState({});
  const [onWatchlistPage, setOnWatchlistPage] = useState(false);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.ACCESS_TOKEN_TMDB}`,
      },
    };

    fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setPopularMovies(response.results);
      })
      .catch((err) => console.error(err));

    console.log(" EFFECT popularMovies: ", popularMovies);
  }, []);

  console.log("popularMovies: ", popularMovies);

  const popularMovieCards = popularMovies.map((movie) => (
    <MovieCard movie={movie} />
  ));

  return (
    <div className="container">
      <NavBar
        setOnWatchlistPage={setOnWatchlistPage}
        onWatchlistPage={onWatchlistPage}
      />
      <Header onWatchlistPage={onWatchlistPage} />
      {!onWatchlistPage && <SearchBar setApiData={setApiData} />}
      <h2 className="text-4xl p-3">Popular Movies</h2>
      <div className="flex flex-wrap justify-center gap-5">
        {popularMovieCards}
      </div>
    </div>
  );
}

export default App;
