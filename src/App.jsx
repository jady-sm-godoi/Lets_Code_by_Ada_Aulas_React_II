import "./App.css";
import { Avatar } from "./components/avatar";
import { Button } from "./components/button";
import { Header } from "./components/header";
import { NavItem } from "./components/nav-item";
import { Navbar } from "./components/navbar";
import { Text } from "./components/Text";
import { Title } from "./components/title";

const links = [
  "Página inicial",
  "Pesquisa",
  "Explorar",
  "Reels",
  "Mensagens",
  "Notificações",
  "Criar",
  "Perfil",
  "Mais",
];

function App() {
  return (
    <>
      <Navbar>
        <Title />
        {links.map((link) => (
          <NavItem key={link} text={link} />
        ))}
      </Navbar>
      <Header>
        <Avatar image={"public/images/react.svg"} />
        <Text bold>@adatechbr</Text>
        <Button>Seguindo</Button>
        <Button>Enviar mensagem</Button>
        <Button>+amigo</Button>
        <Button>...</Button>
        <Text>211 publicações</Text>
        <Text>44,2 mil seguidores</Text>
        <Text>2 seguindo</Text>
        <Text>Ada Tech</Text>
        <Text>Educação</Text>
        <Text>Ada. A Nova Educação.</Text>
        <Text>beacons.ai/adatechbr</Text>
        <Text>
          Seguido(a) por machado_bru, caioasilva__, fellipearb e outras 2
          pessoas
        </Text>
      </Header>
    </>
  );
}

export default App;
