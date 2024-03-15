const apiKey = process.env.REACT_APP_ACCESS_TOKEN_TMDB;
export async function fetchPopularMovies() {
  try {
    const url = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=${apiKey}`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    // console.log("SERVICE: ", data.results);
    return data.results;
  } catch (error) {
    throw error;
  }
}

export async function fetchTrendingAll() {
  try {
    const url = `https://api.themoviedb.org/3/trending/all/day?language=en-US&api_key=${apiKey}`;

    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    };

    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`Error fetching data: Status ${response.status}`);
    }

    const data = await response.json();
    // console.log(data.results);
    return data.results;
  } catch (error) {
    console.error("Error:", error);
    throw error; // Re-throw the error for higher-level error handling
  }
}

export async function searchByMovieTitle(movieTitle) {
  try {
    const url = `https://api.themoviedb.org/3/search/movie?query=${movieTitle}&include_adult=false&language=en-US&page=1&api_key=${apiKey}`;

    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    };

    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(
        `Error fetching Searched movie data: Status ${response.status}`
      );
    }
    const data = await response.json();
    return data;
  } catch (error) {}
}
