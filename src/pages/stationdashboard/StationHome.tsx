import React from "react";
import styled from "styled-components";
import StationHeader from "../../components/commons/props/StationHeader";

import p1 from "../../assets/svgs/draw.svg";

const StationHome = () => {
  return (
    <Container>
      <Wrap>
        <StationHeader />
        <Sec></Sec>
      </Wrap>
    </Container>
  );
};

export default StationHome;
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
  width: calc(100% - 250px);
  height: 100vh;
  /* background-color: red; */
`;
