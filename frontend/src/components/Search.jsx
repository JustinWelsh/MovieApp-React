import { useState } from "react";
import { AiOutlineSearch } from 'react-icons/ai';

const Search = (props) => {
    const [movieTitle, setMovieTitle] = useState('') //input from the user
    const baseUrl = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_KEY}`

    const handleSearchClick = () => {
        if(movieTitle) {
            fetch(`${baseUrl}&s=${movieTitle}&page=1`)
            .then(res => res.json())
            .then(data => {
              console.log("initial call result", data)
              props.setApiData(data)
            })
            console.log(movieTitle)
            // setMovieTitle('')
        }
    }
    const handleInputChange = (e) => {
      setMovieTitle(e.target.value)
    }


  return (
    <div className="w-1/2 py-5 my-5">
        <label htmlFor="movie-input" className="relative top-8 left-3"><AiOutlineSearch /></label>
      <input
        type="search"
        id="movie-input"
        placeholder="Search for a movie"
        className="input input-bordered w-2/3 bg-white rounded-none rounded-l-lg px-9"
        name="movie-input"
        onChange={handleInputChange}
        value={movieTitle}
      ></input>
      <button onClick={handleSearchClick} className="search-btn btn btn-primary w-1/3 rounded-none rounded-r-lg">
        Search
      </button>
    </div>
  );
};

export default Search;
