"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ai_1 = require("react-icons/ai");
const ci_1 = require("react-icons/ci");
const vsc_1 = require("react-icons/vsc");
const styled_components_1 = __importDefault(require("styled-components"));
// import { useAppSelector } from "../../../services/statemanagement/Store";
const Store_1 = require("../../services/statemanagement/Store");
const AgentHeader = () => {
    const user = (0, Store_1.useAppSelector)((state) => state.directorDetails);
    // const percentage = user?.numberOfRequests;
    return (<Main>
      <Left>
        <Up>
          <p>welcome Back,</p>
        </Up>
        <Down>
          <h1>{user === null || user === void 0 ? void 0 : user.name}</h1>
        </Down>
      </Left>
      <Right> 
    <Hol>
    <Hold>
          <Ic>
            <ai_1.AiTwotoneBank />
          </Ic>
          <p>Stations</p>
        </Hold>
        <Holds>
          <Ip>
            <vsc_1.VscSearch />
          </Ip>
          <input />
        </Holds>
    </Hol>
        <Noti>
          <Bi>
            <ci_1.CiBellOn />
          </Bi>
          <span>0</span>
        </Noti>
      </Right>
    </Main>);
};
exports.default = AgentHeader;
const Bi = styled_components_1.default.div `
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
const Noti = styled_components_1.default.div `
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
const Right = styled_components_1.default.div `
  display: flex;
  width: 60%;
  justify-content: space-around;
  align-items: center;
  /* margin-right: 20px; */
`;
const Hol = styled_components_1.default.div `
  display: flex;
  width: 60%;
 @media screen and (max-width:425px){
  display: flex;
  width: 60%;
  flex-direction: column;
 }
`;
const Main = styled_components_1.default.div `
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
const Left = styled_components_1.default.div `
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  /* background-colo:red; */
`;
const Hold = styled_components_1.default.div `
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
const Holds = styled_components_1.default.div `
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
const Ic = styled_components_1.default.div `
  color: white;
`;
const Ip = styled_components_1.default.div `
  font-size: 16px;
  padding-left: 10px;
`;
const Up = styled_components_1.default.div ``;
const Down = styled_components_1.default.div `
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
