import { useState } from "react";
import Modal from "./Modal";

const MovieCard = (props) => {
  const baseUrl = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_KEY}`;

  // state to access more detailed data per MovieCard that is clicked on
  const [movieDetailsData, setMovieDetailsData] = useState(null);
  // const [stateId, setStateId] = useState(props.movieId)

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
        {/* <div className="card-actions justify-end pt-2">
          <button className="btn btn-primary btn-xs">Details</button>
        </div> */}


          {isModalOpen && (<Modal 
            movieDetailsData={movieDetailsData}
            setIsModalOpen={setIsModalOpen}
            isModalOpen={isModalOpen}
            />)}

        {/* The button to open modal */}
        <button
          // htmlFor="my-modal-6"
          className="btn"
          onClick={() => {
            fetchMovieDetails();
            setIsModalOpen(true);
          }}
        >
          Movie details
        </button>
      </div>
    </div>
  );
};
export default MovieCard;
