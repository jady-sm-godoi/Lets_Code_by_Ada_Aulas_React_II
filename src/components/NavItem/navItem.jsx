import { Text } from "../../ui/Text";
import { Wrapper } from "./style";

export const NavItem = (props) => {
  return (
    <Wrapper onClick={props.onClick}>
      <Text>{props.text}</Text>
    </Wrapper>
  );
};
