import React from "react";
import styled from "styled-components";

const HomeLoading = () => {
  return (
    <div>
      <Container>Loading.....</Container>
    </div>
  );
};

export default HomeLoading;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #000000ac;
  display: flex;
  justify-content: center;
  align-items: center;
`;
