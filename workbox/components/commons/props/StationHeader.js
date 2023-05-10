"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const vsc_1 = require("react-icons/vsc");
const ci_1 = require("react-icons/ci");
const Store_1 = require("../../../services/statemanagement/Store");
const StationHeader = ({ bg, subtitle, title }) => {
    const stationuser = (0, Store_1.useAppSelector)((state) => state.stationdetail);
    return (<Main bg={bg}>
      <Wrapper>
        <Left>
          <Up>
            <p>{title}</p>
          </Up>
          <Down>
            <H1>{stationuser === null || stationuser === void 0 ? void 0 : stationuser.station}</H1>
          </Down>
        </Left>
        <Right>
          <Holds>
            <Ip>
              <vsc_1.VscSearch />
            </Ip>
            <input />
          </Holds>
          <Noti>
            <Bi>
              <ci_1.CiBellOn />
            </Bi>
            <span>0</span>
          </Noti>
        </Right>
      </Wrapper>
    </Main>);
};
exports.default = StationHeader;
const Wrapper = styled_components_1.default.div `
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-left: 5px;

  @media screen and (max-width: 800px) {
    width: 100%;
  }
  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;
const Right = styled_components_1.default.div `
  display: flex;
  width: 60%;
  justify-content: space-around;
  align-items: center;

  @media screen and (max-width: 800px) {
    display: none;
  }
`;
const Main = styled_components_1.default.div `
  width: calc(100% - 250px);
  height: 17vh;
  display: flex;
  margin-bottom: 20px;
  background-color: ${({ bg }) => bg};
  position: fixed;
  top: 0;
  @media screen and (max-width: 800px) {
    width: 100%;
    /* height: fit-content; */
  }
  @media screen and (max-width: 500px) {
    width: 100%;
    /* height: fit-content; */
  }
  @media screen and (max-width: 1051px) {
    width: calc(100vw - 70px);
  }
`;
const Left = styled_components_1.default.div `
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;
const Bi = styled_components_1.default.div `
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
    background-color: #03b903;
    color: white;
    margin-top: -20px;
    margin-left: -15px;
  }
`;
const Hold = styled_components_1.default.div `
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
const Holds = styled_components_1.default.div `
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
const Ic = styled_components_1.default.div `
  color: white;
`;
const Ip = styled_components_1.default.div `
  font-size: 16px;
  padding-left: 10px;
  margin-top: 5px;
`;
const Up = styled_components_1.default.div `
  p {
    margin: 0;
    font-size: 18px;
    margin-top: 20px;
    font-weight: 500;
    @media screen and (max-width: 500px) {
      font-size: 16px;
    }
  }
`;
const Down = styled_components_1.default.div `
  /* margin-top: -15px; */
  p {
    margin: 0;
  }
  h1 {
    margin: 0;
  }
`;
const H1 = styled_components_1.default.div `
  font-size: 25px;
  font-weight: bold;
`;
