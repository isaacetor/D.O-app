import React, { useState } from "react";
import styled from "styled-components";
// import { useAppSelector } from "../../../Global/Store";
import { NavLink } from "react-router-dom";
import { UserDashboardHeader } from "../../components";
import { UserDashboardQuick } from "../../components";
const BusinessHome = () => {
  // const user = useAppSelector((state) => state.bizClient);

  return (
    <Container>
      <UserDashboardHeader
        title={"Welcome"}
        amount="N2000"
        button="make request"
        display="flex"
        height="24vh"
      />
      <Body>
        <UserDashboardQuick />
      </Body>
    </Container>
  );
};

export default BusinessHome;

const Container = styled.div`
  width: calc(100vw - 270px);
  /* width: 100%; */
  /* background-color: rebeccapurple; */
`;
const Body = styled.div`
  width: 100%;
  color: #3d3d3d;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
