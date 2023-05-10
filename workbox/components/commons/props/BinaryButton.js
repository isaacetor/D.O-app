"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const BinaryButton = ({ swap }) => {
    return (<div>
      {swap ? (<Button cs="pointer" bc="orange" cl="#292929">
          <div>Assign</div>
        </Button>) : (<Button cs="not-allowed" bc="lightgrey" cl="grey">
          <div>Disabled</div>
        </Button>)}
    </div>);
};
exports.default = BinaryButton;
const Button = styled_components_1.default.button `
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  cursor: ${(props) => props.cs};
  color: ${(props) => props.cl};
  background-color: ${(props) => props.bc};
  border: none;
  outline: none;
  max-width: 78%;
  min-width: 67%;
  border-radius: 3px;
  font-size: 13px;
  /* @media screen and (max-width: 600px) {
    font-size: 10px;
  }
  @media screen and (max-width: 500px) {
    font-size: 8px;
  } */
  @media screen and (max-width: 400px) {
    font-size: 8px;
  }
`;
