import React from "react";
import styled from "styled-components";
import {BsFillPeopleFill} from "react-icons/bs"
import {VscSearch} from "react-icons/vsc"
import {CiBellOn} from "react-icons/ci"
import {IoMdPerson} from "react-icons/io"
import {TfiAngleRight} from "react-icons/tfi"
import {AiTwotoneBank} from "react-icons/ai"
import AgentMain from "./DirectorMain";
import AgentHeader from "./DirectorHeader";
import Recent from "./DirectorRecent";
const AgentHome = () => {
  return (
      <Container>
        <Wrap>
         <AgentHeader/>
          <Sec>
           <AgentMain/>
           <Recent/>
          </Sec>
        </Wrap>
      </Container>
  )
}
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
