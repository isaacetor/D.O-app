"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const components_1 = require("../../components");
const request_png_1 = __importDefault(require("../../assets/images/request.png"));
const Store_1 = require("../../services/statemanagement/Store");
const DynamicTablesHeads_1 = __importDefault(require("../../components/commons/props/DynamicTablesHeads"));
const DynamicTablesData_1 = __importDefault(require("../../components/commons/props/DynamicTablesData"));
const MakeRequest = () => {
    const user = (0, Store_1.useAppSelector)((state) => state.userDetails);
    console.log("user", user);
    return (<Container>
      <components_1.UserDashboardHeader height="18vh" title="Make Request" display="none"/>
      <Body>
        <First>
          <HoldC bg="#03b903">
            <components_1.UserDashboardCards bgcol1="" bigText="Request for trash pickup" bigTextCol="#fff" smallText="is your trash full? request for it to be picked up and dispose now!" smallTextCol="#fff" imgPic={request_png_1.default}/>
            <components_1.GlobalButton bg="" col="#03b903" padding="18px 30px" text="Make Request" bghovercolor="transparent" bor="1px solid #fff" hovCol="#fff" width="210px"/>
          </HoldC>
          <HoldC bg="#3c37ff">
            <components_1.UserDashboardCards bgcol1="" bigText="Make Custom Request" bigTextCol="#fff" smallText="is your trash full? request for it to picked up and dispose now!" smallTextCol="#fff" imgPic={request_png_1.default}/>
            <components_1.GlobalButton bg="" col="#3c37ff" padding="18px 30px" text="Make Request" bghovercolor="transparent" bor="1px solid #fff" hovCol="#fff" width="210px"/>
          </HoldC>
        </First>
        <Second>
          <TransactionHistory>
            <DynamicTablesHeads_1.default title1="Name" title2="Phone" title3="Requests" title4="Status" title5="Activity"/>
            {[].map((props) => (<DynamicTablesData_1.default content1={props.name} content2={props.phone} content3="" content4="" buttons/>))}
          </TransactionHistory>
        </Second>
      </Body>
    </Container>);
};
exports.default = MakeRequest;
const TransactionHistory = styled_components_1.default.div `
  width: 93%;
  margin-top: 60px;
  margin-bottom: 50px;

  @media screen and (max-width: 800px) {
    margin-bottom: 120px;
  }
`;
const HoldC = styled_components_1.default.div `
  display: flex;
  flex-direction: column;
  background-color: ${({ bg }) => bg};
  width: 385px;
  padding: 25px;
  border-radius: 10px;
  gap: 30px;

  @media screen and (max-width: 1198px) {
    width: 350px;
  }
  @media screen and (max-width: 800px) {
    width: 80%;
  }
`;
const Second = styled_components_1.default.div `
  width: 85%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const First = styled_components_1.default.div `
  display: flex;
  flex-wrap: wrap;
  padding-left: 30px;
  gap: 30px;
  padding-top: 20px;
  margin-bottom: 10px;

  @media screen and (max-width: 800px) {
    padding-left: 0px;
    justify-content: center;
  }
`;
const Body = styled_components_1.default.div `
  margin-top: 18vh;
  width: 100%;
  /* height: 100%; */

  @media screen and (max-width: 800px) {
    margin-top: 14vh;
  }
`;
const Container = styled_components_1.default.div `
  width: calc(100% - 270px);
  background-color: #f7f7f764;

  @media screen and (max-width: 1050px) {
    width: calc(100% - 70px);
  }
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;
