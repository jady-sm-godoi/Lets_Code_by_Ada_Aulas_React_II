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