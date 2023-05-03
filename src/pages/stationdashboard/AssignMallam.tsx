import React from "react";
import styled from "styled-components";
import StationHeader from "../../components/commons/props/StationHeader";
import { GlobalButton, StationTable } from "../../components";
const AssignMallam = () => {
  return (
    <Container>
      <Wrapper>
        <StationHeader
          bg="#a08f8f3f"
          title="Welcome, Pako Station"
          subtitle="View Request"
        />
        <Boby>
          <Bodyheads>
            <Holder>
              <BodyNav>All Request</BodyNav>
            </Holder>
            <BtnHold>
              <button>Assign</button>
            </BtnHold>
          </Bodyheads>
          <StationTable />
        </Boby>
      </Wrapper>
    </Container>
  );
};

export default AssignMallam;

const Holder = styled.div`
  margin-left: 30px;
`;
const BtnHold = styled.div`
  margin-right: 30px;

  button {
    width: 100px;
    height: 40px;
    font-size: 16px;
    border-radius: 3px;
    border: none;
    background-color: #03b903;
    color: #fff;
    transition: all ease-in-out 500ms;

    :hover {
      transform: scale(0.98);
      cursor: pointer;
      background-color: transparent;
      border: 1px solid #03b903;
      color: #03b903;
    }
  }
`;

const Bodyheads = styled.div`
  width: 100%;

  display: flex;
  /* margin-left: 30px; */
  margin-bottom: 30px;
  justify-content: space-between;
`;
const BodyNav = styled.div`
  font-size: 20px;
  font-weight: 600;
  border-bottom: 3px solid #03b903;
  color: #03b903;
`;

const Boby = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 23vh;
  /* margin-left: 20px; */
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Container = styled.div`
  width: 100%;
  background-color: #edebeb;
  height: 100vh;
`;
