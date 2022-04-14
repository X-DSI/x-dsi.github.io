import styled from "styled-components";

export const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;
  position: relative;
  height: 100vh;
  width: 100%;
  margin-top: -80px;
  padding-top: 80px;
`;

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  height: 100%;

  .hero-main {
    /* justify-self: center; */
    .roles {
      font-size: 110px;
    }
    .name-element {
      width: 100%;
      margin: 0 auto;
      font-size: 25px;
    }
    .typist-anime {
      width: 1300px;
      height: 400px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

export const HeroIcons = styled.div`
  text-align: center;

  margin-top: 90px;
`;

export const Icon = styled.a`
  color: inherit;
  border-bottom: none;
  transition: all 0.3s linear;
  :hover {
    border-bottom: 3px solid black;
  }
  svg {
    position: relative;
    bottom: 0px;
    width: 30px;
    height: 30px;
    margin: 0 40px;

    :hover {
      bottom: 6px;
    }
  }
`;
