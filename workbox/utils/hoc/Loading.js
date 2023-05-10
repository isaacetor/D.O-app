"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const recycle_gif_1 = __importDefault(require("../../assets/images/recycle.gif"));
const Loading = () => {
    return (<Container>
      <img src={recycle_gif_1.default}/>
    </Container>);
};
exports.default = Loading;
const Container = styled_components_1.default.div `
  width: 100vw;
  height: 100vh;
  background-color: #000000ac;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;

  img {
    height: 70px;
    width: 70px;
  }
`;
