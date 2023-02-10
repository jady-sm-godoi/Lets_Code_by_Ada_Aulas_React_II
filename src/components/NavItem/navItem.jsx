import { Text } from "../../ui/Text";
import { Wrapper } from "./style";

export const NavItem = (props) => {
  return (
    <Wrapper>
      <Text>{props.text}</Text>
    </Wrapper>
  );
};
