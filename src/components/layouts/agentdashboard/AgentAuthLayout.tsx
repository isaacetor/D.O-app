import React from "react";
import { AuthSideBar } from "../../blocks";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const AgentAuthLayout = () => {
  return (
    <Container>
      <AuthSideBar
        title="  Welcome agent 
              to your account."
        desc="   Manage all user trash pick up request? 
              from your home. "
        backgroundColor="#3c37ff"
        CardColor="#2520E3"
      />
      <Outlet />
    </Container>
  );
};

export default AgentAuthLayout;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #fefefe;

  @media screen and (max-width: 748px) {
    display: block;
  }
`;
