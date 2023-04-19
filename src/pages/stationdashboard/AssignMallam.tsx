import React from "react";
import styled from "styled-components";
const AssignMallam = () => {
  return (
    <Container>
      <Wrapper></Wrapper>
    </Container>
  );
};

export default AssignMallam;
const Container = styled.div`
  width: calc(100% - 250px);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 100%;
  background-color: red;
`;
