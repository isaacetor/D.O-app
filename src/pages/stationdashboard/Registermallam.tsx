import React from "react";
import styled from "styled-components";
import Globalbutton from "../../components/commons/props/Globalbutton";

const Registermallam = () => {
  return (
    <Cont>
      <Wrap>
        <MainHead>Stations</MainHead>
        <Main>
          <Details>
            <p>Create Carriers</p>
          </Details>
        </Main>
        <Info>
          <Infos>
            <Hold>
              <HoldText>Name of Carrier</HoldText>
              <input type="text" placeholder="Full name" />
            </Hold>
            <Hold>
              <HoldText>Phone Number</HoldText>
              <input type="text" placeholder="Phone-Number" />
            </Hold>
            <Hold>
              <HoldText>Address</HoldText>
              <input type="text" placeholder="Address" />
            </Hold>
          </Infos>
          <ButHold>
            <Globalbutton
              bg="#03b903"
              col="#fff"
              padding="15px"
              text="Register"
              bghovercolor="transparent"
              bor="1px solid #fff"
              hovCol="#fff"
              width="200px"
            />
          </ButHold>
        </Info>
      </Wrap>
    </Cont>
  );
};

export default Registermallam;

const Cont = styled.div`
  width: calc(100% - 250px);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  /* justify-content: center;
align-items: center; */
`;
const MainHead = styled.div`
  margin-top: 50px;
  font-size: 35px;
  font-weight: 600;
`;
const Main = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-between;
  margin-bottom: 20px;
  p {
    color: #03b903;
    font-size: 22px;
    font-weight: bold;
    border-bottom: 3px #03b903 solid;
    /* padding-bottom: 5px; */
  }
  span {
    color: black;
    font-size: 20px;
    // border-bottom: 3px blue solid;
    padding-bottom: 15px;
  }
`;
const Details = styled.div``;
const Info = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;
const Infos = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* justify-content: space-between; */
`;
const Hold = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 50px;
  margin-bottom: 30px;
  input {
    width: 500px;
    height: 45px;
    outline: none;
    padding-left: 8px;
    border-radius: 5px;
    margin-top: 2px;
    /* box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px; */
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    border: none;
  }
`;
const HoldText = styled.div`
  border-bottom: 3px solid #03b903;
  width: 150px;
  margin-bottom: 10px;
  font-size: 18px;
  color: #a5a5a5;
`;
const ButHold = styled.div`
  /* button {
    padding: 15px 20px;
    color: white;
    background-color: blue;
    border-radius: 3px;
    border: none;
    font-size: 20px;
  } */
`;
