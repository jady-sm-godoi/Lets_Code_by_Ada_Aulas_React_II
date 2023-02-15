import { useCallback, useEffect, useMemo, useState } from "react";
import { Inputs } from "../../ui/Inputs";
import { Button } from "../../ui/Button";
import { FeedItem } from "../FeedItem/feedItem";
import * as S from "./style";

export const Feed = (props) => {
  const [search, setSearch] = useState("");
  const [feedContent, setFeedContent] = useState(
    props.photos.map((item) => (
      <FeedItem
        key={item.id}
        author={item.user.instagram_username}
        imageData={item.urls.small}
      />
    ))
  );

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

  const feedItemSearched = useCallback(() => {
    return (
      <FeedItem
        key={choosedImage[0].id}
        author={choosedImage[0].user.instagram_username}
        imageData={choosedImage[0].urls.small}
      />
    );
  });

  const showSearchedItem = () => {
    setFeedContent(
      choosedImage[0]
        ? feedItemSearched()
        : props.photos.map((item) => (
            <FeedItem
              key={item.id}
              author={item.user.instagram_username}
              imageData={item.urls.small}
            />
          ))
    );
  };

  return (
    <S.Wrapper>
      <S.InputWrapper>
        <Inputs
          placeholder="Busque sua imagem..."
          onChange={handleInputSearch}
        />
        <Button onClick={showSearchedItem}>Go</Button>
      </S.InputWrapper>
      {feedContent}
    </S.Wrapper>
  );
};
