import React from "react";
import { PhotoContainer, Pwrapper } from "./Photography.styled";
import Gallery from "react-photo-gallery";
import photos from "../../data/photos";

const Photography = () => {
  return (
    <Pwrapper>
      <PhotoContainer>
        {/* <h1 className="photoTitle">My Photos...</h1> */}
        <div className="photo-gallery">
          <Gallery photos={photos} margin={5} />
        </div>
      </PhotoContainer>
    </Pwrapper>
  );
};

export default Photography;
