import { useState } from "react";

const MovieCard = (props) => {
  const baseUrl = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_KEY}`

  // state to access more detailed data per MovieCard that is clicked on
  const [movieDetailsData, setMovieDetailsData] = useState(null)
  // const [stateId, setStateId] = useState(props.movieId)

  const fetchMovieDetails = () => {
    setMovieDetailsData(null)
    fetch(`${baseUrl}&i=${props.movieId}`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setMovieDetailsData(data)
      })
    }

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







        {/* The button to open modal */}
        <label htmlFor="my-modal-6" className="btn" onClick={fetchMovieDetails}>open modal</label>

        {/* Put this part before </body> tag */}
        <input type="checkbox" id="my-modal-6" className="modal-toggle" />
        <div className="modal modal-bottom sm:modal-middle">

        {movieDetailsData && alert(movieDetailsData.Title)}

        
        {/* {movieDetailsData && (
          <div className="modal-box">
            <h3 className="font-bold text-lg">{movieDetailsData.Title}</h3>
            <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>

            <div className="modal-action">
              <label htmlFor="my-modal-6" className="btn">Close</label>
            </div>
          </div>)} */}
        </div>

      </div>
    </div>
  );
};
export default MovieCard;
