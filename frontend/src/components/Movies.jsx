import MovieCard from "./MovieCard";

export function Movies() {
    // previously passed "setApiData" as props to the SearchBar component
    const [apiData, setApiData] = useState({});

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
        <div className="flex flex-wrap justify-center gap-10">
          {movies}
        </div>
    )
}