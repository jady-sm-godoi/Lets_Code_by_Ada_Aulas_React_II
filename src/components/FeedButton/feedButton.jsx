import { Text } from "../../ui/Text";
import { WrapperFeedButton } from "./style";

export const FeedButton = (props) => {
  return (
    <WrapperFeedButton active={props.active} onClick={props.onClick}>
      <Text color={props.active ? "#FFF" : "#8e8e8e"}>{props.label}</Text>
    </WrapperFeedButton>
  );
};
