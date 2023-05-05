import React from "react";
import styled from "styled-components";
import StationHeader from "../../components/commons/props/StationHeader";
import StationDashboardCard from "../../components/commons/props/StationDashboardCard";
import StationDashboardRequest from "../../components/commons/props/StationDashboardRequest";

const StationHome = () => {
  return (
    <Container>
      <Wrap>
        <StationHeader bg="#eaeaea" title="Welcome" subtitle="Pako Station" />
        <Sec>
          <Wrapper>
            <HoldCard>
              <StationDashboardCard />
            </HoldCard>
            <Holdquest>
              <StationDashboardRequest />
            </Holdquest>
          </Wrapper>
        </Sec>
      </Wrap>
    </Container>
  );
};

export default StationHome;

const Wrapper = styled.div`
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  gap: 10%;
  @media screen and (max-width: 1238px) {
    justify-content: center;
  }
`;

const HoldCard = styled.div`
  width: 600px;
  @media screen and (max-width: 1300px) {
    width: 550px;
  }
  @media screen and (max-width: 1238px) {
    width: 100%;
  }
`;
const Holdquest = styled.div`
  width: 250px;
  @media screen and (max-width: 1238px) {
    width: 60%;
  }
  @media screen and (max-width: 466px) {
    width: 100%;
  }
`;

const Sec = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 1238px) {
    align-items: center;
  }
  margin-top: 23vh;
`;
const Wrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
`;
