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
  const { watchlist, addMovieToWatchlist } = useWatchlistContext();

  const backDropImage = `https://image.tmdb.org/t/p/original${selectedMovie.backdrop_path}`;

  const handleAddToWatchlist = (movie) => {
    addMovieToWatchlist(movie);
    console.log(watchlist);
  };
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
            <ModalHeader className="text-7xl">
              {selectedMovie.title ? selectedMovie.title : selectedMovie.name}
            </ModalHeader>
            <ModalBody className="md:w-1/2 p-8 rounded-lg text-shadow-sm bg-black/40 shadow-lg">
              <div className="flex gap-5">
                <p>R</p>
                <p>1h50m</p>
                <p>2023</p>
              </div>
              <p>{selectedMovie.overview}</p>
              <div className="flex gap-5">
                <p>Horror</p>
                <p>Occult</p>
              </div>
              <div>
                <Button
                  color="primary"
                  onClick={() => handleAddToWatchlist(selectedMovie)}
                >
                  + Watchlist
                </Button>
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
