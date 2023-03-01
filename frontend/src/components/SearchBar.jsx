import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = (props) => {
  const [movieTitle, setMovieTitle] = useState(""); //input from the user
  const baseUrl = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_KEY}`;

  const handleSubmit = (e) => {
    e.preventDefault()
    if (movieTitle) {
      fetch(`${baseUrl}&type=movie&s=${movieTitle}&page=1`)
        .then((res) => res.json())
        .then((data) => {
          console.log("initial call result", data);
          props.setApiData(data);
        });
      console.log(movieTitle);
      setMovieTitle('')
    }
  };
  const handleInputChange = (e) => {
    setMovieTitle(e.target.value);
  };

  return (
    <div className="search-bar">
      <div className="search-bar w-1/2 mt-10 bg-red-200">
        <form onSubmit={handleSubmit}>
          <label htmlFor="movie-input" className="relative top-8 left-3">
            <AiOutlineSearch />
          </label>
          <input
            type="search"
            id="movie-input"
            placeholder="Search for a movie"
            className="input input-bordered w-2/3 bg-white rounded-none rounded-l-lg px-9"
            name="movie-input"
            onChange={handleInputChange}
          ></input>
          <button
            type="submit"
            disabled={movieTitle ? false : true}
            className="search-btn btn-primary w-1/3 rounded-none rounded-r-lg"
          >
            Search
          </button>

        </form>
      </div>
    </div>
  );
};

export default SearchBar;
