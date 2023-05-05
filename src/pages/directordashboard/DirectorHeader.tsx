import react from "react";
import { AiTwotoneBank } from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs";
import { CiBellOn } from "react-icons/ci";
import { VscSearch } from "react-icons/vsc";
import styled from "styled-components";
// import { useAppSelector } from "../../../services/statemanagement/Store";
import { useAppSelector } from "../../services/statemanagement/Store";

const AgentHeader = () => {
  const user = useAppSelector((state) => state.directorDetails);
  // const percentage = user?.numberOfRequests;
  return (
    <Main>
      <Left>
        <Up>
          <p>welcome Back,</p>
        </Up>
        <Down>
          <h1>{user?.name}</h1>
        </Down>
      </Left>
      <Right> 
    <Hol>
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
    </Hol>
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
export default AgentHeader;

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

const Right = styled.div`
  display: flex;
  width: 60%;
  justify-content: space-around;
  align-items: center;
  /* margin-right: 20px; */
`;
const Hol = styled.div`
  display: flex;
  width: 60%;
 @media screen and (max-width:425px){
  display: flex;
  width: 60%;
  flex-direction: column;
 }
`
const Main = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  @media screen and (max-width:425px){
  justify-content:space-between;
  margin-top: -50px;
    /* background-color:red;  */
  }
`;
const Left = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  /* background-colo:red; */
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
  @media screen and (max-width:425px){
    padding: 5px 8px;
    display: none;
    p{
      font-size:16px;
    }
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
  @media screen and (max-width:425px){
    width: 240%;
    margin-top: 150px;
    margin-left: -150px;
    input{
      /* display: none; */
    }
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
  @media screen and (max-width:425px){
    h1{
      font-size:20px;
    }
  }
`;
