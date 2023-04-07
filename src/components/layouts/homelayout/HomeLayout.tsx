import React from "react";
import { Footer, Header } from "../../blocks";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const HomeLayout = () => {
  return (
    <Container>
      <Header />
      <Outlet />
      <Footer />
    </Container>
  );
};

export default HomeLayout;

const Container = styled.div`
  background-color: #ffffff;
`;
