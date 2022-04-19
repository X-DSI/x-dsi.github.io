import styled from "styled-components";

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  width: 100%;
  background-color: ${(props) => props.theme.colors.background_1};
  margin: 0 auto;
  .header {
    z-index: 3;
  }
`;

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1500px;
  width: 100%;

  margin: 0 auto;

  @media screen and (max-width: 1500px) {
    max-width: 100%;
  }
  .header {
    z-index: 3;
  }
`;

export const LayoutContent = styled.div`
  /* display: flex;
  flex-direction: column; */
`;
