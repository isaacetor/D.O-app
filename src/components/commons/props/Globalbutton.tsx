import React from "react";
import styled from "styled-components";
import { GlobalButtonProp } from "../../../types";

const Globalbutton: React.FC<GlobalButtonProp> = ({
  bg,
  col,
  padding,
  text,
  bghovercolor,
  bor,
  hovCol,
  width,
  onClick,
}: any) => {
  return (
    <Button
      bg={bg}
      col={col}
      padding={padding}
      bghovercolor={bghovercolor}
      bor={bor}
      hovCol={hovCol}
      width={width}
      // onClick={}
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
  bor: string;
  hovCol: string;
  width: string;
}>`
  padding: ${({ padding }) => padding};
  width: ${({ width }) => width};
  color: ${(props) => props.col};
  background-color: ${({ bg }) => bg};
  font-size: 16px;
  border: 0;
  border-radius: 5px;
  font-weight: 500;
  text-transform: capitalize;
  transition: all 0.2s ease;

  :hover {
    cursor: pointer;
    background-color: ${(props) => props.bghovercolor};
    border: ${(props) => props.bor};
    color: ${(props) => props.hovCol};
    transform: scale(0.98);
  }
`;
