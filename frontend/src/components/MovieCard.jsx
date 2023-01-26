const MovieCard = (props) => {
  return (
    <div className="card w-96 shadow-xl">
      <figure>
        <img src={props.Poster} alt={props.Title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{props.Title}</h2>
        <div className="flex">
          <p>{props.Year}</p>
          <span className="badge badge-outline">{props.Type}</span>
        </div>
        <div className="card-actions justify-end pt-2">
          <button className="btn btn-primary btn-xs">Details</button>
        </div>
      </div>
    </div>
  );
};
export default MovieCard;
