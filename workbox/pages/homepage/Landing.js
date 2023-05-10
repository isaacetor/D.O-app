"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Hero_1 = __importDefault(require("./Hero"));
const Awareness_1 = __importDefault(require("./Awareness"));
const Steps_1 = __importDefault(require("./Steps"));
const GetStarted_1 = __importDefault(require("./GetStarted"));
const Block_1 = __importDefault(require("./Block"));
const Gallery_1 = __importDefault(require("./Gallery"));
const Landing = () => {
    return (<div>
      <Hero_1.default />
      <Gallery_1.default />
      <Awareness_1.default />
      <Steps_1.default />
      <GetStarted_1.default />
      <Block_1.default />
    </div>);
};
exports.default = Landing;
