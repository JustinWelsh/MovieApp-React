import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";
import { motion } from "framer-motion";
import { BiMoviePlay } from "react-icons/bi";
import { useWatchlistContext } from "../../context/WatchlistContext";
import { fetchTrailer } from "../../services/MovieService";
import { fadeInUp10 } from "../../_config/animations";

function MovieModal({ isOpen, onOpenChange, selectedMovie }) {
  const [trailer, setTrailer] = useState(null);
  const [showTrailer, setShowTrailer] = useState(null);

  useEffect(() => {
    if (!isOpen) {
      setShowTrailer(false);
      return;
    }

    setTrailer(null);

    const fetchData = async () => {
      try {
        const trailerData = await fetchTrailer(selectedMovie.id);
        setTrailer(trailerData);
      } catch (error) {
        console.error("Error Fetching Trailer Data:", error);
      }
    };

    fetchData();
  }, [isOpen, selectedMovie]);
  const backDropImage = `https://image.tmdb.org/t/p/original${selectedMovie.backdrop_path}`;

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
            {showTrailer ? (
              <iframe
                className="rounded-xl"
                width="100%"
                height="750"
                src={`https://www.youtube.com/embed/${trailer.key}`}
                title="Movie Trailer"
                frameBorder="0"
                allowFullScreen
              />
            ) : (
              <MovieDetails
                selectedMovie={selectedMovie}
                trailer={trailer}
                setShowTrailer={setShowTrailer}
              />
            )}
            <ModalFooter>
              <Button
                color="danger"
                variant="light"
                onPress={() => {
                  onClose();
                  setShowTrailer(false);
                }}
              >
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

const MovieDetails = ({ selectedMovie, trailer, setShowTrailer }) => {
  const { watchlist, addMovieToWatchlist, removeMovieFromWatchlist } =
    useWatchlistContext();

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

  return (
    <>
      <ModalHeader className="text-4xl">
        {selectedMovie.title ? selectedMovie.title : selectedMovie.name}
        <span className="px-2 font-normal text-slate-300">
          <ReleaseDate date={selectedMovie.release_date} type="year" />
        </span>
      </ModalHeader>
      <ModalBody className="md:w-1/2 p-8 rounded-lg text-shadow-sm bg-black/40 shadow-lg">
        <div className="flex gap-5">
          <p>R</p>
          <p>1h50m</p>
          <ReleaseDate date={selectedMovie.release_date} type="full" />
        </div>
        <p>{selectedMovie.overview}</p>
        <div className="flex gap-5">
          <p>Horror</p>
          <p>Occult</p>
        </div>
        <div className="flex gap-3">
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
          {trailer && (
            <motion.button {...fadeInUp10}>
              <Button color="primary" onClick={() => setShowTrailer(true)}>
                <BiMoviePlay />
                Play Trailer
              </Button>
            </motion.button>
          )}
        </div>
      </ModalBody>
    </>
  );
};

/**
 * @typedef {Object} ReleaseDateProps
 * @property {string} date - ISO date string (e.g. "2024-03-11")
 * @property {"full"|"year"} type - Display format: "full" for MM/DD/YYYY, "year" for year only
 */

/** @param {ReleaseDateProps} props */
const ReleaseDate = ({ date, type }) => {

  if (!date) {
     console.warn("No date was recieved in ReleaseDate component..")
     return
  }

  const dateObj = new Date(date);

  const year = dateObj.getFullYear();
  const month = (dateObj.getMonth() + 1).toString().padStart(2, "0");
  const day = dateObj.getDate().toString().padStart(2, "0");

  return (
    <>
      {(!type || type === "full") && <span>{`${month}/${day}/${year}`}</span>}
      {type === "year" && <span>{`${year}`}</span>}
    </>
  );
};

export default MovieModal;
