import styled from "styled-components";

export const Pwrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: -80px;
  padding-top: 80px;
  margin-bottom: -30px;
  padding-bottom: 30px;
`;

export const PhotoContainer = styled.div`
  color: ${({ theme }) => theme.colors.primary};

  .photo-gallery {
    img {
      object-fit: cover;
    }
  }
`;
