import React from "react";
import styled from "styled-components";
import StationHeader from "../../components/commons/props/StationHeader";

const Notification = () => {
  return (
    <Container>
      <StationHeader
        bg="#a08f8f3f"
        subtitle="Assign Carrier"
        title="Welcome, Pako Station"
      />
    </Container>
  );
};

export default Notification;
const Container = styled.div`
  width: calc(100% - 250px);
`;
