import styled from "styled-components";

export const SideWrapper = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  transition: all 0.3s linear;
  background-color: ${({ theme }) => theme.colors.secondary};
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

  .resume-button {
    border-radius: 25px;
    border: 2px solid ${({ theme }) => theme.colors.primary};
    padding: 20px;
  }
`;

export const MenuButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  outline: inherit;
  text-decoration: none;
  margin: 24px;
  list-style: none;
  text-align: center;
  font-size: 30px;
  color: ${({ theme }) => theme.colors.primary};
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const CloseButton = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  margin: 45px;
  color: ${({ theme }) => theme.colors.primary};

  svg {
    width: 30px;
    height: 30px;
  }
`;
