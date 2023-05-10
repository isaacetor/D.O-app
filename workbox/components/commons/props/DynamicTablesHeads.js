"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const DynamicTablesHeads = ({ title1, title2, title3, title4, title5, }) => {
    return (<Container>
      <Titles>
        <div>{title1}</div>
        <div>{title2}</div>
        <div>{title3}</div>
        <div>{title4}</div>
        <div>{title5}</div>
      </Titles>
    </Container>);
};
exports.default = DynamicTablesHeads;
const Container = styled_components_1.default.div `
  width: 100%;
  height: 100%;
  padding-top: 20px;
  font-size: 13px;
  /* @media screen and (max-width: 600px) {
    font-size: 10px;
  }
  @media screen and (max-width: 500px) {
    font-size: 8px;
  } */
  @media screen and (max-width: 400px) {
    font-size: 11px;
  }
  color: #414040;
`;
const Titles = styled_components_1.default.div `
  width: 100%;
  height: 100%;
  border-bottom: 1px solid silver;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
  padding-left: 20px;
  padding-bottom: 12px;
  margin-bottom: 25px;
`;
const Contents = styled_components_1.default.div `
  width: 100%;
  height: 100%;
  border-radius: 4px;
  border: 1px solid #00d692;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
  padding-left: 20px;
  margin-top: 7px;
  margin-bottom: 7px;
  padding-top: 9px;
  padding-bottom: 9px;
`;
