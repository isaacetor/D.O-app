import React from "react";
import styled from "styled-components";
import BinaryStatus from "./BinaryStatus";
import BinaryButton from "./BinaryButton";

interface tableProps {
  title1: string;
  title2: string;
  title3: string;
  title4: string;
  title5: string;
}

const DynamicTablesHeads: React.FC<tableProps> = ({
  title1,
  title2,
  title3,
  title4,
  title5,
}) => {
  return (
    <Container>
      <Titles>
        <div>{title1}</div>
        <div>{title2}</div>
        <div>{title3}</div>
        <div>{title4}</div>
        <div>{title5}</div>
      </Titles>
    </Container>
  );
};

export default DynamicTablesHeads;

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 20px;
  font-size: 13px;
  /* @media screen and (max-width: 600px) {
    font-size: 10px;
  }
  @media screen and (max-width: 500px) {
    font-size: 8px;
  } */
  @media screen and (max-width: 400px) {
    font-size: 11px;
  }
  color: #414040;
`;
const Titles = styled.div`
  width: 100%;
  height: 100%;
  border-bottom: 1px solid silver;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
  padding-left: 20px;
  padding-bottom: 12px;
  margin-bottom: 25px;
`;
const Contents = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 4px;
  border: 1px solid #00d692;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
  padding-left: 20px;
  margin-top: 7px;
  margin-bottom: 7px;
  padding-top: 9px;
  padding-bottom: 9px;
`;
