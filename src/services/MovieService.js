export async function fetchPopularMovies() {
  const response = await fetch("/api/popular-movies");

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
}

export async function fetchTrendingAll() {
  const response = await fetch("/api/trending");

  if (!response.ok) {
    throw new Error(`Error fetching data: Status ${response.status}`);
  }

  return response.json();
}

export async function searchByMovieTitle(movieTitle) {
  const response = await fetch(`/api/search?query=${encodeURIComponent(movieTitle)}`);

  if (!response.ok) {
    throw new Error(`Error fetching searched movie data: Status ${response.status}`);
  }

  return response.json();
}

export async function fetchTrailer(movieID) {
  const response = await fetch(`/api/trailer?movieId=${movieID}`);

  if (!response.ok) {
    throw new Error(`Error fetching movie trailer data: Status ${response.status}`);
  }

  return response.json();
}
