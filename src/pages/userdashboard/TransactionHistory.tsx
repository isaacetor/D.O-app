import React from "react";
import styled from "styled-components";

const TransactionHistory = () => {
  return (
    <div>
      <Bottom1>
        <Notify>
          <One>Transaction History</One>
        </Notify>
        <Record>
          <p>Title</p>
          <p>Date</p>
          <p>Amount</p>
          <p>Status</p>
        </Record>
        <MsgHold>
          <Msg1>
            <Holder>
              <CoverImg>E</CoverImg>
              <P1>January 2023 Bill</P1>
            </Holder>
            <P2>Sat,20 Jan 2023</P2>
            <P3>30,000</P3>
            <P4>PAID</P4>
          </Msg1>
          <Msg></Msg>
          <Msg></Msg>
          <Msg></Msg>
          <Msg></Msg>
          <Msg></Msg>
          <Msg></Msg>
          <Msg></Msg>
          <Msg></Msg>
        </MsgHold>
      </Bottom1>
    </div>
  );
};

export default TransactionHistory;

const Msg = styled.div`
  width: calc(100% - 20px);
  height: 10vh;
  margin-left: 10px;
  margin-right: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
  border-radius: 5px;
  margin-bottom: 10px;
  overflow-x: hidden;
  background-color: #ff440018;
  white-space: nowrap;
  max-width: calc(100% - 20px);
  text-overflow: ellipsis;

  p {
    margin: 0;
    color: #aaa9b8;
    font-size: 12px;
    margin-left: 5px;
  }
  span {
    margin-left: 5px;
    color: #45454b;
    font-size: 13px;
  }
`;

const MsgHold = styled.div`
  /* background-color: red; */

  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb {
    background: #121111;
    border-radius: 5px;
  }
  width: calc(100% - 20px);
  height: 70%;
  margin-left: 10px;
`;

const One = styled.div`
  width: 95%;
  height: 100%;
  color: black;
  font-weight: 600;
  font-size: 18px;
  /* margin-bottom: 20px; */
  margin-left: 20px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(226, 24, 24, 0.133);

  @media screen and (max-width: 768px) {
    font-size: 15px;
    width: 60%;
  }
`;

const Notify = styled.div`
  width: 100%;
  height: 7vh;
  margin-bottom: 10px;
  display: flex;
`;

const P4 = styled.button`
  margin: 0;
  /* color: black; */
  font-size: 12px;
  margin-right: 20px;
  font-weight: 500;
  background-color: lightgreen;
  color: rgb(0, 100, 0);
  width: 100px;
  height: 25px;
  border-radius: 30px;
  border: none;
  outline: none;
`;

const P3 = styled.div`
  margin: 0;
  color: black;
  font-size: 12px;
  margin-right: 50px;
  width: 180px;
  font-weight: 500;
`;
const P2 = styled.div`
  margin: 0;
  color: black;
  font-size: 12px;
  margin-right: 60px;
  font-weight: 500;
  width: 180px;

  @media screen and (max-width: 768px) {
    font-size: 10px;
    width: 100px;
  }
`;
const P1 = styled.div`
  margin: 0;
  color: black;
  font-size: 12px;
  margin-right: 18px;
  width: 120px;
  font-weight: 500;

  @media screen and (max-width: 768px) {
    font-size: 10px;
    width: 100px;
  }
`;

const Msg1 = styled.div`
  width: calc(100% - 20px);
  height: 10vh;
  background-color: #ff440018;
  margin-left: 10px;
  margin-right: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
  border-radius: 5px;
  margin-bottom: 10px;
  overflow-x: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Holder = styled.div`
  display: flex;
  align-items: center;
`;

const CoverImg = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #8b008b97;
  color: darkmagenta;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  font-weight: 500;
  margin-left: 10px;
  margin-right: 5px;

  @media screen and (max-width: 768px) {
    width: 30px;
    height: 30px;
    font-size: 16px;
    margin-right: 20px;
  }
`;

const Record = styled.div`
  width: calc(100% - 50px);

  height: 3vh;

  margin-left: 30px;

  border-radius: 5px;
  margin-bottom: 2px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  p {
    margin: 0;
    color: #aaa9b8;
    font-size: 12px;
    margin-left: 5px;
    font-weight: 600;
    width: 100px;
    /* margin-right: 15px; */
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

const Bottom1 = styled.div`
  width: 95%;
  height: 45vh;
  background-color: white;
  border-radius: 10px;
  margin: 10px;
  padding-bottom: 20px;
  box-shadow: rgba(0, 0, 0, 0.027) 1.95px 1.95px 2.6px;

  @media screen and (max-width: 768px) {
    width: 92vw;
  }
`;
