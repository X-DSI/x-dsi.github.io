import React, { useState, useCallback } from "react";
import { PhotoContainer, Pwrapper } from "./Photography.styled";
import Gallery from "react-photo-gallery";
import photos from "../../data/photos";
import Carousel, { Modal, ModalGateway } from "react-images";

const Photography = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  // const openLightbox = useCallback((event, { photo, index }) => {
  //   setCurrentImage(index);
  //   setViewerIsOpen(true);
  // }, []);

  // const closeLightbox = () => {
  //   setCurrentImage(0);
  //   setViewerIsOpen(false);
  // };
  return (
    <Pwrapper>
      <PhotoContainer>
        {/* <h1 className="photoTitle">My Photos...</h1> */}
        <div className="photo-gallery">
          <Gallery photos={photos} margin={5} />
          <ModalGateway>
            {viewerIsOpen ? (
              <Modal>
                <Carousel
                  currentIndex={currentImage}
                  views={photos.map((x) => ({
                    ...x,
                    srcset: x.srcSet,
                    caption: x.title,
                  }))}
                />
              </Modal>
            ) : null}
          </ModalGateway>
        </div>
      </PhotoContainer>
    </Pwrapper>
  );
};

export default Photography;
