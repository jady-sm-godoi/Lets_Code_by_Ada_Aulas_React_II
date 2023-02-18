import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { InstaContext } from "../../App";

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

export const NavBar = () => {
  const state = useContext(InstaContext);

  // const navigate = useNavigate();

  const handleGoToLogin = () => {
    state.dispatch({ type: "change_page", payload: "login" });
    // navigate("/login");
  };

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
      <NavItem onClick={handleGoToLogin} text="Sair" />
    </S.NavbarWrapper>
  );
};

// onClick={props.onClick}
