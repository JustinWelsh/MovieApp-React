import MovieSearchCard from "./card/MovieSearchCard";

export const Watchlist = () => {
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
    return (
        <>{watchlistMovies}</>
    )
}