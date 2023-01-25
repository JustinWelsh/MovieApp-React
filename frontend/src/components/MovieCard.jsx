const MovieCard = (props) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={props.Poster} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{props.Title}</h2>
        <p>{props.Type}</p>
        <p>{props.Year}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary btn-xs">View more</button>
          <button className="btn btn-primary btn-xs">+watchlist</button>
        </div>
      </div>
    </div>
  );
};
export default MovieCard;
