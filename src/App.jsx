import "./App.css";

import { Header } from "./components/header";
import { Navbar } from "./components/NavBar/navbar";

import * as S from "./ui/Grid/"

function App() {
  return (
    <S.Grid templateColumns={"20% 80%"}>
      <S.GridItem>
        <Navbar />
      </S.GridItem>
      <S.GridItem>
        <Header />
      </S.GridItem>
    </S.Grid>
  );
}

export default App;