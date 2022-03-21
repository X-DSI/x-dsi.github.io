import styled from "styled-components";

export const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: lightgray;
  z-index: 1;
  position: relative;
  height: 100vh;
  width: 100vw;
  margin-top: -80px;
`;

export const HeroContainer = styled.div`
  .roles {
    font-size: 100px;
  }
  .name-element {
    font-size: 25px;
  }
`;

export const HeroIcons = styled.div`
  text-align: center;
`;
