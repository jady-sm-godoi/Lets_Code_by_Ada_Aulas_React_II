import * as S from "./style";
import { Button } from "../../components/Button/button";
import { Title } from "../../components/Title/title";
import { Inputs } from "../../ui/Inputs";
import { useEffect, useState } from "react";

export const SignUp = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({});

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

  useEffect(() => {
    const handleChangeUser = () => {
      setUser({
        nome: name,
        email: email,
        idade: age,
        senha: password,
      });
    };
    handleChangeUser();
  }, [name, email, age, password]);
  
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
      <Button
        onClick={console.log("usuário: ", user)}
        color="#0D73B6"
        larg="100%"
      >
        Salvar
      </Button>
    </S.Wrapper>
  );
};

// onClick={props.changePage}
