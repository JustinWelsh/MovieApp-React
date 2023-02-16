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
        setMovieDetailsData(data);
      });
  };

  return (
    <div className="movie-card-container w-60	">
      <figure className="hover:cursor-pointer">
        <img 
          src={props.poster === "N/A" ? "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg" : props.poster}
          alt={props.title}
          className="rounded-t-2xl max-h-96"
          onClick={() => {
            fetchMovieDetails();
            setIsModalOpen(true);
          }} />
      </figure>
        <div className="flex items-center justify-between p-2">
          <h2 className="card-title text-xs w-5/6">{props.title}</h2>
          <p className="text-[10px]">{props.year}</p>
          {/* <span className="badge badge-outline">{props.type}</span> */}
        </div>

        {isModalOpen && (<MovieDetailsModal 
          movieDetailsData={movieDetailsData}
          setIsModalOpen={setIsModalOpen}
          isModalOpen={isModalOpen}
          />)}
      </div>
  );
};
export default MovieSearchCard;
