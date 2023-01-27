import { useState } from "react";
const Search = (props) => {
    // 3. create state to identify and set state to the value of what the user is typing to be used for our search-calls.
    const [movieTitle, setMovieTitle] = useState('') //input from the user
    const baseUrl = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_KEY}`

    // 2. Setup the first fetch function; which is utilized on the "search button"
    const handleSearchClick = () => {
      fetch(`${baseUrl}&s=${movieTitle}&page=1`)
      .then(res => res.json())
      .then(data => {
        console.log("initial call result", data)
        props.setApiData(data)
      })
      console.log(movieTitle)
    }
    // 5. setting state to the value of what the user is typing as they are typing (onChange), which is utilized in the "input" field
    const handleInputChange = (e) => {
      setMovieTitle(e.target.value)
    }



  return (
    <div className="w-1/2 py-5 my-5 ">
      <input
        type="text"
        id="movie-input"
        placeholder="Search for a movie"
        className="input input-bordered w-2/3 bg-white rounded-none rounded-l-lg "
        name="movie-input"
        onChange={handleInputChange}
        value={movieTitle}
      ></input>
      <button onClick={handleSearchClick} className="search-btn btn btn-ghost w-1/3 bg-slate-200 rounded-none rounded-r-lg">
        Search
      </button>
    </div>
  );
};

export default Search;
