import { useContext } from "react";
import { InstaContext } from "../../App";

export const Photo = () => {
  const { state, dispatch } = useContext(InstaContext);
  return (
    <img
      onClick={() => {
        dispatch({ type: "change_page", payload: "home" });
      }}
      src={state.user.highLightImage.urls.small}
    />
  );
};
