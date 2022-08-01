import React from "react";
import { HeroContainer, HeroIcons, HeroWrapper, Icon } from "./Hero.styled";
import {
  FaTwitter,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaStackOverflow,
} from "react-icons/fa";
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
              I'm{" "}
              <TypeAnimation
                cursor={true}
                sequence={[
                  "a Developer..",
                  2000,
                  "a Photographer..",
                  2000,
                  "an Editor..",
                  2000,
                  "a DOP..",
                  2000,
                  "a Colorist..",
                  2000,
                  "a Human Being..",
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
          <Icon
            href="https://stackoverflow.com/users/18492241/daniel-syles-immanuel"
            target="_blank"
          >
            <FaStackOverflow />
          </Icon>
        </HeroIcons>
      </HeroContainer>
    </HeroWrapper>
  );
};

export default Hero;
