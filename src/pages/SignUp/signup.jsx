import { useNavigate } from "react-router-dom";
import { useState } from "react";

import * as S from "./style";

import { Button } from "../../ui/Button";
import { Title } from "../../components/Title";
import { Inputs } from "../../ui/Inputs";
import { TextLink } from "../../ui/Text";

export const SignUp = (props) => {
  const goBackIcon = '<<'
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);
  const [password, setPassword] = useState("");

  const handleChangeName = (e) => {
    setName(e.currentTarget.value);
  };
  const handleChangeEmail = (e) => {
    setEmail(e.currentTarget.value);
  };
  const handleChangeAge = (e) => {
    setAge(e.currentTarget.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.currentTarget.value);
  };

  const handleChangeUser = () => {
    const user = {
      nome: name,
      email: email,
      idade: age,
      senha: password,
    };
    console.log(user);
    navigate("/login");
  };

  const handleGoBack = () => {
    navigate('/login')
  }

  return (
    <S.Wrapper>
      <Title />
      <S.InputBox>
        <Inputs placeholder="nome" onChange={handleChangeName} />
        <Inputs type="email" placeholder="email" onChange={handleChangeEmail} />
        <Inputs type="number" placeholder="idade" onChange={handleChangeAge} />
        <Inputs
          type="password"
          placeholder="Senha"
          onChange={handleChangePassword}
        />
        <Inputs type="password" placeholder="Repita sua senha" />
      </S.InputBox>
      <Button onClick={handleChangeUser} color="#0D73B6" larg="100%">
        Salvar
      </Button>
      <TextLink color='gray' onClick={handleGoBack}>{goBackIcon}</TextLink>
    </S.Wrapper>
  );
};

// onClick={props.changePage}
