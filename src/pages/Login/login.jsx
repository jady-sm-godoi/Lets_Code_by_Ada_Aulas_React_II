import * as S from "./style";
import { Button } from "../../components/Button/button";
import { Title } from "../../components/Title/title";
import { Inputs } from "../../ui/Inputs";
import { CheckBox } from "../../ui/CheckBox/checkbox";
import { TextLink } from "../../ui/Text";

export const Login = (props) => {
  return (
    <S.Wrapper>
      <Title />
      <S.InputBox>
        <Inputs placeholder="email" />
        <Inputs type="password" placeholder="Senha" />
      </S.InputBox>
      <CheckBox label="Salvar informações de login" />
      <Button onClick={props.changePage} color="#0D73B6" larg="100%">
        Entrar
      </Button>
      <TextLink onClick={props.goToSignUp} size='small'>Não está cadastrado?</TextLink>
    </S.Wrapper>
  );
};
