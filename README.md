# CineTrack

A React app for browsing movies, watching trailers, and managing a personal watchlist — powered by the TMDB API.

## Features

- **Home** — Browse popular and trending movies in an animated horizontal carousel
- **Search** — Search movies by title with live results
- **Movie Modal** — Click any movie to view details and play the official YouTube trailer
- **Watchlist** — Save and manage movies you want to watch (persisted via context)
- **About** — Project info page

## Tech Stack

- [React 18](https://react.dev/) with React Router v6
- [NextUI v2](https://nextui.org/) for UI components
- [Framer Motion](https://www.framer.com/motion/) for animations
- [TMDB API](https://developer.themoviedb.org/) for movie data and trailers
- [React Icons](https://react-icons.github.io/react-icons/)

## Getting Started

### Prerequisites

- Node 20.x
- A [TMDB API key](https://developer.themoviedb.org/docs/getting-started)

### Setup

1. Clone the repo and install dependencies:

```bash
npm install
```

2. Create a `.env` file in the project root:

```
REACT_APP_ACCESS_TOKEN_TMDB=your_tmdb_api_key_here
```

3. Start the dev server:

```bash
npm start
```

The app runs at [http://localhost:3000](http://localhost:3000).

## Available Scripts

| Command | Description |
|---|---|
| `npm start` | Start the development server |
| `npm run build` | Build for production |
| `npm test` | Run tests |
