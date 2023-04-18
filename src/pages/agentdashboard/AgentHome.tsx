import React from "react";
import styled from "styled-components";

import AgentMain from "./AgentMain";
import AgentHeader from "./AgentHeader";
import Recent from "./AgentRecent";
const AgentHome = () => {
  return (
    <Container>
      <Wrap>
        <AgentHeader />
        <Sec>
          <AgentMain />
          <Recent />
        </Sec>
      </Wrap>
    </Container>
  );
};
export default AgentHome;

const Sec = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;
const Wrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Container = styled.div`
  width: calc(100% - 270px);
  height: 100vh;
`;
