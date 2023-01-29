import { useState } from "react";

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
      <figure className="">
        <img src={props.Poster} alt={props.Title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{props.Title}</h2>
        <div className="flex">
          <p>{props.Year}</p>
          <span className="badge badge-outline">{props.Type}</span>
        </div>
        {/* <div className="card-actions justify-end pt-2">
          <button className="btn btn-primary btn-xs">Details</button>
        </div> */}


          {isModalOpen && (
            <div className="modal-container">
              <div
              className="card bg-white"
            >

                <figure className="bg-black"><img src={movieDetailsData?.Poster} alt={movieDetailsData?.Title}/></figure>
                <div className="card-body">
                  <h2 className="card-title text-black">{movieDetailsData?.Title}</h2>
                  <p>{movieDetailsData?.Ratings[1]?.value}</p>
                  <p>{movieDetailsData?.Rated}</p>
                  <div className="flex text-black text-sm">
                    <p>{movieDetailsData?.Runtime}</p>
                    <p>{movieDetailsData?.Genre}</p>
                    <p>Watchlist</p>
                  </div>
                  <p className="pb-7">{movieDetailsData?.Plot}</p>
                  <div className="text-sm">
                    <p>Director: {movieDetailsData?.Director}</p>
                    <p>Starring: {movieDetailsData?.Actors}</p>
                  </div>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary" onClick={() => setIsModalOpen(false)}>Close</button>
                  </div>
                </div>
              </div>
            </div>
          )}

        {/* The button to open modal */}
        <button
          // htmlFor="my-modal-6"
          className="btn"
          onClick={() => {
            fetchMovieDetails();
            setIsModalOpen(true);
          }}
        >
          new modal
        </button>
      </div>
    </div>
  );
};
export default MovieCard;
