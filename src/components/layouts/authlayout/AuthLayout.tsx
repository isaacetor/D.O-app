import React from "react";
import { Outlet } from "react-router-dom";
import { AuthSideBar } from "../../blocks";
import styled from "styled-components";

const AuthLayout = () => {
  return (
    <Container>
      <AuthSideBar />
      <Outlet />
    </Container>
  );
};

export default AuthLayout;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #fefefe;
  overflow: hidden;

  @media screen and (max-width: 748px) {
    display: block;
  }
`;
