import styled from "styled-components";

export const Ewrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
  max-height: max(100vh, 100%);
  margin-top: -80px;
  padding-top: 80px;
  margin-bottom: -30px;
  padding-bottom: 30px;
`;

export const Econtainer = styled.div`
  .e-roles {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 70vw;
    font-size: 7vw;
    margin-top: 40px;
    margin-bottom: 50px;
    color: ${({ theme }) => theme.colors.primary};
  }
  li {
    color: ${({ theme }) => theme.colors.primary};
  }
  .react-tabs__tab--selected {
    /* background-color: lightblue; */
    /* border-color: red; */
    background: ${({ theme }) => theme.colors.secondary};
  }

  .react-tabs__tab:focus:after {
    background: ${({ theme }) => theme.colors.primary};
  }
  .react-tabs__tab-panel {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Etabs = styled.div`
  width: 80vw;

  .tab-panel {
    display: flex;
    align-items: center;
    gap: 20px;

    @media screen and (max-width: 768px) {
      display: flex;
      flex-direction: column;
    }
  }
`;
