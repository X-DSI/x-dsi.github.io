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
  margin-bottom: -30px;
  padding-bottom: 30px;
`;

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100%;

  .hero-main {
    /* justify-self: center; */

    .name-element {
      width: 100%;
      margin: 0 auto;
      font-size: 25px;
    }
    .typist-anime {
      width: 80vw;
      height: 400px;
      display: flex;
      justify-content: center;
      align-items: center;
      /* background-color: blue; */

      /* @media screen and (max-width: 1400px) {
        width: 1100px;
      }
      @media screen and (max-width: 1100px) {
        width: 992px;
      }
      @media screen and (max-width: 992px) {
        width: 750px;
      }
      @media screen and (max-width: 768px) {
        width: 350px;
      } */
      .roles {
        font-size: 7vw;
        color: ${({ theme }) => theme.colors.primary};
        /* @media screen and (max-width: 1400px) {
          font-size: 100px;
        }
        @media screen and (max-width: 1100px) {
          font-size: 90px;
        }
        @media screen and (max-width: 768px) {
          font-size: 40px; */
        }
      }
    }
  }
`;

export const HeroIcons = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
  margin-top: 90px;
`;

export const Icon = styled.a`
  color: inherit;
  border-bottom: none;
  transition: all 0.3s linear;
  /* :hover {
    border-bottom: 3px solid black;
  } */
  svg {
    position: relative;
    bottom: 0px;
    width: 30px;
    height: 30px;
    margin: 0 60px;

    @media screen and (max-width: 768px) {
      margin: 0 30px;
    }

    :hover {
      bottom: 6px;
    }
  }
`;
