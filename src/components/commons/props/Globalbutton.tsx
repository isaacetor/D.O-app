import React from "react";
import styled from "styled-components";
import { GlobalButtonProp } from "../../../types";

const Globalbutton: React.FC<GlobalButtonProp> = ({
  bg,
  col,
  padding,
  text,
  bghovercolor,
  hgt,
}) => {
  return (
    <Button
      bg={bg}
      col={col}
      padding={padding}
      bghovercolor={bghovercolor}
      hgt={hgt}
    >
      {text}
    </Button>
  );
};

export default Globalbutton;

const Button = styled.button<{
  padding: string;
  bg: string;
  col: string;
  bghovercolor: string;
  hgt: string;
}>`
  width: ${({ padding }) => padding};
  color: ${(props) => props.col};
  background-color: ${(props) => props.bg};
  height: ${(props) => props.hgt};
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  border-radius: 5px;
  font-weight: 600;
  display: flex;
  align-items: center;
  transition: all 0.2s ease;

  :hover {
    cursor: pointer;
    background-color: ${(props) => props.bghovercolor};
  }
`;
