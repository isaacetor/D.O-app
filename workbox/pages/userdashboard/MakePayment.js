"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const components_1 = require("../../components");
const money_png_1 = __importDefault(require("../../assets/images/money.png"));
const MakePayment = () => {
    return (<div>
      <Container>
        <components_1.UserDashboardHeader title="Wallet" amount="N2000" display="flex" height="24vh" btnDisplay="none"/>

        <Body>
          <First>
            <HoldC bg="#3c37ff">
              <components_1.UserDashboardCards bgcol1="" bigText="top up Balance" bigTextCol="#fff" smallText="Pay for your waste disposal!" smallTextCol="#fff" imgPic={money_png_1.default}/>
              <components_1.GlobalButton bg="" col="#3c37ff" padding="18px 30px" text="Pay now!" bghovercolor="transparent" bor="1px solid #fff" hovCol="#fff" width="210px"/>
            </HoldC>
          </First>
          <Second>
            <TransactionHistory>
              <components_1.UserRequestTable />
            </TransactionHistory>
          </Second>
        </Body>
      </Container>
    </div>);
};
exports.default = MakePayment;
const TransactionHistory = styled_components_1.default.div `
  width: 93%;
  margin-top: 60px;
  margin-bottom: 50px;
  margin-left: 45px;

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
  padding-left: 45px;
  gap: 30px;
  padding-top: 30px;
  margin-bottom: 10px;

  @media screen and (max-width: 800px) {
    padding-left: 0px;
    justify-content: center;
  }
`;
const Body = styled_components_1.default.div `
  width: 100%;
  margin-top: 23vh;

  @media screen and (max-width: 800px) {
    margin-top: 12vh;
  }
`;
const Container = styled_components_1.default.div `
  width: calc(100vw - 270px);
  background-color: #f7f7f764;

  @media screen and (max-width: 1050px) {
    width: calc(100% - 70px);
  }
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;
