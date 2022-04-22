import React from "react";
import {
  CloseButton,
  MenuButton,
  SideContainer,
  SideWrapper,
} from "./SideBar.styled";
import { FaWindowClose } from "react-icons/fa";
import { Link } from "react-router-dom";

const SideBar = (props) => {
  return (
    <SideWrapper isOpen={props.isSideBarOpen}>
      <SideContainer>
        <CloseButton>
          <FaWindowClose onClick={props.toggleSideBar}></FaWindowClose>
        </CloseButton>
        <MenuButton>
          <Link to="/" onClick={props.toggleSideBar}>
            DSI
          </Link>
        </MenuButton>
        <MenuButton>
          <Link to="/experience" onClick={props.toggleSideBar}>
            Experience
          </Link>
        </MenuButton>
        <MenuButton>
          <Link to="/photos" onClick={props.toggleSideBar}>
            Photography
          </Link>
        </MenuButton>
        <MenuButton onClick={props.toggleSideBar}>
          <a href="https://x-dsi.com/rubiks-cube/" target="_blank">
            Rubick's Cube
          </a>
        </MenuButton>
        <MenuButton className="resume-button">
          <a
            href="https://drive.google.com/file/d/1U1pvYO2CjUbB8y9rDg-6taBzobr5s7Aa/view?usp=sharing"
            target="_blank"
          >
            Resume
          </a>
        </MenuButton>
      </SideContainer>
    </SideWrapper>
  );
};

export default SideBar;
