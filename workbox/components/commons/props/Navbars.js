"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const NavBars = ({ pic, routeName, cl, bd, hov }) => {
    return (<Container hov={hov} cl={cl} bd={bd}>
      <Pic>{pic}</Pic>
      <Name>{routeName}</Name>
    </Container>);
};
exports.default = NavBars;
const Container = styled_components_1.default.div `
  width: calc(100% - 30px);
  display: flex;
  align-items: center;
  gap: 25px;
  padding-left: 30px;
  @media screen and (min-width: 801px) and (max-width: 1051px) {
    padding-left: 17px;
  }
  color: ${(props) => props.cl};
  border-left: ${(props) => props.bd};
  transition: all 350ms;
  :hover {
    background-color: ${(props) => props.hov};
  }
  cursor: pointer;
  height: 40px;
  font-size: 14px;
  font-weight: 600;
`;
const Pic = styled_components_1.default.div `
  font-size: 23px;
  @media screen and (min-width: 801px) and (max-width: 1051px) {
    margin-right: 20px;
  }
`;
const Name = styled_components_1.default.div `
  margin-bottom: 2px;
  @media screen and (min-width: 801px) and (max-width: 1051px) {
    display: none;
  }
`;
