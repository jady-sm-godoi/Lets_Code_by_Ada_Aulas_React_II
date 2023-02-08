import "./App.css";

import { NavBar } from "./components/NavBar";
import { Header } from "./components/Header";
import { HighLights } from "./components/HighLights";

import * as S from "./ui/Grid/";
import { useEffect } from "react";
import { apiFetcher } from "./services";



function App() {

  useEffect(() => {
    const makeRequest = async () =>{
      const response = await apiFetcher("photos")
      console.log(response)
    }

    makeRequest()
    
  }, []);

  return (
    <S.Grid templateColumns={"20% 80%"}>
      <S.GridItem>
        <NavBar />
      </S.GridItem>
      <S.ContentGrid>
        <Header />
        <HighLights />
      </S.ContentGrid>
    </S.Grid>
  );
}

export default App;
