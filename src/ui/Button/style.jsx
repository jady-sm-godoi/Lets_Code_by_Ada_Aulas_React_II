import styled from "styled-components";

export const WrapperButton = styled.button`
    border: none;
    border-radius: 5px;
    cursor: pointer;
    padding: 7px 15px;
    background-color: ${(props) => props.color ? props.color : 'white'};
    width: ${(props) => props.larg ? props.larg : ''};

    div{
        color: ${(props) => props.fontColor ? props.fontColor : 'black'};
        font-weight: bold;
    }
`