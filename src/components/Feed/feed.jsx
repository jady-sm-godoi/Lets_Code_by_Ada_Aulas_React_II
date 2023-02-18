import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { Inputs } from "../../ui/Inputs";
import { Button } from "../../ui/Button";
import { FeedItem } from "../FeedItem/feedItem";
import * as S from "./style";
import { InstaContext } from "../../App";
import { Text } from "../../ui/Text";
import { Loading } from "../../ui/Loading";

export const Feed = (props) => {
  const state = useContext(InstaContext);

  const [search, setSearch] = useState("");
  const [feedArray, setFeedArray] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    try {
      setFeedArray(props.photos);
    } catch {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
    return (
      //reset da lista de photos e da imagem selecionada caso tenha sido clicado em alguma imagem
      ()=>setFeedArray([]),
      state.dispatch({ type: "remove_highlight_image"})
    );
  }, [props.photos]);

  const handleInputSearch = (e) => {
    setSearch(e.currentTarget.value);
  };

  const choosedImage = useMemo(
    () =>
      props.photos.filter((item) => {
        if (item.user.instagram_username === search) {
          return item;
        }
      }),
    [search]
  );

  const changeFeedArray = () => {
    choosedImage.length > 0 && setFeedArray(choosedImage);
  };

  const handleOpenPhoto = (imageId) => {
    state.dispatch({ type: "add_highlight_image", payload: imageId });
    state.dispatch({type: "change_page", payload: "photo"})
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
      {isLoading && <Loading />}
      {hasError && <Text>Epa, deu ruim!</Text>}
      {feedArray.map((item) => (
        <FeedItem
          key={item.id}
          author={item.user.instagram_username}
          imageData={item.urls.small}
          onClick={() => handleOpenPhoto(item.id)}
        />
      ))}
    </S.Wrapper>
  );
};
