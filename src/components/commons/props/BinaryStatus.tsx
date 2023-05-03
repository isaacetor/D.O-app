import React from "react";
import styled from "styled-components";

interface statusProps {
  active: string | boolean;
}

const BinaryStatus: React.FC<statusProps> = ({ active }) => {
  return (
    <Contain>
      {active ? (
        <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
          <Circle>{""}</Circle>
          <div>On duty</div>
        </div>
      ) : (
        <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
          <div
            style={{
              color: "#00d692",
            }}>
            ✔
          </div>
          <div>Free</div>
        </div>
      )}
    </Contain>
  );
};

export default BinaryStatus;

const Circle = styled.div`
  height: 8px;
  width: 8px;
  border-radius: 50%;
  background-color: #00d692;
  @media screen and (max-width: 600px) {
    height: 7px;
    width: 7px;
  }
  @media screen and (max-width: 500px) {
    height: 6px;
    width: 6px;
  }
  @media screen and (max-width: 400px) {
    height: 5px;
    width: 5px;
  }
`;

const Contain = styled.div`
  @media screen and (max-width: 600px) {
    font-size: 10px;
  }
  @media screen and (max-width: 500px) {
    font-size: 8px;
  }
  @media screen and (max-width: 400px) {
    font-size: 7px;
  }
`;
