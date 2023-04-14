import React, { useState } from "react";
import styled from "styled-components";
// import { useAppSelector } from "../../../Global/Store";
import { NavLink } from "react-router-dom";
import { UserDashboardHeader } from "../../components";
import { UserDashboardQuick } from "../../components";
import { UserDashboardCards } from "../../components";
import { UserDashboardHistory } from "../../components";
import Globalbutton from "../../components/commons/props/Globalbutton";
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
        <Hold>
          <HoldC>
            <UserDashboardCards
              bgcol1=""
              bigText="Make Request"
              bigTextCol="#fff"
              smallText="hhh"
              smallTextCol="#fff"
              imgPic=""
            />
            <Globalbutton
              bg=""
              col="#03b903"
              padding="150px"
              text="Make Request"
              bghovercolor="transparent"
              hgt="6vh"
              bor="2px solid #fff"
              hovCol="#fff"
            />
          </HoldC>
          <HoldC>
            <UserDashboardCards
              bgcol1=""
              bigText="Custom Request"
              bigTextCol="#fff"
              smallText="hhh"
              smallTextCol="#fff"
              imgPic=""
            />
            <Globalbutton
              bg=""
              col="blue"
              padding="150px"
              text="Custom Request"
              bghovercolor="transparent"
              hgt="6vh"
              bor="2px solid #fff"
              hovCol="#fff"
            />
          </HoldC>
        </Hold>
        <UserDashboardHistory />
      </Body>
    </Container>
  );
};

export default BusinessHome;
const HoldC = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  background-color: #03b903;
  width: 400px;
  padding: 10px;
  border-radius: 10px;
  gap: 10px;

  :nth-child(2) {
    background-color: blue;
  }

  @media screen and (max-width: 1024px) {
    width: calc(100vw - 70px);
  }
`;
const Hold = styled.div`
  display: flex;
  width: 95%;
  gap: 20px;

  @media screen and (max-width: 1024px) {
    width: calc(100vw - 70px);
  }
`;
const Container = styled.div`
  width: calc(100vw - 270px);
  /* width: 100%; */
  /* background-color: rebeccapurple; */

  @media screen and (max-width: 1024px) {
    width: calc(100vw - 70px);
  }
`;
const Body = styled.div`
  width: 100%;
  color: #3d3d3d;
  margin-top: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 35px;

  @media screen and (max-width: 1024px) {
    width: calc(100vw - 70px);
  }
`;
