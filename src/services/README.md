# services/

Frontend service layer that provides React components with a clean interface for fetching movie data. Components never interact with API URLs directly — they call these functions instead.

## Why this exists

Keeping fetch logic out of components means API routes are defined in one place. If a URL or data shape changes, only the service needs to update — not every component that uses it.

## Functions

| Function | Route called | Returns |
|---|---|---|
| `fetchPopularMovies()` | `GET /api/popular-movies` | Array of popular movie objects |
| `fetchTrendingAll()` | `GET /api/trending` | Array of trending movie/TV objects |
| `searchByMovieTitle(title)` | `GET /api/search?query=...` | TMDB search response object |
| `fetchTrailer(movieID)` | `GET /api/trailer?movieId=...` | A single trailer object or `null` |

## How it fits in the stack

```
React Component
      ↓
src/services/MovieService.js   ← you are here (frontend)
      ↓
api/*.js                       (Vercel serverless functions)
      ↓
TMDB API
```

These functions call the `/api/*` proxy routes — never TMDB directly. The actual API key lives only in the serverless functions.
