import { useState } from "react";
import Modal from "../Modal";

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
    <div className="card w-96 shadow-xl">
      <figure className="h-2/3">
        <img src={props.poster} alt={props.title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{props.title}</h2>
        <div className="flex">
          <p>{props.year}</p>
          <span className="badge badge-outline">{props.type}</span>
        </div>

          {isModalOpen && (<Modal 
            movieDetailsData={movieDetailsData}
            setIsModalOpen={setIsModalOpen}
            isModalOpen={isModalOpen}
            />)}

        {/* The button to open modal */}
        <button
          className="btn"
          onClick={() => {
            fetchMovieDetails();
            setIsModalOpen(true);
          }}
        >
          🎬 Movie details 🎬
        </button>
      </div>
    </div>
  );
};
export default MovieSearchCard;
