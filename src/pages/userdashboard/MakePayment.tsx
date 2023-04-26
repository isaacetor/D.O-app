import React from "react";
import styled from "styled-components";
import {
  GlobalButton,
  UserDashboardCards,
  UserDashboardHeader,
  UserRequestTable,
} from "../../components";
import money from "../../assets/images/money.png";

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
          <First>
            <HoldC bg="#3c37ff">
              <UserDashboardCards
                bgcol1=""
                bigText="top up Balance"
                bigTextCol="#fff"
                smallText="Pay for your waste disposal!"
                smallTextCol="#fff"
                imgPic={money}
              />
              <GlobalButton
                bg=""
                col="#3c37ff"
                padding="18px 30px"
                text="Pay now!"
                bghovercolor="transparent"
                bor="1px solid #fff"
                hovCol="#fff"
                width="210px"
              />
            </HoldC>
          </First>
          <Second>
            <TransactionHistory>
              <UserRequestTable />
            </TransactionHistory>
          </Second>
        </Body>
      </Container>
    </div>
  );
};

export default MakePayment;

const TransactionHistory = styled.div`
  width: 93%;
  margin-top: 60px;
  margin-bottom: 50px;
  margin-left: 45px;

  @media screen and (max-width: 800px) {
    margin-bottom: 120px;
  }
`;

const HoldC = styled.div<{ bg: string }>`
  display: flex;
  flex-direction: column;
  background-color: ${({ bg }) => bg};
  width: 385px;
  padding: 25px;
  border-radius: 10px;
  gap: 30px;

  @media screen and (max-width: 1198px) {
    width: 350px;
  }
  @media screen and (max-width: 800px) {
    width: 80%;
  }
`;

const Second = styled.div`
  width: 85%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const First = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-left: 45px;
  gap: 30px;
  padding-top: 30px;
  margin-bottom: 10px;

  @media screen and (max-width: 800px) {
    padding-left: 0px;
    justify-content: center;
  }
`;

const Body = styled.div`
  width: 100%;
  margin-top: 23vh;

  @media screen and (max-width: 800px) {
    margin-top: 12vh;
  }
`;

const Container = styled.div`
  width: calc(100vw - 270px);
  background-color: #f7f7f764;

  @media screen and (max-width: 1050px) {
    width: calc(100% - 70px);
  }
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;
