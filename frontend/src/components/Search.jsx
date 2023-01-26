import { useState } from "react";
const Search = (props) => {
    const [movieTitle, setMovieTitle] = useState('')
    const baseUrl = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_KEY}`

    const handleClick = () => {
      fetch(`${baseUrl}&s=${movieTitle}&page=1`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        props.setApiData(data)
      })
      console.log(movieTitle)
    }
  
    const handleInputChange = (e) => {
      setMovieTitle(e.target.value)
    }



  return (
    <div className="w-1/2 p-5">
        <form action=""></form>
      <input
        type="text"
        id="movie-input"
        placeholder="Search for a movie"
        className="input input-bordered w-2/3 bg-white rounded-none rounded-l-lg "
        name="movie-input"
        onChange={handleInputChange}
        value={movieTitle}
      ></input>
      <button onClick={handleClick} className="search-btn btn btn-ghost w-1/3 bg-slate-200 rounded-none rounded-r-lg">
        Search
      </button>
    </div>
  );
};

export default Search;
