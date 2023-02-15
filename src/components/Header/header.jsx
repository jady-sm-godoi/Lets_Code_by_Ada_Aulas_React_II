import * as S from "./style";

import { Avatar } from "../Avatar";
import { Button } from "../../ui/Button";
import { Text, TextLink } from "../../ui/Text";

export const Header = (props) => {
  return (
    <S.HeaderWrapper>
      <S.AvatarWrapper>
        <Avatar imagePath="https://via.placeholder.com/150"/>
      </S.AvatarWrapper>
      <S.ContentWrapper>
        <S.BoxFlex gap={"15px"}>
          <Text bold>adatechbr</Text>
          <Button>Seguindo</Button>
          <Button>Enviar mensagem</Button>
          <Button>+amigo</Button>
          <Button>...</Button>
        </S.BoxFlex>
        <S.BoxFlex gap={"45px"}>
          <Text>211 publicações</Text>
          <Text>44,2 mil seguidores</Text>
          <Text>2 seguindo</Text>
        </S.BoxFlex>
        <S.BoxFlex direction={"column"}>
          <Text bold>Ada Tech</Text>
          <Text color="gray">Educação</Text>
          <Text>Ada. A Nova Educação.</Text>
          <TextLink color="lightBlue">beacons.ai/adatechbr</TextLink>
        </S.BoxFlex>
        <S.BoxFlex gap={"5px"}>
          <Text size={"small"} color="gray">
            Seguido(a) por
          </Text>
          <Text size={"small"}>machado_bru, caioasilva__, fellipearb</Text>
          <Text size={"small"} color="gray">
            e outras 2 pessoas
          </Text>
        </S.BoxFlex>
      </S.ContentWrapper>
    </S.HeaderWrapper>
  );
};
