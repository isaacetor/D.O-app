"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const StationHeader_1 = __importDefault(require("../../components/commons/props/StationHeader"));
const StationDashboardCard_1 = __importDefault(require("../../components/commons/props/StationDashboardCard"));
const StationDashboardRequest_1 = __importDefault(require("../../components/commons/props/StationDashboardRequest"));
const StationHome = () => {
    return (<Container>
      <Wrap>
        <StationHeader_1.default bg="#3b393931" title="Welcome" subtitle="Pako Station"/>
        <Sec>
          <Wrapper>
            <HoldCard>
              <StationDashboardCard_1.default />
            </HoldCard>
            <Holdquest>
              <StationDashboardRequest_1.default />
            </Holdquest>
          </Wrapper>
        </Sec>
      </Wrap>
    </Container>);
};
exports.default = StationHome;
const Wrapper = styled_components_1.default.div `
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  gap: 10%;
  @media screen and (max-width: 1238px) {
    justify-content: center;
  }
`;
const HoldCard = styled_components_1.default.div `
  width: 600px;
  @media screen and (max-width: 1300px) {
    width: 550px;
  }
  @media screen and (max-width: 1238px) {
    width: 100%;
  }
`;
const Holdquest = styled_components_1.default.div `
  width: 250px;
  @media screen and (max-width: 1238px) {
    width: 60%;
  }
  @media screen and (max-width: 466px) {
    width: 100%;
  }
`;
const Sec = styled_components_1.default.div `
  width: 100%;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 1238px) {
    align-items: center;
  }
  margin-top: 23vh;
`;
const Wrap = styled_components_1.default.div `
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Container = styled_components_1.default.div `
  width: 100%;
  height: 100%;
`;
