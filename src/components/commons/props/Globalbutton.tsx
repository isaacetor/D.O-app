import React from "react";
import styled from "styled-components";
import { GlobalButtonProp } from "../../../types";

const Globalbutton: React.FC<GlobalButtonProp> = ({
  bg,
  col,
  padding,
  text,
}) => {
  return (
    <Button bg={bg} col={col} padding={padding}>
      {text}
    </Button>
  );
};

export default Globalbutton;

const Button = styled.button<{
  padding: string;
  bg: string;
  col: string;
}>`
  padding: ${({ padding }) => padding};
  color: ${(props) => props.col};
  background-color: ${(props) => props.bg};
  height: 6vh;
  font-size: 16px;
  border: 0;
  border-radius: 5px;
  font-weight: 600;
  display: flex;
  align-items: center;
  transition: all 0.2s ease;

  :hover {
    cursor: pointer;
    background-color: #03b903;
  }
`;
