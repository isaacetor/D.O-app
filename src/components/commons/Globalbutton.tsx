import React from "react";
import styled from "styled-components";

interface button {
  wd: string;
  hgt: string;
  bg: string;
}

const Globalbutton: React.FC<button> = ({ wd, hgt, bg }) => {
  return (
    <Button wd={wd} hgt={hgt} bg={bg}>
      Get-started
    </Button>
  );
};

export default Globalbutton;

const Button = styled.button<{ wd: string; hgt: string; bg: string }>`
  width: ${(props) => props.wd};
  height: ${(props) => props.hgt};
  font-size: 14px;
  font-weight: bold;
  border: 0;
  border-radius: 30px;
  background-color: ${(props) => props.bg}; ;
`;
