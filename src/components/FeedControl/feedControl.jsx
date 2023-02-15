import { useState } from "react";
import { Inputs } from "../../ui/Inputs";
import { FeedButton } from "../FeedButton/feedButton";
import { Wrapper } from "./style";

export const FeedControl = (props) => {
  return (
    <Wrapper>
      <FeedButton
        active={props.active == "feed"}
        onClick={() => props.handleChange("feed")}
        label={"Feed"}
      />
      <FeedButton
        active={props.active == "reels"}
        onClick={() => props.handleChange("reels")}
        label={"Reels"}
      />
      <FeedButton
        active={props.active == "marcados"}
        onClick={() => props.handleChange("marcados")}
        label={"Marcados"}
      />
    </Wrapper>
  );
};
