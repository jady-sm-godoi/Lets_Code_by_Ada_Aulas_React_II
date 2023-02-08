import * as S from './style'


export const Avatar = (props) => {
  return (
    <S.Wrapper size={props.size}>
      <S.Image src={props.imagePath}></S.Image>
    </S.Wrapper>
  );
};
