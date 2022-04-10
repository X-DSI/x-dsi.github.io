import React from "react";
import { HeroContainer, HeroIcons, HeroWrapper, Icon } from "./Hero.styled";
import { FaTwitter, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <HeroWrapper>
      <HeroContainer>
        <div className="hero-main">
          <h5 className="name-element">
            Hey there, This is Daniel Syles Immanuel!
          </h5>
          {/* The Element below should have the React Typist class for Animation */}
          <h1 className="roles">I'm a Developer...</h1>
        </div>
        <HeroIcons>
          <Icon href="https://twitter.com/SylesDaniel" target="_blank">
            <FaTwitter />
          </Icon>
          <Icon href="https://github.com/X-DSI" target="_blank">
            <FaGithub />
          </Icon>
          <Icon href="https://www.instagram.com/x.dsi.raw/" target="_blank">
            <FaInstagram />
          </Icon>
          <Icon href="https://www.linkedin.com/in/xdsi/" target="_blank">
            <FaLinkedin />
          </Icon>
        </HeroIcons>
      </HeroContainer>
    </HeroWrapper>
  );
};

export default Hero;
