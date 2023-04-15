import React from "react";
// import { Sidenav } from "../../blocks";
import SideNav from "../../blocks/director/Sidenav";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const DirectorDashboardLayout = () => {
  return (
    <div>
      <SideNav />
      <Cont>
      <Outlet />
      </Cont>
    </div>
  );
};
export default DirectorDashboardLayout;
const Cont=styled.div`
  display: flex;
  justify-content: flex-end;
`
