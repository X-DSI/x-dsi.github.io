import React from "react";
import { HeroContainer, HeroIcons, HeroWrapper, Icon } from "./Hero.styled";
import { FaTwitter, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import TypeAnimation from "react-type-animation";

const Hero = () => {
  return (
    <HeroWrapper>
      <HeroContainer>
        <div className="hero-main">
          {/* <h5 className="name-element">
            Hey there, This is Daniel Syles Immanuel!
          </h5> */}
          <div className="typist-anime">
            {/* The Element below should have the React Typist class for Animation */}
            <h3 className="roles">
              I'm a{" "}
              <TypeAnimation
                cursor={true}
                sequence={[
                  "Developer...",
                  2000,
                  "Photographer...",
                  2000,
                  "Human Being...",
                  2000,
                  "Developer...",
                  2000,
                ]}
                wrapper="a"
                repeat={Infinity}
              />
            </h3>
          </div>
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
