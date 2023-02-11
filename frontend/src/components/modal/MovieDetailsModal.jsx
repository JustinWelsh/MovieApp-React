import { SiRottentomatoes } from 'react-icons/si';
import { PlusMinus } from '../swap/PlusMinus';

const MovieDetailsModal = (props) => {
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
          <div className="flex">
            <p>{props.movieDetailsData?.Rated}</p>
            <div className='flex items-center'>
                <div className='text-red-600 text-xl'><SiRottentomatoes /></div>
                <p className='pl-2'>{props.movieDetailsData?.Ratings[1].Value}</p>
            </div>
          </div>
          <div className="flex text-black text-sm my-2">
            <p>{props.movieDetailsData?.Runtime}</p>
            <p>{props.movieDetailsData?.Genre}</p>
            <div className='flex items-center'>
              <PlusMinus >
                <p className="relative left-3">Watchlist</p>
              </PlusMinus >
            </div>
          </div>
          <p className="pb-7">{props.movieDetailsData?.Plot}</p>
          <div className="text-sm pb-3">
            <p>
                <span className='text-black'>Director:</span> {props.movieDetailsData?.Director}</p>
            <p>
                <span className='text-black'>Starring:</span> {props.movieDetailsData?.Actors}</p>
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

export default MovieDetailsModal;
