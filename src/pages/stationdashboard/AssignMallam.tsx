import React from "react";
import styled from "styled-components";
import StationHeader from "../../components/commons/props/StationHeader";
import { StationTable } from "../../components";
const AssignMallam = () => {
  return (
    <Container>
      <Wrapper>
        <StationHeader
          bg="#a08f8f3f"
          title="Welcome, Pako Station"
          subtitle="Register Carrier"
        />
        <Boby>
          <StationTable />
        </Boby>
      </Wrapper>
    </Container>
  );
};

export default AssignMallam;

const Boby = styled.div`
  width: 100%;
  display: flex;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Container = styled.div`
  width: calc(100% - 250px);
  display: flex;
  height: 100vh;
`;
