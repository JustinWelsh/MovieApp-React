module.exports = async function handler(req, res) {
  const { type = "movie" } = req.query;
  const response = await fetch(
    `https://api.themoviedb.org/3/${type}/popular?language=en-US&page=1&api_key=${process.env.TMDB_KEY}`
  );

  if (!response.ok) {
    return res.status(response.status).json({ error: "Failed to fetch popular" });
  }

  const data = await response.json();
  res.json(data.results);
};
