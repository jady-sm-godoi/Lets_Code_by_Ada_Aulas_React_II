import { useNavigate } from "react-router-dom";

import * as S from "./style";
import { Button } from "../../components/Button/button";
import { Title } from "../../components/Title/title";
import { Inputs } from "../../ui/Inputs";
import { CheckBox } from "../../ui/CheckBox/checkbox";
import { TextLink } from "../../ui/Text";

export const Login = (props) => {
  const navigate = useNavigate();

  const handleGoToHome = () => {
    navigate("/");
  };

  const handleGoToSignUp = () => {
    navigate("/sign-up");
  };

  return (
    <S.Wrapper>
      <Title />
      <S.InputBox>
        <Inputs placeholder="email" />
        <Inputs type="password" placeholder="Senha" />
      </S.InputBox>
      <CheckBox label="Salvar informações de login" />
      <Button onClick={handleGoToHome} color="#0D73B6" larg="100%">
        Entrar
      </Button>
      <TextLink onClick={handleGoToSignUp} size='small'>Não está cadastrado?</TextLink>
    </S.Wrapper>
  );
};

// onClick={props.changePage}
// onClick={props.goToSignUp}
