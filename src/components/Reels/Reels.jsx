import { ReelsItem } from "../ReelsItem";
import * as S from "./style";

export const Reels = (props) => {
  return (
    <S.Wrapper>
      {props.photos.map((item) => (
        <ReelsItem key={item.id} imageData={item.urls.small} />
      ))}
    </S.Wrapper>
  );
};
