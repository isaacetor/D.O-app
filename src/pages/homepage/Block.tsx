import React from "react";
import styled from "styled-components";

const Block = () => {
  return (
    <div>
      <Container></Container>
    </div>
  );
};

export default Block;

const Container = styled.div`
  width: 100%;
  height: 80vh;
  background-color: #4f4bff;
  margin-top: 40px;
`;
