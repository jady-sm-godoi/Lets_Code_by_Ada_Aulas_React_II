import styled from "styled-components";

export const WrapperFeedButton = styled.div`
  background-color: transparent;
  border: 0;
  font-size: 20px;
  padding: 5px 10px;
  ${(props) => props.active && "border-top: 1px solid white"}
`;
