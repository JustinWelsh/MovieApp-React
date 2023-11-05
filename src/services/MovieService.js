export async function fetchPopularMovies() {
  try {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN_TMDB}`,
      },
    };
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`,
      options
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    //  console.log("SERVICE: ", data.results);
    return data.results;
  } catch (error) {
    throw error;
  }
}

export async function fetchTrendingAll() {
  try {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN_TMDB}`,
      },
    };
    const response = await fetch(
      "https://api.themoviedb.org/3/trending/all/day?language=en-US",
      options
    );

    if (!response.ok) {
      throw new Error(`Error fetching data: Status ${response.status}`);
    }

    const data = await response.json();
    console.log(data.results);
    return data.results;
  } catch (error) {
    console.error("Error:", error);
    throw error; // Re-throw the error for higher-level error handling
  }
}
fetchTrendingAll();
