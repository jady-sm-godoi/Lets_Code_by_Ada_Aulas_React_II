import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;

  /* padding-top: 50px; */
  justify-content: center;
  align-items: center;
  gap: 80px;
  margin: 45px 0;
`;

export const AvatarWrapper = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  max-width: 500px;
`

export const BoxFlex = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction};
  gap: ${(props) => props.gap};
  align-items: ${(props) => props.direction == 'column' ? '' : 'center'};

  margin-bottom: 25px;
`;