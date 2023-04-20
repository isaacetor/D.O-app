import React from "react";
import styled from "styled-components";
const AssignMallam = () => {
  return (
    <Container>
      <Wrapper>
        <Title>
          <Div>Hello</Div>
          <Div>Hello</Div>
          <Div>Hello</Div>
          <Div>Hello</Div>
          <Div>Hello</Div>
          <Div>Hello</Div>
        </Title>
        <Status1>
          <Div>23 Jan, 2023.</Div>
          <Div>x42356</Div>
          <Div>10.00pm</Div>
          <Div>Open</Div>
          <Div>11.00pm</Div>
        </Status1>
      </Wrapper>
    </Container>
  );
};

export default AssignMallam;
const Div = styled.div``;
const Status1 = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 2fr 2fr 2fr 2fr 2fr;
  padding-top: 10px;

  border-top: 1px solid grey;
`;
const Title = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 2fr 2fr 2fr 2fr 2fr;
`;
const Container = styled.div`
  width: calc(100% - 250px);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 100%;
`;
