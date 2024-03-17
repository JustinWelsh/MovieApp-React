import React from "react";
import { Outlet } from "react-router-dom";
import { NavBar } from "./NavBar";
import Footer from "./Footer";

const PageLayout = () => {
  return (
    <>
      <NavBar />
      <div className="min-h-[1011px]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default PageLayout;
