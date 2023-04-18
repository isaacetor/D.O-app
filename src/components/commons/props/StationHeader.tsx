import React from "react";
import styled from "styled-components";
import { BsFillPeopleFill } from "react-icons/bs";
import { VscSearch } from "react-icons/vsc";
import { CiBellOn } from "react-icons/ci";
import { AiTwotoneBank } from "react-icons/ai";

const StationHeader = () => {
  return (
    <Main>
      <Left>
        <Up>
          <p>Welcome,</p>
        </Up>
        <Down>
          <h1>Pako Station</h1>
        </Down>
      </Left>
      <Right>
        <Hold>
          <Ic>
            <AiTwotoneBank />
          </Ic>
          <p>Stations</p>
        </Hold>
        <Holds>
          <Ip>
            <VscSearch />
          </Ip>
          <input />
        </Holds>
        <Noti>
          <Bi>
            <CiBellOn />
          </Bi>
          <span>0</span>
        </Noti>
      </Right>
    </Main>
  );
};

export default StationHeader;
const Right = styled.div`
  display: flex;
  width: 60%;
  justify-content: space-around;
  align-items: center;
  /* margin-right: 20px; */
`;
const Main = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  background-color: #eaeaea;
  /* position: fixed; */
`;
const Left = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  /* background-colo:red; */
`;
const Bi = styled.div`
  font-size: 20px;
  width: 35px;
  height: 35px;
  justify-content: center;
  align-items: center;
  display: flex;
  border-radius: 50%;
  background-color: #fff;
  color: #03b903;
`;
const Noti = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  span {
    width: 25px;
    height: 25px;
    justify-content: center;
    align-items: center;
    display: flex;
    border-radius: 45%;
    background-color: #03b903;
    color: white;
    margin-top: -20px;
    margin-left: -15px;
  }
`;
const Hold = styled.div`
  display: flex;
  background-color: #03b903;
  padding: 8px 12px;
  height: 35px;
  justify-content: space-between;
  align-items: center;
  margin-right: 20px;
  border-radius: 10px;
  p {
    color: white;
    margin-left: 10px;
  }
`;
const Holds = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 40px;
  border-radius: 6px;
  background-color: #fff;
  /* border: 1px black solid; */
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  input {
    border: none;
    outline: 0;
    width: 90%;
    height: 100%;
    border-radius: 6px;
    padding-left: 5px;
    background-color: transparent;
  }
`;
const Ic = styled.div`
  color: white;
`;
const Ip = styled.div`
  font-size: 16px;
  padding-left: 10px;
  margin-top: 5px;
`;
const Up = styled.div`
  p {
    margin: 0;
    font-size: 18px;
    margin-top: 20px;
    font-weight: bold;
  }
`;
const Down = styled.div`
  /* margin-top: -15px; */
  p {
    margin: 0;
  }
  h1 {
    margin: 0;
  }
`;
