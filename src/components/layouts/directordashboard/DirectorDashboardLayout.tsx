import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { DirectorSidenav } from "../../blocks";

const DirectorDashboardLayout = () => {
  return (
    <Container>
      <DirectorSidenav />
      <Cont>
      <Outlet />
      </Cont>
    </Container>
  );
};
export default DirectorDashboardLayout;

const Container = styled.div`
  /* display: flex;
  justify-content: space-between;
  background-color: #fefefe;

  @media screen and (max-width: 748px) {
    display: block;
  } */
`;
const Cont=styled.div`
  display: flex;
  justify-content: flex-end;
`