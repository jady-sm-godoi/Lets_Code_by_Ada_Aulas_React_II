import { useNavigate } from "react-router-dom";

import * as S from "./style";
import { users } from "../../services/data";
import { Button } from "../../ui/Button";
import { Title } from "../../components/Title/title";
import { Inputs } from "../../ui/Inputs";
import { CheckBox } from "../../ui/CheckBox/checkbox";
import { TextLink } from "../../ui/Text";
import { useRef } from "react";

export const Login = (props) => {
  // const navigate = useNavigate();
  const emailRef = useRef(null);
  const passwordlRef = useRef(null);

  const handleToLogin = () => {
    const inputUserEmail = users.find(
      (user) => user.email === emailRef.current.value
    );
    const inputUserPassword = users.find(
      (user) => user.password === passwordlRef.current.value
    );

    if (inputUserEmail && inputUserPassword) {
      // navigate("/");
    } else {
      alert("usuário não encontrado!");
      // navigate("/sign-up");
    }
  };

  const handleGoToSignUp = () => {
    // navigate("/sign-up");
  };

  return (
    <S.Wrapper>
      <Title />
      <S.InputBox>
        <Inputs ref={emailRef} placeholder="email" />
        <Inputs ref={passwordlRef} type="password" placeholder="Senha" />
      </S.InputBox>
      <CheckBox label="Salvar informações de login" />
      <Button
        onClick={() => props.changePage("home")}
        color="#0D73B6"
        larg="100%"
      >
        Entrar
      </Button>
      <TextLink onClick={() => props.changePage("signup")} size="small">
        Não está cadastrado?
      </TextLink>
    </S.Wrapper>
  );
};

//PARA NAVEGAÇAO COM REACT-ROUTER-DOM
// onClick={handleToLogin}

//PARA NAVEGACÁO COM USEESTATE E USEREDUCER
// onClick={props.changePage}
// onClick={props.goToSignUp}
