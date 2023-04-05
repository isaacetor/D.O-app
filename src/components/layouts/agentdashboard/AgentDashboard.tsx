import React from "react";
import { AgentSidenav } from "../../blocks";
import { Outlet } from "react-router-dom";

const AgentDashboard = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <AgentSidenav />
      <Outlet />
    </div>
  );
};

export default AgentDashboard;
