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
          <StationDashboardCard />
          <StationDashboardRequest />
        </Sec>
      </Wrap>
    </Container>
  );
};

export default StationHome;
const Sec = styled.div`
  display: flex;
  /* width: 100%; */
  /* gap: 20px; */
  /* justify-content: space-around; */
  margin-top: 23vh;
  /* flex-wrap: wrap; */
`;
const Wrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Container = styled.div`
  width: calc(100% - 250px);
  height: 100%;

  @media screen and (max-width: 800px) {
    width: 100%;

    /* background-color: red; */
  }
`;
