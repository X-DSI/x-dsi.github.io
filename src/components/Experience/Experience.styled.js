import styled from "styled-components";

export const Ewrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
  margin-top: -80px;
  padding-top: 80px;
  margin-bottom: -30px;
  padding-bottom: 30px;
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
    background: black;
  }

  .react-tabs__tab:focus:after {
    background: black;
  }
`;

export const Etabs = styled.div``;
