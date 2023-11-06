import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Card,
  CardHeader,
  Image,
} from "@nextui-org/react";
function MovieModal({ isOpen, onOpenChange, selectedMovie }) {
  const backDropImage = `https://image.tmdb.org/t/p/original${selectedMovie.backdrop_path}`;
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="5xl">
      <ModalContent>
        {(onClose) => (
          <div
            className="p-8 min-h-[800px] bg-slate-300 text-white text-shadow relative bg-cover bg-center"
            style={{
              backgroundImage: `url(${backDropImage})`,
            }}
          >
            <ModalHeader className="text-7xl">
              {selectedMovie.title}
            </ModalHeader>
            <ModalBody className="w-1/2 text-shadow-sm">
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
                <Button color="primary">+ Watchlist</Button>
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
