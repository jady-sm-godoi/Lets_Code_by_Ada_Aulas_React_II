import styled from "styled-components";

export const Wrapper = styled.div`
  cursor: pointer;
  margin: 0 10px 20px 10px;
  &:hover {
    opacity: 60%;
  }
`;

export const ImageFeed = styled.img`
  width: 280px;
  height: 280px;
  object-fit: cover;
`;
