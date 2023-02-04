import styled from "styled-components";
import { Avatar } from "./avatar";
import { Button } from "./button";
import { Text } from "../ui/Text";

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin: 20px 0;
`;

const BoxFlex = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction};
  gap: ${(props) => props.gap};

  margin-bottom: 10px;
`;

export const Header = (props) => {
  return (
    <HeaderWrapper>
      <Avatar image={"public/images/profile_adatechbr.webp"} />
      <BoxFlex direction={"column"}>
        <BoxFlex gap={"15px"}>
          <Text bold>@adatechbr</Text>
          <Button>Seguindo</Button>
          <Button>Enviar mensagem</Button>
          <Button>+amigo</Button>
          <Button>...</Button>
        </BoxFlex>
        <BoxFlex gap={"15px"}>
          <Text>211 publicações</Text>
          <Text>44,2 mil seguidores</Text>
          <Text>2 seguindo</Text>
        </BoxFlex>
        <BoxFlex direction={"column"}>
          <Text>Ada Tech</Text>
          <Text>Educação</Text>
          <Text>Ada. A Nova Educação.</Text>
          <Text>beacons.ai/adatechbr</Text>
        </BoxFlex>
        <Text>
          Seguido(a) por machado_bru, caioasilva__, fellipearb e outras 2
          pessoas
        </Text>
      </BoxFlex>
    </HeaderWrapper>
  );
};
