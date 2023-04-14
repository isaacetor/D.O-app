import React from "react";
import { StationSideNav } from "../../blocks/stationblock";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const StationDashboardlayout = () => {
  return (
    <div>
      <StationSideNav />
      <Container>
        <Outlet />
      </Container>
    </div>
  );
};

export default StationDashboardlayout;

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
`;
