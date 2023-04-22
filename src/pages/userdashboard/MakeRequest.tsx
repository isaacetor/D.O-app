import React from "react";
import {
  GlobalButton,
  UserDashboardCards,
  UserDashboardHeader,
  UserRequestTable,
} from "../../components";
import styled from "styled-components";

const MakeRequest = () => {
  return (
    <Container>
      <UserDashboardHeader height="18vh" title="Make Request" display="none" />
      <Body>
        <First>
          <HoldC bg="#3c37ff">
            <UserDashboardCards
              bgcol1=""
              bigText="Request for trash pickup"
              bigTextCol="#fff"
              smallText="is your trash full? request for it to be picked up and dispose now!"
              smallTextCol="#fff"
              imgPic=""
            />
            <GlobalButton
              bg=""
              col="#3c37ff"
              padding="18px 30px"
              text="Make Request"
              bghovercolor="transparent"
              bor="1px solid #fff"
              hovCol="#fff"
              width="210px"
            />
          </HoldC>
          <HoldC bg="#03b903">
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
              padding="18px 30px"
              text="Make Request"
              bghovercolor="transparent"
              bor="1px solid #fff"
              hovCol="#fff"
              width="200px"
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
  );
};

export default MakeRequest;

const TransactionHistory = styled.div`
  width: 95%;
`;

const Second = styled.div`
  margin: 50px 0px;
  display: flex;
  justify-content: center;
`;

const First = styled.div`
  gap: 30px;
  display: flex;
  flex-wrap: wrap;
`;

const HoldC = styled.div<{ bg: string }>`
  display: flex;
  flex-direction: column;
  background-color: ${({ bg }) => bg};
  width: 400px;
  padding: 25px;
  border-radius: 10px;
  gap: 30px;
  @media screen and (max-width: 800px) {
    display: none;
  }
  @media screen and (max-width: 1024px) {
    width: calc(100vw - 70px);
  }
`;

const Body = styled.div`
  margin-top: 25vh;
  margin-left: 30px;
`;

const Container = styled.div``;
