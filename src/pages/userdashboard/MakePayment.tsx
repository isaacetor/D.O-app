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
          button="Top-up Wallet"
          display="flex"
          height="24vh"
        />

        <HoldC>
          <UserDashboardCards
            bgcol1=""
            bigText="Make Request"
            bigTextCol="#fff"
            smallText="hhh"
            smallTextCol="#fff"
            imgPic=""
          />
          <GlobalButton
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
      </Container>
    </div>
  );
};

export default MakePayment;

const HoldC = styled.div`
  /* height: 50vh; */

  display: flex;
  flex-direction: column;
  margin-top: 30vh;
  margin-left: 30px;

  background-color: #03b903;
  width: 400px;
  padding: 30px;
  border-radius: 10px;
  gap: 30px;

  :nth-child(2) {
    background-color: #3c37ff;
  }

  @media screen and (max-width: 1024px) {
    width: calc(100vw - 70px);
  }
`;

const Container = styled.div`
  /* overflow-x: hidden; */
  /* height: 100vh; */
  /* background-color: rebeccapurple; */

  @media screen and (max-width: 800px) {
    width: 100vw;
  }
`;
