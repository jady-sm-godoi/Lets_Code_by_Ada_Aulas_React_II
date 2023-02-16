import { useCallback, useEffect, useMemo, useState } from "react";
import { Inputs } from "../../ui/Inputs";
import { Button } from "../../ui/Button";
import { FeedItem } from "../FeedItem/feedItem";
import * as S from "./style";

export const Feed = (props) => {
  const [search, setSearch] = useState("");
  const [feedArray, setFeedArray] = useState([]);
  
  useEffect(() => {
    setFeedArray(props.photos);
    return () => setFeedArray([]);
  },[props.photos]);

  const handleInputSearch = (e) => {
    setSearch(e.currentTarget.value);
  };

  const choosedImage = useMemo(() =>
    props.photos.filter((item) => {
      if (item.user.instagram_username === search) {
        return item;
      }
    })
  );

  const changeFeedArray = () => {
    setFeedArray(choosedImage);
  };

  return (
    <S.Wrapper>
      <S.InputWrapper>
        <Inputs
          placeholder="Busque sua imagem..."
          onChange={handleInputSearch}
        />
        <Button onClick={changeFeedArray}>Go</Button>
      </S.InputWrapper>
      {feedArray.map((item) => (
        <FeedItem
          key={item.id}
          author={item.user.instagram_username}
          imageData={item.urls.small}
        />
      ))}
    </S.Wrapper>
  );
};
