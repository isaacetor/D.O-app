import React from "react";
import styled from "styled-components";

interface button {
  wd: string;
  ht: string;
  bg: string;
  col: string;
}

const Globalbutton: React.FC<button> = ({ wd, ht, bg, col }) => {
  return (
    <Button wd={wd} ht={ht} bg={bg} col={col}>
      Get-started
    </Button>
  );
};

export default Globalbutton;

const Button = styled.button<{
  wd: string;
  ht: string;
  bg: string;
  col: string;
}>`
  width: ${(props) => props.wd};
  height: ${(props) => props.ht};
  font-size: 16px;
  font-weight: bold;
  border: 0;
  transition: all 0.2s ease;
  border-radius: 30px;
  color: ${(props) => props.col};
  background-color: ${(props) => props.bg};

  :hover {
    background-color: transparent;
    cursor: pointer;
    border: 2px solid #fff;
    color: #fff;
  }
`;

// padding: 10px 20px;
// height: 6vh;
// font-size: 16px;
// background-color: ${({ bg }) => bg};
// border: 0;
// color: ${({ color }) => color};
// border-radius: 30px;
// font-weight: 600;
// margin-left: 40px;
// display: flex;
// align-items: center;
// gap: 5px;
// transition: all 0.2s ease;
