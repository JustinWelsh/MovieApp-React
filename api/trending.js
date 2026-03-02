module.exports = async function handler(req, res) {
  const response = await fetch(
    `https://api.themoviedb.org/3/trending/all/day?language=en-US&api_key=${process.env.TMDB_KEY}`
  );

  if (!response.ok) {
    return res.status(response.status).json({ error: "Failed to fetch trending" });
  }

  const data = await response.json();
  res.json(data.results);
};
