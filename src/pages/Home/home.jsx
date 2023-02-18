import { useContext, useEffect } from "react";
import { useState } from "react";
import { InstaContext } from "../../App";

import { Feed } from "../../components/Feed";
import { FeedControl } from "../../components/FeedControl";
import { Header } from "../../components/Header";
import { HighLights } from "../../components/HighLights";
import { Marcados } from "../../components/Marcados";
import { NavBar } from "../../components/NavBar";
import { Reels } from "../../components/Reels";
import { apiFetcher } from "../../services";
import * as S from "../../ui/Grid";

export const Home = () => {
  // const [photos, setPhotos] = useState([]);
  //USANDO USECONTEXT PARA PEGAR AS FOTOS NA LISTA DE FOTOS DO USUÁRIO (SÓ PARA TREINAR O CREATECONTEXT)
  const state = useContext(InstaContext)
  const [active, setActive] = useState("feed");
  

  const handleClick = (label) => {
    setActive(label);
  };

  const handleFeedContentChange = () => {
    if (active === "feed") {
      return <Feed photos={state.state.user.photos} />;
    } else if (active === "reels") {
      return <Reels photos={state.state.user.photos} />;
    } else if (active === "marcados") {
      return <Marcados photos={state.state.user.photos} />;
    } else {
      return <h2>Sem conteúdo</h2>;
    }
  };

  useEffect(() => {
    const makeRequest = async () => {
      const response = await apiFetcher("photos");
      //ENVIANDO A LISTA DE FOTOS PARA O USUÁRIO LÁ NO APP.JSX PARA SER DISTRIBUIDO VIA CONTEXTO (SÓ PARA TREINAR)
      state.dispatch({type: "add_photos_user", payload: response})
      // setPhotos(response);
    };

    makeRequest();
  }, []);

  return (
    <S.Grid templateColumns={"20% 80%"}>
      <S.GridItem>
        <NavBar />
      </S.GridItem>
      <S.ContentGrid>
        <Header />
        <HighLights />
        <FeedControl active={active} handleChange={handleClick} />
        {handleFeedContentChange()}
      </S.ContentGrid>
    </S.Grid>
  );
};
