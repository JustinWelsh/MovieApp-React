import React from "react";
import PageLayout from "./components/layout/PageLayout";
import ErrorPage from "./routes/ErrorPage";
import Home from "./routes/Home";
import Search from "./routes/Search";
import Watchlist from "./routes/Watchlist";
import About from "./routes/About";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MovieSearchProvider } from "./context/MovieSearchContext";
import { WatchlistProvider } from "./context/WatchlistContext";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <PageLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/search",
          element: <Search />,
        },
        {
          path: "/watchlist",
          element: <Watchlist />,
        },
        {
          path: "/about",
          element: <About />,
        },
      ],
    },
  ]);
  return (
    <WatchlistProvider>
      <MovieSearchProvider>
        <RouterProvider router={router} />
      </MovieSearchProvider>
    </WatchlistProvider>
  );
};

export default App;
