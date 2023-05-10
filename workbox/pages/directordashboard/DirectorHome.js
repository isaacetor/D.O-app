"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const DirectorMain_1 = __importDefault(require("./DirectorMain"));
const DirectorHeader_1 = __importDefault(require("./DirectorHeader"));
const DirectorRecent_1 = __importDefault(require("./DirectorRecent"));
const AgentHome = () => {
    return (<Container>
      <Wrap>
        <DirectorHeader_1.default />
        <Sec>
          <DirectorMain_1.default />
          <DirectorRecent_1.default />
        </Sec>
      </Wrap>
    </Container>);
};
exports.default = AgentHome;
const Sec = styled_components_1.default.div `
  width: 100%;
  display: flex;
  justify-content: space-around;
  @media screen and (max-width:425px){
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;
const Wrap = styled_components_1.default.div `
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Container = styled_components_1.default.div `
  width: calc(100% - 270px);
  height: 100vh;
  /* background-color: red; */
  @media screen and (max-width:425px){
    width:100%;
  }
`;
