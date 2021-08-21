import styled from "styled-components";
import { theme } from "../../constants";

const ButtonContainer = styled.div`
    margin:${props => props.margin};
    width: ${props => props.width};
    display:flex;
    justify-content: ${props => props.justifyContent};
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.4rem 1rem;
  background-color:${props=>props.bg};
  font-size:1rem;
  outline: none;
  cursor: pointer;
  margin-right:${props => props.marginRight};
  border:none;
  border-radius:.7rem;
  &:disabled {
    opacity:.9;
    cursor: default;

  }
`;

const Icon = styled.i`
  margin-right: ${props=>props.marginIcon?props.marginIcon:".5rem"};
  font-size:1.1rem;
  color:${theme.primaryTextColor};

`;

const Text = styled.p`
  font-weight:bold;
  color:${theme.primaryTextColor};
  margin:0;

`;

export { ButtonContainer, Button, Icon, Text };
