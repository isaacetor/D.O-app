import React from "react";
import { AgentSidenav } from "../../blocks";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const AgentDashboard = () => {
  return (
    <Container>
      <AgentSidenav />
      <Outlet />
    </Container>
  );
};

export default AgentDashboard;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #fefefe;
  overflow: hidden;

  @media screen and (max-width: 748px) {
    display: block;
  }
`;
