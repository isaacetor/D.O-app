"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const BinaryStatus_1 = __importDefault(require("./BinaryStatus"));
const BinaryButton_1 = __importDefault(require("./BinaryButton"));
const DynamicTablesData = ({ content1, content2, content3, content4, content5, buttons, action, }) => {
    const [Action, SetAction] = react_1.default.useState(false);
    action = Action;
    return (<Container onClick={() => {
            SetAction(!Action);
        }}>
      <Contents>
        <div> {content1} </div>
        <div>{content2}</div>
        <div> {content3} </div>
        {buttons ? (<>
            <BinaryStatus_1.default active={content4}/>
            <BinaryButton_1.default swap={content4 ? false : true}/>
          </>) : (<>
            <div>{content4}</div>
            <div>{content5}</div>
          </>)}
      </Contents>
    </Container>);
};
exports.default = DynamicTablesData;
const Container = styled_components_1.default.div `
  width: 100%;
  height: 100%;
  font-size: 13px;
  /* @media screen and (max-width: 600px) {
    font-size: 10px;
  }
  @media screen and (max-width: 500px) {
    font-size: 8px;
  } */
  @media screen and (max-width: 400px) {
    font-size: 10px;
  }
  color: #414040;
`;
const Contents = styled_components_1.default.div `
  width: 100%;
  height: 100%;
  border-radius: 3px;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
  padding-left: 20px;
  margin-top: 11px;
  margin-bottom: 11px;
  padding-top: 9px;
  padding-bottom: 9px;
  background-color: white;
  transition: all 500ms;
  :active {
    border: 2px solid #00d692;
  }
`;
