import React from "react";
import styled from "styled-components";

const NotFound = () => {
  return (
    <Container>
      <h1>
        Ooops, Error.... <br />
        Page Not Found
      </h1>
    </Container>
  );
};

export default NotFound;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #03b903;
  display: flex;
  justify-content: center;
  align-items: center;
`;
