import styled, { css } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  font-size: 12px;
  align-items: center;

  input{
    background-color: green;
  }
`;


export const CheckBox = (props) => {
  return (
    <Wrapper >
      <input type="checkbox" name="save" id="save"/>
      <label htmlFor="save">{props.label}</label>
    </Wrapper>
  );
};
