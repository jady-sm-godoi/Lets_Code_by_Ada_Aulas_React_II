import { FeedItem } from "../FeedItem/feedItem";
import * as S from "./style";

export const Marcados = (props) => {
  return (
    <S.Wrapper >
      {props.photos.map((item) => (
        <FeedItem key={item.id} imageData={item.urls.small} />
      ))}
    </S.Wrapper>
  );
};
