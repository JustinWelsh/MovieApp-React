const Modal = (props) => {
    let modalToggle = props.isModalOpen ? "show" : null //place in container div for animation | may need to delete
  return (
    <div className={`modal-container`}>
      <div className="my-modal">
        <figure className="bg-black shadow-xl">
          <img
            src={props.movieDetailsData?.Poster}
            alt={props.movieDetailsData?.Title}
          />
        </figure>
        <div className="card-body pb-0">
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
          <div className="text-sm pb-3">
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
