import React from "react";

function MovieCarousel({ children }) {
  return <div className="flex flex-wrap gap-4">{children}</div>;
}

export default MovieCarousel;
