import { MovieDetailsCard } from '../card/MovieDetailsCard';

const MovieDetailsModal = (props) => {
    let modalToggle = props.isModalOpen ? "show" : null //place in container div for animation | may need to delete
  return (
    <div className={`modal-container`}>
      <div className="my-modal">
        <MovieDetailsCard {...props}/>
      </div>
    </div>
  );
};

export default MovieDetailsModal;
