import styled from "styled-components";

export const WrapperFeedButton = styled.div`
  background-color: transparent;
  border: 0;
  font-size: 20px;
  padding: 5px 10px;
  cursor: pointer;
  ${(props) => props.active && "border-top: 1px solid white"}
`;
