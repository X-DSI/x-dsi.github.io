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
    background: white;
  }

  .react-tabs__tab:focus:after {
    background: black;
  }
`;

export const Etabs = styled.div``;
