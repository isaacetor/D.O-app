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
  width: 95%;
  margin: auto;
  height: 70vh;
  border-radius: 1.5rem;
  margin-bottom: 4.5rem;
  margin-top: 4.5rem;
  /* background-color: #4f4bff; */
  background: linear-gradient(99.62deg, #1b1ed8 2.97%, #050794 94.08%);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
  margin-top: 40px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;
