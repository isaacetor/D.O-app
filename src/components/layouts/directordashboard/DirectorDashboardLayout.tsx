import React from "react";
// import { Sidenav } from "../../blocks";
import SideNav from "../../blocks/directorblock/DirectorSidenav";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { AuthSideBar } from "../../blocks";
import DirectorSidenav from "../../blocks/directorblock/DirectorSidenav";

const DirectorDashboardLayout = () => {
  return (
    <Container>
      <DirectorSidenav />
      <Outlet />
    </Container>
  );
};
export default DirectorDashboardLayout;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #fefefe;
  overflow: hidden;

  @media screen and (max-width: 748px) {
    display: block;
  }
`;
