import styled from "styled-components";

export const Ewrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 100%;
`;

export const Econtainer = styled.div`
  .e-roles {
    font-size: 100px;
    margin-bottom: 50px;
    color: ${({ theme }) => theme.colors.primary};
  }

  .react-tabs__tab--selected {
    /* background-color: lightblue; */
    /* border-color: red; */
    background: lightgray;
  }

  .react-tabs__tab:focus:after {
    background: lightblue;
  }
`;

export const Etabs = styled.div``;
