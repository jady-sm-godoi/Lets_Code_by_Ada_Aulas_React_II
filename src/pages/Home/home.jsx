import { useEffect } from "react";
import { useState } from "react";
import { Feed } from "../../components/Feed";
import { FeedControl } from "../../components/FeedControl";
import { Header } from "../../components/Header";
import { HighLights } from "../../components/HighLights";
import { Marcados } from "../../components/Marcados";
import { NavBar } from "../../components/NavBar";
import { Reels } from "../../components/Reels";
import { apiFetcher } from "../../services";
import * as S from "../../ui/Grid";

export const Home = (props) => {

  const [photos, setPhotos] = useState([]);
  const [active, setActive] = useState('feed')

  const handleClick = (label) => {
    setActive(label)
  }

  const handleFeedContentChange = () => {
    if(active === 'feed'){
      return <Feed photos={photos}/>
    } else if (active === 'reels'){
      return <Reels photos={photos}/>
    } else if(active === 'marcados'){
      return <Marcados photos={photos} />
    } else {
      return <h2>Sem conteúdo</h2>
    }
  }

  useEffect(() => {
    const makeRequest = async () => {
      const response = await apiFetcher("photos");
      setPhotos(response);
    };

    makeRequest();
  }, []);

    return(
        <S.Grid templateColumns={"20% 80%"}>
        <S.GridItem>
          <NavBar onClick={props.changePage}/>
        </S.GridItem>
        <S.ContentGrid>
          <Header />
          <HighLights />
          <FeedControl active={active} handleChange={handleClick}/>
          {handleFeedContentChange()}
        </S.ContentGrid>
      </S.Grid>
    )
}