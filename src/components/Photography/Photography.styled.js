import styled from "styled-components";

export const Pwrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

export const PhotoContainer = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  .photoTitle {
    font-size: 80px;
  }
`;
