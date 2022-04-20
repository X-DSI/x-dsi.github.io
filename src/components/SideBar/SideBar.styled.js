import styled from "styled-components";

export const SideWrapper = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: aqua;
  z-index: 9;

  opacity: ${(props) => (props.isOpen ? "100%" : "0%")};
  left: ${(props) => (props.isOpen ? "0%" : "100%")};
`;

export const SideContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const MenuButton = styled.button`
  margin: 24px;
`;

export const CloseButton = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  margin: 24px;
`;
