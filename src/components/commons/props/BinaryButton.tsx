import React from "react";
import styled from "styled-components";

interface buttonProps {
  swap: boolean;
}

const BinaryButton: React.FC<buttonProps> = ({ swap }) => {
  return (
    <div>
      {swap ? (
        <Button cs="pointer" bc="orange" cl="black">
          <div>Assign</div>
        </Button>
      ) : (
        <Button cs="not-allowed" bc="lightgrey" cl="grey">
          <div>Disabled</div>
        </Button>
      )}
    </div>
  );
};

export default BinaryButton;

const Button = styled.button<{ cs: string; bc: string; cl: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  cursor: ${(props) => props.cs};
  color: ${(props) => props.cl};
  background-color: ${(props) => props.bc};
  border: none;
  outline: none;
  max-width: 78%;
  min-width: 67%;
  border-radius: 3px;
`;