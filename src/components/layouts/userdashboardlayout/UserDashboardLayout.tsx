import React from "react";
import { Sidenav } from "../../blocks";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const UserDashboardLayout = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <Sidenav />
      <Outlet />
    </div>
  );
};

export default UserDashboardLayout;
