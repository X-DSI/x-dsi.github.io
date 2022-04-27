import styled from "styled-components";

export const Hwrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  z-index: 10;
  height: 80px;
  width: 100%;
  /* margin: 20px; */
`;

export const Hcontainer = styled.nav`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.colors.primary};

  .togglebutton {
    margin: 20px;
  }

  .desktop-dsi {
    display: flex;
    @media screen and (max-width: 768px) {
      display: none;
    }
  }

  .mobile-dsi {
    display: none;
    @media screen and (max-width: 768px) {
      display: flex;
    }
  }
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const Hul = styled.ul`
  display: flex;
  list-style: none;
  text-align: center;
  gap: 50px;
  margin: 0 auto;
  font-size: 20px;
  height: 100%;
  color: ${({ theme }) => theme.colors.primary};

  .resume-button {
    border-radius: 25px;
    border: 2px solid ${({ theme }) => theme.colors.primary};
    padding: 20px;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
  li {
    display: flex;
    align-items: center;
    /* height: 100%; */
    padding: 20px 0px;
    margin: 20px 0px;
    border-bottom: none;
    transition: all 0.3s linear;
    a,
    a:visited,
    a:hover,
    a:active {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.primary};
    }
    :hover {
      border-bottom: 3px solid ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const Hlogo = styled.div`
  font-weight: 900;
  font-size: 40px;
  margin: 20px;
  a,
  a:visited,
  a:hover,
  a:active {
    text-decoration: none;
    color: inherit;
  }
`;

export const MobileIcon = styled.div`
  display: none;
  margin: 10px;
  /* margin-left: auto; */

  @media screen and (max-width: 768px) {
    display: flex;
    align-self: center;
    margin: 20px;
    color: ${({ theme }) => theme.colors.primary};
    .fabars {
      width: 30px;
      height: 30px;
    }
  }
`;
