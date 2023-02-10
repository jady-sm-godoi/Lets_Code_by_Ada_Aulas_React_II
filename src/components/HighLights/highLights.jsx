import { useEffect } from "react";
import { Avatar } from "../Avatar";
import * as S from "./styles";

const dataHighLights = [
  {
    id: 0,
    title: "Parceiros",
    image: "https://via.placeholder.com/90",
  },
  {
    id: 1,
    title: "Desafios",
    image: "https://via.placeholder.com/90",
  },
  {
    id: 2,
    title: "Comunidade",
    image: "https://via.placeholder.com/90",
  },
  {
    id: 3,
    title: "Faculdades",
    image: "https://via.placeholder.com/90",
  },
  {
    id: 4,
    title: "Modelo Educacional",
    image: "https://via.placeholder.com/90",
  },
];

//handle functions
const extractTitleFromData = (item) => {
  if (!item.title) return "none";
  return item.title;
};

const removeInvalidData = (item) => {
  if (item == "none") {
    return false;
  } else {
    return true;
  }
};

export const HighLights = () => {
  const normalizedData = (data) =>
    data.map(extractTitleFromData).filter(removeInvalidData);

    useEffect(() => {
      const newDataHighLights = normalizedData(dataHighLights)
      // console.log(newDataHighLights);
    
    }, [])
  
    return (
    <S.Wrapper>
      {dataHighLights.map((data) => (
        <S.HighLightItem key={data.id}>
          <Avatar size="small" imagePath={data.image} />
          <S.HighLightText>{data.title}</S.HighLightText>
        </S.HighLightItem>
      ))}
    </S.Wrapper>
  );
};
