import * as S from "./style";
import { Button } from "../../components/Button/button";
import { Title } from "../../components/Title/title";
import { Inputs } from "../../ui/Inputs";

export const SignUp = (props) => {
  return (
    <S.Wrapper>
      <Title />
      <S.InputBox>
        <Inputs placeholder="nome" />
        <Inputs type='email' placeholder="email" />
        <Inputs type='number' placeholder="idade" />
        <Inputs type="password" placeholder="Senha" />
        <Inputs type="password" placeholder="Repita sua senha" />
      </S.InputBox>
      <Button onClick={props.changePage} color="#0D73B6" larg="100%">
        Salvar
      </Button>
    </S.Wrapper>
  );
};
