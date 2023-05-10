"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const Globalbutton = ({ bg, col, padding, text, bghovercolor, bor, hovCol, width, onClick, }) => {
    return (<Button bg={bg} col={col} padding={padding} bghovercolor={bghovercolor} bor={bor} hovCol={hovCol} width={width} onClick={onClick}>
      {text}
    </Button>);
};
exports.default = Globalbutton;
const Button = styled_components_1.default.button `
  padding: ${({ padding }) => padding};
  width: ${({ width }) => width};
  color: ${(props) => props.col};
  background-color: ${({ bg }) => bg};
  font-size: 16px;
  border: 0;
  border-radius: 5px;
  font-weight: 500;
  text-transform: capitalize;
  transition: all 0.2s ease;

  :hover {
    cursor: pointer;
    background-color: ${(props) => props.bghovercolor};
    border: ${(props) => props.bor};
    color: ${(props) => props.hovCol};
    transform: scale(0.98);
  }
`;
