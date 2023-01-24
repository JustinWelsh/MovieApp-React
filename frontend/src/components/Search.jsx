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
    <>
      <input
        type="text"
        id="movie-input"
        placeholder="Type here"
        className="input input-bordered max-w-xs"
        name="movie-input"
        onChange={handleInputChange}
        value={movieTitle}
      ></input>
      <button onClick={handleClick} className="btn">
        Search
      </button>
    </>
  );
};

export default Search;
