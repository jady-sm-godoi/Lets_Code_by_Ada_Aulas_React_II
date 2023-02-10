import "./App.css";
import * as S from "./ui/Grid/";

import { NavBar } from "./components/NavBar";
import { Header } from "./components/Header";
import { HighLights } from "./components/HighLights";
import { Feed } from "./components/Feed";
import { Reels } from "./components/Reels";
import { Marcados } from "./components/Marcados";

import { useEffect, useState } from "react";
import { apiFetcher } from "./services";
import { FeedControl } from "./components/FeedControl";

function App() {
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

  return (
    <S.Grid templateColumns={"20% 80%"}>
      <S.GridItem>
        <NavBar />
      </S.GridItem>
      <S.ContentGrid>
        <Header />
        <HighLights />
        <FeedControl active={active} handleChange={handleClick}/>
        {handleFeedContentChange()}
      </S.ContentGrid>
    </S.Grid>
  );
}

export default App;
