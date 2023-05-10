"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const Home_Business_1 = __importDefault(require("./Home.Business"));
const UserDashboardHome = () => {
    return (<div>
      <Container>
        <Wrapper>
          <Main>
            <First>
              <Home_Business_1.default />
              {/* <TransactionHistory /> */}
            </First>
            {/* <Second>
          <UserDashboardSidebar />
        </Second> */}
          </Main>
        </Wrapper>
      </Container>
    </div>);
};
exports.default = UserDashboardHome;
const Second = styled_components_1.default.div `
  width: 35%;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;
const First = styled_components_1.default.div `
  width: 100%;
  height: 100%;
  display: flex;
  /* justify-content: space-between; */
  flex-direction: column;
  flex-wrap: wrap;
`;
const Main = styled_components_1.default.div `
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;
const Text = styled_components_1.default.div `
  width: 100%;
  /* height: 10%; */
  /* background-color: blue; */
  color: #1d1d41;
  font-weight: 600;
  font-size: 22px;
  margin-bottom: 10px;
  margin-top: 20px;
  margin-left: 15px;
`;
const Wrapper = styled_components_1.default.div `
  width: 95%;
  /* height: 95%; */

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
const Container = styled_components_1.default.div `
  width: calc(100vw - 270px);
  /* height: 100vh; */
  display: flex;
  justify-content: center;
  align-items: center;

  overflow: hidden;

  @media screen and (max-width: 768px) {
    width: calc(100vw - 70px);
  }
`;
