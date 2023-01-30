const Modal = (props) => {
  return (
    <div className="modal-container">
      <div className="card bg-white">
        <figure className="bg-black">
          <img
            src={props.movieDetailsData?.Poster}
            alt={props.movieDetailsData?.Title}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-black">
            {props.movieDetailsData?.Title}
          </h2>
          <p>{props.movieDetailsData?.Ratings[1]?.value}</p>
          <p>{props.movieDetailsData?.Rated}</p>
          <div className="flex text-black text-sm">
            <p>{props.movieDetailsData?.Runtime}</p>
            <p>{props.movieDetailsData?.Genre}</p>
            <p>Watchlist</p>
          </div>
          <p className="pb-7">{props.movieDetailsData?.Plot}</p>
          <div className="text-sm">
            <p>Director: {props.movieDetailsData?.Director}</p>
            <p>Starring: {props.movieDetailsData?.Actors}</p>
          </div>
          <div className="card-actions justify-end">
            <button
              className="btn btn-primary"
              onClick={() => props.setIsModalOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
