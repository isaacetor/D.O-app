import React from "react";
import styled from "styled-components";
import {
  GlobalButton,
  UserDashboardCards,
  UserDashboardHeader,
} from "../../components";
const MakePayment = () => {
  return (
    <div>
      <Container>
        <UserDashboardHeader
          title="Wallet"
          amount="N2000"
          display="flex"
          height="24vh"
          btnDisplay="none"
        />

        <Body>
          <HoldC>
            <UserDashboardCards
              bgcol1=""
              bigText="Top Up Balance"
              bigTextCol="#fff"
              smallText="hhh"
              smallTextCol="#fff"
              imgPic=""
            />
            <GlobalButton
              bg=""
              col="#03b903"
              padding="18px 20px"
              text="Make Payment"
              bghovercolor="transparent"
              hgt="6vh"
              bor="1px solid #fff"
              hovCol="#fff"
              width="200px"
            />
          </HoldC>
        </Body>
      </Container>
    </div>
  );
};

export default MakePayment;

const Body = styled.div`
  width: 95%;
  margin-top: 30vh;
  display: flex;
  flex-wrap: wrap;
  margin-left: 30px;
`;

const HoldC = styled.div`
  width: 400px;
  padding: 30px;
  border-radius: 10px;
  gap: 30px;
  display: flex;
  flex-direction: column;

  background-color: #03b903;

  :nth-child(2) {
    background-color: #3c37ff;
  }

  @media screen and (max-width: 425px) {
    width: 85%;
  }
`;

const Container = styled.div`
  overflow-x: hidden;
  @media screen and (max-width: 800px) {
    width: 100vw;
  }
`;
