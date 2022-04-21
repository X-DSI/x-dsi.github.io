import React from "react";
import {
  CloseButton,
  MenuButton,
  SideContainer,
  SideWrapper,
} from "./SideBar.styled";
import { FaWindowClose } from "react-icons/fa";

const SideBar = (props) => {
  return (
    <SideWrapper isOpen={props.isSideBarOpen}>
      <SideContainer>
        <CloseButton>
          <FaWindowClose onClick={props.toggleSideBar}></FaWindowClose>
        </CloseButton>
        <MenuButton>Experience</MenuButton>
        <MenuButton>Photography</MenuButton>
        <MenuButton>Rubick's Cube</MenuButton>
        <MenuButton>Resume</MenuButton>
      </SideContainer>
    </SideWrapper>
  );
};

export default SideBar;
