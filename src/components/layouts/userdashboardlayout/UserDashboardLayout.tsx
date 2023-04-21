import React from "react";
import { Sidenav } from "../../blocks";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const UserDashboardLayout = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "#fff",
      }}>
      <Sidenav />
      <Container>
        <Outlet />
        <AtMobile></AtMobile>
      </Container>
    </div>
  );
};

export default UserDashboardLayout;

const Container = styled.div`
  width: calc(100vw - 270px);
  @media screen and (max-width: 1024px) {
    width: calc(100vw - 70px);
  }
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

const AtMobile = styled.div`
  width: 100vw;
  height: 70px;
  position: fixed;
  bottom: 0;
  @media screen and (min-width: 800px) {
    display: none;
  }
`;
