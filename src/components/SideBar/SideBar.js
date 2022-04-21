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
          <Link to="/experience">Experience</Link>
        </MenuButton>
        <MenuButton>
          <Link to="/photos">Photography</Link>
        </MenuButton>
        <MenuButton>
          <a href="https://x-dsi.com/rubiks-cube/" target="_blank">
            Rubick's Cube
          </a>
        </MenuButton>
        <MenuButton>
          <a href="/resume">Resume</a>
        </MenuButton>
      </SideContainer>
    </SideWrapper>
  );
};

export default SideBar;
