import React from "react";
import { UserDashboardHeader } from "../../components";
import styled from "styled-components";

const MakeRequest = () => {
  return (
    <Container>
      <UserDashboardHeader height="18vh" title="Make Request" display="none" />

      <Body>jhdh</Body>
    </Container>
  );
};

export default MakeRequest;

const Body = styled.div`
  margin-top: 18vh;
  margin-left: 30px;
  background-color: red;
  color: #fff;
`;

const Container = styled.div`
  /* width: calc(100vw - 270px); */
`;
