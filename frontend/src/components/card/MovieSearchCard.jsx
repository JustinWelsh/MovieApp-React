import { useState } from "react";
import MovieDetailsModal from "../modal/MovieDetailsModal";

const MovieSearchCard = (props) => {
  const baseUrl = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_KEY}`;

  const [movieDetailsData, setMovieDetailsData] = useState(null);

  const [isModalOpen, setIsModalOpen] = useState(false)

  const fetchMovieDetails = () => {
    setMovieDetailsData(null);
    fetch(`${baseUrl}&i=${props.movieId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        data.watchlist = false // added this the use for toggling the plus/minus-icon
        setMovieDetailsData(data);
      });
  };

  return (
    <div className="movie-card-container">
      <figure className="movie-card hover:cursor-pointer">
        <img 
          src={props.poster === "N/A" ? "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg" : props.poster}
          alt={props.title}
          className="rounded-xl h-full w-full"
          onClick={() => {
            fetchMovieDetails();
            setIsModalOpen(true);
          }} />
      </figure>
        {/* <div className="flex items-center justify-between p-2">
          <h2 className="card-title text-xs w-5/6">{props.title}</h2>
          <p className="text-[10px]">{props.year}</p>
        </div> */}
          {/* <span className="badge badge-outline">{props.type}</span> */}

        {isModalOpen && (<MovieDetailsModal 
          movieDetailsData={movieDetailsData}
          setIsModalOpen={setIsModalOpen}
          isModalOpen={isModalOpen}
          />)}
      </div>
  );
};
export default MovieSearchCard;
