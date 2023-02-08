import styled from "styled-components";
import { Text } from "../../ui/Text";

export const Wrapper = styled.div`
  display: flex;
  gap: 30px;
  text-align: center;
`;

export const HighLightItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
`;

export const HighLightText = styled(Text)`
  margin-top: 10px;
  width: 90px;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
  white-space: nowrap;
`;
