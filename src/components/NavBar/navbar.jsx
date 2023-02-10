import { NavItem } from "../NavItem";
import { Title } from "../Title/title";
import * as S from "./style";

const links = [
  "Página inicial",
  "Pesquisa",
  "Explorar",
  "Reels",
  "Mensagens",
  "Notificações",
  "Criar",
  "Perfil",
];

export const NavBar = (props) => {
  return (
    <S.NavbarWrapper>
      <S.Box>
        <S.Box>
          <Title />
        </S.Box>
        <S.Box>
          {links.map((link) => (
            <NavItem key={link} text={link} />
          ))}
        </S.Box>
      </S.Box>
      <NavItem text="Mais" />
    </S.NavbarWrapper>
  );
};
