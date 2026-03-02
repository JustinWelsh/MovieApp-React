module.exports = async function handler(req, res) {
  const { query } = req.query;

  if (!query) {
    return res.status(400).json({ error: "Missing query parameter" });
  }

  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(query)}&include_adult=false&language=en-US&page=1&api_key=${process.env.TMDB_KEY}`
  );

  if (!response.ok) {
    return res.status(response.status).json({ error: "Failed to fetch search results" });
  }

  const data = await response.json();
  res.json(data);
};
