import styled from "styled-components";

export const Hwrapper = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  z-index: 10;
  height: 80px;
  width: 100%;
  /* margin: 20px; */
`;

export const Hcontainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.colors.primary};
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

  li {
    display: flex;
    align-items: center;
    /* height: 100%; */
    padding: 20px 0px;
    margin: 20px 0px;
    border-bottom: none;
    transition: all 0.3s linear;
    :hover {
      border-bottom: 3px solid black;
    }
  }
`;

export const Hlogo = styled.a`
  font-weight: 900;
  font-size: 40px;
`;
