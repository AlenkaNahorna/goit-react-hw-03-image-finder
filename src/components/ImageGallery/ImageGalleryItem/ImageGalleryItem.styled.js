import styled from '@emotion/styled';

export const ImageGalleryImg = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  :hover,
  :focus {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;
