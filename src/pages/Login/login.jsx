import { useNavigate } from "react-router-dom";
import { useContext, useRef, useState } from "react";

import * as S from "./style";
import { users } from "../../services/data";
import { Button } from "../../ui/Button";
import { Title } from "../../components/Title/title";
import { Inputs } from "../../ui/Inputs";
import { CheckBox } from "../../ui/CheckBox/checkbox";
import { Text, TextLink } from "../../ui/Text";
import { InstaContext } from "../../App";

export const Login = () => {
  const state = useContext(InstaContext) 
  const [ showError, setShowError] = useState(false)
  // const navigate = useNavigate();

  const userRef = useRef(null);
  const passwordlRef = useRef(null);

  const handleToHome = () => {
    const inputUserEmail = users.find(
      (user) => user.usuario === userRef.current.value
    );
    const inputUserPassword = users.find(
      (user) => user.password === passwordlRef.current.value
    );

    if (inputUserEmail && inputUserPassword) {
      state.dispatch({type: "change_page", payload: 'home'})
      state.dispatch({type: "add_user", payload: userRef.current.value})
      // navigate("/");
    } else {
      setShowError(true)
      // state.dispatch({type: "change_page", payload: 'signup'})
      // navigate("/sign-up");
    }
  };

  const handleGoToSignUp = () => {
    state.dispatch({type: "change_page", payload: 'signup'})
    // navigate("/sign-up");
  };

  return (
    <S.Wrapper>
      <Title />
      {showError && <Text size='small' color="red">usuário não encontrado!</Text>}
      <S.InputBox>
        <Inputs ref={userRef} placeholder="usuário" />
        <Inputs ref={passwordlRef} type="password" placeholder="Senha" />
      </S.InputBox>
      
      <CheckBox label="Salvar informações de login" />
      <Button
        onClick={handleToHome}
        color="#0D73B6"
        larg="100%"
      >
        Entrar
      </Button>
      <TextLink onClick={handleGoToSignUp} size="small">
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
