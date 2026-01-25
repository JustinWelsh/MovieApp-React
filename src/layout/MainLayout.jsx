import React from "react";
import { Outlet } from "react-router-dom";
import { NavBar } from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";

const MainLayout = () => {
  return (
    <>
      <NavBar />
      <main className="min-h-[1011px]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
