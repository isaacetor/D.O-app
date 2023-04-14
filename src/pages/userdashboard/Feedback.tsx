import React from "react";
import { UserDashboardHeader } from "../../components";
import styled from "styled-components";

const Feedback = () => {
  return (
    <Container>
      <UserDashboardHeader
        height="18vh"
        title="Customer support"
        display="none"
      />
    </Container>
  );
};

export default Feedback;

const Container = styled.div`
  width: calc(100% - 270px);
`;
