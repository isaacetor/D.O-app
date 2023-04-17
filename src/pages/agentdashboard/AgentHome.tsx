import React from "react";
import styled from "styled-components";
import { BsFillPeopleFill } from "react-icons/bs";
import { VscSearch } from "react-icons/vsc";
import { CiBellOn } from "react-icons/ci";
import p1 from "../../assets/svgs/draw.svg";
const AgentHome = () => {
  return (
    <Container>
      <Wrap>
        <Main>
          <Left>
            <Up>
              <p>welcome Back,</p>
            </Up>
            <Down>
              <h1>Boss</h1>
            </Down>
          </Left>
          <Right>
            <Hold>
              <Ic>
                <BsFillPeopleFill />
              </Ic>
              <p>Reg Staff</p>
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
        <Sec>
          <One>
            <Detail>
              <Pop>
                <h3>
                  Wants some extra <br />
                  cash?
                </h3>
                <p>
                  so what you have to do is to
                  <br />
                  just copy the url and paste it here
                  <br />
                  cause this is rubbish
                </p>
                <Hold1>
                  <p>Send</p>
                </Hold1>
              </Pop>
              <Pip>
                <img src={p1} alt="" />
              </Pip>
            </Detail>
            <Infos>
              <Users></Users>
              <Amounts></Amounts>
            </Infos>
          </One>
          <Two>
            <Tit>Recent Request</Tit>
          </Two>
        </Sec>
      </Wrap>
    </Container>
  );
};

export default AgentHome;
const Tit = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  background-color: white;
  color: black;
  position: sticky;
  align-items: center;
  padding-left: 10px;
`;
const Sec = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  /* background-color: white; */

  /* align-items: center; */
`;
const One = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Two = styled.div`
  width: 350px;
  height: 600px;
  background-color: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;
const Pop = styled.div`
  display: flex;
  flex-direction: column;
  h3 {
    color: white;
    font-size: 30px;
  }
  p {
    color: white;
    font-size: 14px;
  }
`;
const Pip = styled.div`
  img {
    width: 300px;
  }
`;
const Infos = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 50px;
`;
const Users = styled.div`
  width: 400px;
  height: 260px;
  background-color: #a77373;
  border-radius: 10px;
`;
const Amounts = styled.div`
  width: 400px;
  height: 260px;
  background-color: #1f0404;
  border-radius: 10px;
`;
const Detail = styled.div`
  background-color: #14329e;
  width: 800px;
  border-radius: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 15px;
  margin-bottom: 20px;
  /* gap: 10px; */
`;
const Bi = styled.div`
  font-size: 20px;
  width: 35px;
  height: 35px;
  justify-content: center;
  align-items: center;
  display: flex;
  border-radius: 50%;
  background-color: #928f8f;
  color: white;
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
    background-color: #2e53da;
    color: white;
    margin-top: -20px;
    margin-left: -15px;
  }
`;
const Container = styled.div`
  width: calc(100vw - 270px);
  min-height: 100vh;
  max-height: 100%;
  background-color: red;
  /* padding: 10px; */
`;
const Wrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  /* padding-left: 20px; */
`;
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
`;
const Left = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  /* background-colo:red; */
`;
const Hold1 = styled.div`
  display: flex;
  width: 80px;
  height: 35px;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 8px 12px;
  /* margin-right: 20px; */
  border-radius: 10px;
  p {
    width: 100%;
    color: #2e53da;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const Hold = styled.div`
  display: flex;
  background-color: #2e53da;
  padding: 8px 12px;
  height: 35px;
  justify-content: space-between;
  align-items: center;
  margin-right: 20px;
  border-radius: 10px;
  p {
    color: white;
  }
`;
const Holds = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 40px;
  border-radius: 6px;
  /* border: 1px black solid; */
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  input {
    border: none;
    outline: 0;
    width: 90%;
  }
`;
const Ic = styled.div`
  color: white;
`;
const Ip = styled.div`
  font-size: 16px;
  padding-left: 10px;
`;
const Up = styled.div``;
const Down = styled.div`
  /* margin-top: -15px; */
  p {
    margin: 0;
  }
  h1 {
    margin: 0;
  }
`;
