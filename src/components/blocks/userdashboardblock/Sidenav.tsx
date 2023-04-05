import React from "react";
import styled from "styled-components";

const Sidenav = () => {
  return (
    <div>
      <Container></Container>
    </div>
  );
};

export default Sidenav;

const Container = styled.div`
  width: 250px;
  height: 100vh;
  background-color: green;
  position: fixed;
`;
