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
    <div className="card shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 bg-blue-500">
      <figure>
        <img 
          src={props.poster}
          alt={props.title}
          onClick={() => {
            fetchMovieDetails();
            setIsModalOpen(true);
          }} />
      </figure>
      <div className="">
        <div className="flex items-center justify-between p-2">
          <h2 className="card-title text-sm">{props.title}</h2>
          <p className="text-xs">{props.year}</p>
          {/* <span className="badge badge-outline">{props.type}</span> */}
        </div>

          {isModalOpen && (<MovieDetailsModal 
            movieDetailsData={movieDetailsData}
            setIsModalOpen={setIsModalOpen}
            isModalOpen={isModalOpen}
            />)}
      </div>
    </div>
  );
};
export default MovieSearchCard;
