import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: ${(prop) => prop.templateColumns};

  height: 100vh;

  position: relative;
`;

export const GridItem = styled.div`
  position: relative;
`;

export const ContentGrid = styled.div`
  position: relative;
  max-width: 100%;
  margin: 0 auto 30px;
`;