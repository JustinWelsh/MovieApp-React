import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="section bg-black text-gray-300 py-8 mt-4">
      <div className="container mx-auto px-4 flex flex-col gap-4 lg:flex-row items-center">
        <div className="p-5">
          <img src="/TMDB.svg" alt="Logo" className="h-20" />
        </div>

        <div className="flex justify-center lg:justify-end">
          <Link to="/about" className="mr-4 hover:text-white">
            About
          </Link>
          <Link to="#" className="mr-4 hover:text-white">
            Contact
          </Link>
          <Link to="#" className="mr-4 hover:text-white">
            Privacy Policy
          </Link>
        </div>
      </div>
      <p className="text-sm text-center py-3">
        &copy; 2024 Movie App. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
