import styled, { css } from "styled-components";

const textCssBase = css`
  color: ${(props) => props.color || "#fff"};
  font-weight: ${(props) => (props.bold ? "bold" : "")};
  font-size: ${(props) => (props.size == "small" ? "12px" : "")};
`;

export const Text = styled.div`
  ${textCssBase}
`;
export const WrapperLink = styled.a`
  ${textCssBase};
  cursor: pointer;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const TextLink = (props) => {
  return (
    <WrapperLink {...props} >
      <p onClick={onclick}>{props.children}</p>
    </WrapperLink>
  );
};
