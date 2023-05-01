import React from "react";
import styled from "styled-components";
import BinaryStatus from "./BinaryStatus";
import BinaryButton from "./BinaryButton";

interface tableProps {
  content1: string;
  content2: string;
  content3: string;
  content4?: string | any;
  content5?: string;
  buttons?: boolean;
}

const DynamicTablesData: React.FC<tableProps> = ({
  content1,
  content2,
  content3,
  content4,
  content5,
  buttons,
}) => {
  return (
    <Container>
      <Contents>
        <div> {content1} </div>
        <div> {content2} </div>
        <div> {content3} </div>
        {buttons ? (
          <>
            <BinaryStatus active={content4} />
            <BinaryButton swap={content4 ? false : true} />
          </>
        ) : (
          <>
            <div>{content4}</div>
            <div>{content5}</div>
          </>
        )}
      </Contents>
    </Container>
  );
};

export default DynamicTablesData;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;
const Contents = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 3px;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
  padding-left: 20px;
  margin-top: 11px;
  margin-bottom: 11px;
  padding-top: 9px;
  padding-bottom: 9px;
  background-color: white;
  transition: all 500ms;
  :active {
    border: 2px solid #00d692;
  }
`;
