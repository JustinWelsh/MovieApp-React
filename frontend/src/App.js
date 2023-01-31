import { useState } from "react";
import "./App.css";
import Search from "./components/Search";
import MovieCard from "./components/MovieCard";
import Header from "./components/Header";
import { TbMovie } from 'react-icons/tb';


function App() {
  // 1. set state to hold data from each search
  const [apiData, setApiData] = useState({});
  // 4. once data is set => mapping through state-data and creating a MovieCard
  // also passing data through props to be accessed and displayed on each card.
  const movies = apiData.Search?.map((movie) => (
    <MovieCard
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
      <div className="header">
        <Header />
      </div>
      <div className="search-bar">
        <Search setApiData={setApiData} />
      </div>

      {!movies && (
        <div className="content-div">
          <span className="text-9xl"><TbMovie /></span>
          <p className="text-2xl">
            {apiData.Error ?
            'Unable to find what you are looking for. Please try another search.' :
            'Start exploring'}
          </p>
        </div>)}


      <div className="flex flex-wrap justify-center gap-10">
        {movies}
      </div>


    </div>
  );
}

export default App;
