import styled from "styled-components";

export const Avatar = styled.div`
  width: 150px;
  height: 150px;

  border-radius: 50%;

  background-image: url(${(props) => props.image});
  background-size: cover
`;

// export const Avatar = (props) => {
//     return <img src={props.image}/>
// }
