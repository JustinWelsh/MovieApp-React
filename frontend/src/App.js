import { useState } from "react";
import "./App.css";
import Search from "./components/SearchBar";
import MovieCard from "./components/MovieCard";
import Header from "./components/Header";
import { TbMovie } from 'react-icons/tb';
import { Routes, Route, RouterProvider } from "react-router-dom";
import { Watchlist } from "./pages/Watchlist";
import { Home } from "./pages/Home"
import { router } from "./router";


function App() {
  return (
    <>
      <RouterProvider router={router}/>

      {/* <div className="container">
        <div className="header">
          <Header />
        </div>
        <div className="search-bar">
          <SearchBar setApiData={setApiData} />
        </div>

        {!movies && (
          <div className="content-div">
            <span className="text-9xl"><TbMovie /></span>
            <p className="text-2xl">
              {apiData.Error ?
              'Unable to find what you are looking for. Please try another search.' :
              'Start exploring'}
            </p>
          </div>)}

      </div> */}
    </>
  );
}

export default App;
