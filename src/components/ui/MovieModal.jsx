import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";
import { useWatchlistContext } from "../../context/WatchlistContext";
function MovieModal({ isOpen, onOpenChange, selectedMovie }) {
  const { watchlist, addMovieToWatchlist, removeMovieFromWatchlist } =
    useWatchlistContext();
  const backDropImage = `https://image.tmdb.org/t/p/original${selectedMovie.backdrop_path}`;

  const handleAddToWatchlist = (movie) => {
    addMovieToWatchlist(movie);
  };
  const handleRemoveFromWatchlist = (movie) => {
    removeMovieFromWatchlist(movie.id);
  };

  const isMovieInWatchlist = () => {
    return (
      watchlist.find((movie) => selectedMovie.id === movie.id) !== undefined
    );
  };

  const movieReleaseDate = new Date(selectedMovie.release_date);
  // Get the various components of the date
  const year = movieReleaseDate.getFullYear();
  const month = (movieReleaseDate.getMonth() + 1).toString().padStart(2, "0"); // Month is zero-indexed
  const day = movieReleaseDate.getDate().toString().padStart(2, "0");

  // Format the date string as desired
  const formattedRealeseDate = `${month}/${day}/${year}`; // Example format: YYYY-MM-DD

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="5xl">
      <ModalContent>
        {(onClose) => (
          <div
            className="p-8 min-h-[800px] text-white text-shadow relative bg-cover bg-center"
            style={{
              backgroundImage: `url(${backDropImage})`,
            }}
          >
            <ModalHeader className="text-4xl">
              {selectedMovie.title ? selectedMovie.title : selectedMovie.name}
              <span className="px-2 font-normal text-slate-300">({year})</span>
            </ModalHeader>
            <ModalBody className="md:w-1/2 p-8 rounded-lg text-shadow-sm bg-black/40 shadow-lg">
              <div className="flex gap-5">
                <p>R</p>
                <p>1h50m</p>
                <p>{formattedRealeseDate}</p>
              </div>
              <p>{selectedMovie.overview}</p>
              <div className="flex gap-5">
                <p>Horror</p>
                <p>Occult</p>
              </div>
              <div>
                {isMovieInWatchlist() ? (
                  <Button
                    color="primary"
                    onClick={() => handleRemoveFromWatchlist(selectedMovie)}
                  >
                    - Watchlist
                  </Button>
                ) : (
                  <Button
                    color="primary"
                    onClick={() => handleAddToWatchlist(selectedMovie)}
                  >
                    + Watchlist
                  </Button>
                )}
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button>
              <Button color="primary" onPress={onClose}>
                Action
              </Button>
            </ModalFooter>
          </div>
        )}
      </ModalContent>
    </Modal>
  );
}

export default MovieModal;
