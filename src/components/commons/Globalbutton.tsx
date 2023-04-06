import React from "react";
import styled from "styled-components";

interface button {
  wd: string;
  hgt: string;
  bg: string;
  col: string;
}

const Globalbutton: React.FC<button> = ({ wd, hgt, bg, col }) => {
  return (
    <Button wd={wd} hgt={hgt} bg={bg} col={col}>
      Get-started
    </Button>
  );
};

export default Globalbutton;

const Button = styled.button<{
  wd: string;
  hgt: string;
  bg: string;
  col: string;
}>`
  width: ${(props) => props.wd};
  height: ${(props) => props.hgt};
  font-size: 14px;
  font-weight: bold;
  border: 0;
  border-radius: 30px;
  color: ${(props) => props.col};
  background-color: ${(props) => props.bg};

  :hover {
    background-color: transparent;
    cursor: pointer;
    border: 2px solid #fff;
    color: #fff;
    transition: all 350ms;
  }
`;
