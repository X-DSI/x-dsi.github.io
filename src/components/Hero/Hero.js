import React from "react";
import { HeroContainer, HeroIcons, HeroWrapper } from "./Hero.styled";

const Hero = () => {
  return (
    <HeroWrapper>
      <HeroContainer>
        <h5 className="name-element">
          Hey there, This is Daniel Syles Immanuel!
        </h5>
        {/* The Element below should have the React Typist class for Animation */}
        <h1 className="roles">I'm a Developer...</h1>
        <HeroIcons>
          <p>Icons</p>
        </HeroIcons>
      </HeroContainer>
    </HeroWrapper>
  );
};

export default Hero;
