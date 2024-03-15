import React from "react";
import { Outlet } from "react-router-dom";
import { NavBar } from "./NavBar";
import Footer from "./Footer";

const PageLayout = () => {
  return (
    <>
      <NavBar />
      <div className="px-12">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default PageLayout;
